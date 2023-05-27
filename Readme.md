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
