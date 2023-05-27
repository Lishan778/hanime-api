const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const UserAgent = require('fake-useragent');

const app = express();

const jsongen = async (url) => {
  const headers = {
    'X-Signature-Version': 'web2',
    'X-Signature': crypto.randomBytes(32).toString('hex'),
    'User-Agent': new UserAgent().random,
  };
  const res = await axios.get(url, { headers });
  return res.data;
};

const getTrending = async (time, page) => {
  const trendingUrl = `https://hanime.tv/api/v8/browse-trending?time=${time}&page=${page}&order_by=views&ordering=desc`;
  const url = trendingUrl;
  const urldata = await jsongen(url);
  const jsondata = urldata.hentai_videos.map((x) => ({
    id: x.id,
    name: x.name,
    slug: x.slug,
    cover_url: x.cover_url,
    views: x.views,
    link: `/watch/${x.slug}`,
  }));
  return jsondata;
};

const getVideo = async (slug) => {
  const videoApiUrl = 'https://hanime.tv/api/v8/video?id=';
  const videoDataUrl = videoApiUrl + slug;
  const videoData = await jsongen(videoDataUrl);
  const tags = videoData.hentai_tags.map((t) => ({
    name: t.text,
    link: `/browse/hentai-tags/${t.text}/0`,
  }));
  const streams = videoData.videos_manifest.servers[0].streams.map((s) => ({
    width: s.width,
    height: s.height,
    size_mbs: s.filesize_mbs,
    url: s.url,
  }));
  const episodes = videoData.hentai_franchise_hentai_videos.map((e) => ({
    id: e.id,
    name: e.name,
    slug: e.slug,
    cover_url: e.cover_url,
    views: e.views,
    link: `/watch/${e.slug}`,
  }));
  const jsondata = {
    id: videoData.hentai_video.id,
    name: videoData.hentai_video.name,
    description: videoData.hentai_video.description,
    poster_url: videoData.hentai_video.poster_url,
    cover_url: videoData.hentai_video.cover_url,
    views: videoData.hentai_video.views,
    streams: streams,
    tags: tags,
    episodes: episodes,
  };
  return [jsondata];
};

const getBrowse = async () => {
  const browseUrl = 'https://hanime.tv/api/v8/browse';
  const data = await jsongen(browseUrl);
  return data;
};

const getBrowseVideos = async (type, category, page) => {
  const browseUrl = `https://hanime.tv/api/v8/browse/${type}/${category}?page=${page}&order_by=views&ordering=desc`;
  const browsedata = await jsongen(browseUrl);
  const jsondata = browsedata.hentai_videos.map((x) => ({
    id: x.id,
    name: x.name,
    slug: x.slug,
    cover_url: x.cover_url,
    views: x.views,
    link: `/watch/${x.slug}`,
  }));
  return jsondata;
};

app.get('/watch/:slug', async (req, res) => {
  const { slug } = req.params;
  const jsondata = await getVideo(slug);
  res.json({ results: jsondata });
});

app.get('/trending/:time/:page', async (req, res) => {
  const { time, page } = req.params;
  const jsondata = await getTrending(time, page);
  const nextPage = `/api/trending/${time}/${parseInt(page) + 1}`;
  res.json({ results: jsondata, next_page: nextPage });
});

app.get('/browse/:type', async (req, res) => {
  const { type } = req.params;
  const data = await getBrowse();
  let jsondata = data[type];
  if (type === 'hentai_tags') {
    jsondata = jsondata.map((x) => ({ ...x, url: `/browse/hentai-tags/${x.text}/0` }));
  } else if (type === 'brands') {
    jsondata = jsondata.map((x) => ({ ...x, url: `/browse/brands/${x.slug}/0` }));
  }
  res.json({ results: jsondata });
});

app.get('/browse', (req, res) => {
  res.json({ tags: '/browse/hentai_tags', brands: '/browse/brands' });
});

app.get('/browse/:type/:category/:page', async (req, res) => {
  const { type, category, page } = req.params;
  const data = await getBrowseVideos(type, category, page);
  const nextPage = `/browse/${type}/${category}/${parseInt(page) + 1}`;
  res.json({ results: data, next_page: nextPage });
});

app.get('/', (req, res) => {
    res.send('Welcome to Hanime Api 👀');
  });
  

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Server is running on port ${port}`);
});




 
