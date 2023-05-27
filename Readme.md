<p align="center">
  <a href="https://github.com/Lishan778/hanime-api">
    <img src="images/image1.png" alt="Logo" width="85" height="85">
  </a>

  <h3 align="center">Hanime API</h3>

  <p align="center">
    <samp>A hentai streaming API 👀</samp>
    <br />
    <a href="#routes"><strong>Explore the api »</strong></a>
    <br />
  </p>
  <p align="center">
    <a href="https://github.com/Lishan778/hanime-api/actions/workflows/docker-image.yml">
      <img src="https://github.com/Lishan778/hanime-api/actions/workflows/docker-image.yml/badge.svg" alt="stars">
    </a>
    <a href="https://github.com/Lishan778/hanime-api">
      <img src="https://img.shields.io/github/stars/Lishan778/hanime-api" alt="stars">
    </a>
    <a href="https://discord.gg/KyKye8TXsJ">
      <img src="https://img.shields.io/discord/961164998363738133?color=7289da&label=discord&logo=discord&logoColor=7289da" alt="Discord">
    </a>
  </p>
</p>

## For Local Development

Run the following command to clone the repository, and install the dependencies.

```sh
$ git clone https://github.com/Lishan778/hanime-api.git
$ cd hanime-api
$ npm install #or yarn install
```

start the server!

```sh
$ node src/app.js #or node .
```

### Docker
Docker image is available at [Docker Hub]([https://hub.docker.com/r/shaandev/hanime]).

run the following command to pull and run the docker image.

```sh
$ docker pull shaandev/hanime
$ docker run -p 3000:3000 shaandev/hanime
```
This will start the server on port 3000. You can access the server at http://localhost:3000/, And can change the port by changing the -p option to `-p <port>:3000`.

You can add `-d` flag to run the server in detached mode.

### Railway
Host your own API on Railway using the button below.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/xa2prB?referralCode=IQ6SJj)


## Routes

### Get Trending

| Parameter | Description                         |
| --------- | ----------------------------------- |
| `time`    | day/week/month/3_month/6_month/year |
| `page`    | page limit may vary                 |

Example request:

```
GET http://localhost:3000/trending/day/1
```

Output >>

```
{
  "results": [
    {
      "id": "123",
      "name": "Video 1",
      "slug": "video-1",
      "cover_url": "https://example.com/cover1.jpg",
      "views": 1000,
      "link": "/watch/video-1"
    },
    {
      "id": "456",
      "name": "Video 2",
      "slug": "video-2",
      "cover_url": "https://example.com/cover2.jpg",
      "views": 800,
      "link": "/watch/video-2"
    },
    {....}
  ],
  "next_page": "/trending/day/2"
}

```

### Get browse Tags

Example request:

```
GET http://localhost:3000/tags
```

Output >>

```

{
  "results": [
    {
      "id": "123",
      "text": "Hd",
      "url": "/tags/hd/0"
    },
    {
      "id": "456",
      "text": "censord",
      "url": "/tags/censord/0"
    },
    {...}
  ]
}


```

### Get tags

| Parameter  | Description         |
| ---------- | ------------------- |
| `category` | category of tags    |
| `page`     | page limit may vary |

```
GET http://localhost:3000/hentai-tags/har**/1
```

Output >>

```
{
  "results": [
    {
      "id": "123",
      "name": "Video 1",
      "slug": "video-1",
      "cover_url": "https://example.com/cover1.jpg",
      "views": 1000,
      "link": "/watch/video-1"
    },
    {
      "id": "456",
      "name": "Video 2",
      "slug": "video-2",
      "cover_url": "https://example.com/cover2.jpg",
      "views": 800,
      "link": "/watch/video-2"
    },
    {...}
  ],
  "next_page": "/hentai-tags/har**/2"
}

```

### Get video

| Parameter | Description |
| --------- | ----------- |
| `id`      | 6969        |

```
GET http://localhost:3000/watch/overflow
```

```
{
  "results": [
    {
      "id": "123",
      "name": "overflow",
      "description": "This is a sample video",
      "poster_url": "https://example.com/poster.jpg",
      "cover_url": "https://example.com/cover.jpg",
      "views": 1000,
      "streams": [
        {
          "width": 1920,
          "height": 1080,
          "size_mbs": 200,
          "url": "https://example.com/stream.m3u8"
        },
        {
          "width": 1280,
          "height": 720,
          "size_mbs": 120,
          "url": "https://example.com/stream.m3u8"
        }
      ],
      "tags": [
        {
          "name": "Tag 1",
          "link": "/hentai-tags/cream***/0"
        },
        {
          "name": "Tag 2",
          "link": "/hentai-tags/Mi**/0"
        }
      ],
      "episodes": [
        {
          "id": "456",
          "name": "Episode 1",
          "slug": "episode-1",
          "cover_url": "https://example.com/episode1.jpg",
          "views": 500,
          "link": "/watch/episode-1"
        },
        {
          "id": "789",
          "name": "Episode 2",
          "slug": "episode-2",
          "cover_url": "https://example.com/episode2.jpg",
          "views": 300,
          "link": "/watch/episode-2"
        }
      ]
    }
  ]
}

```
## Support This Project

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/shaanjp)
