<p align="center">
    <img alt="logo black" src="/public/images/logo_black.svg" height="70px"><br>
    <img alt="Happy App into notebook" src="https://dl.dropboxusercontent.com/s/idtcu2tsmomx10o/happy-notebook.jpg?dl=0" height="380px" />
</p>

<p align="center">
  <a href="#question-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer_and_wrench-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#star-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#balance_scale-license">License</a>
</p>

## :question: About:
Would you like to donate money and supplies to orphanages but you can't? Maybe you can touch hearts by spreading kindness and given care. In that spirit, between October 12th and 16th, [@Rocketseat](https://github.com/Rocketseat) held a [next level week](https://nextlevelweek.com/) event, in which [@MaykBrito](https://github.com/maykbrito/) taught us how to create a **happy** app to bring volunteers closer to orphanages. It's simple: The orphanage registers its data on the platform, while visitors access it to schedule visits.

## :rocket: Technologies:
- [JavaScript](https://www.javascript.com/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [Node.js](https://nodejs.org/en/)
- [Handlebars](https://handlebarsjs.com/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)

## :hammer_and_wrench: Installation:
To create a server on your machine and use this application. First, [clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github) this repository.
```sh
$ git clone git@github.com:lobophf/happy.git
```
This application requires [Node.js](https://nodejs.org/en/) and the [npm](https://www.npmjs.com/) that comes with it. If you don't have it, you can get it by following [this](https://nodejs.org/en/download/) page. Everything should work fine for Node.js v12.19.0. Also, this project contains the [package.json](./package.json) file that holds all the dependencies used in this project. Thus, to install the npm modules, jump into the root folder, and install the dependencies like this:
```sh
$ cd happy 
$ npm i
```
If everything goes well, several files will appear, and the server will be ready to start. Therefore, run the following command:
```sh
$ node src/server.js
```
Now open your browser and access the route `https://localhost:5500/`.

## :star: Contributing:

I'm so glad when I see improvements done by other peoples. Feel free to contribute by opening pull requests for fixing bugs or typing mistakes, or even open an issue to report errors. See some useful stuffs in [Contributing](./docs/CONTRIBUTING.md) guide.

## :balance_scale: License:
This application is a MIT licensed, as found in the [LICENSE](https://github.com/lobophf/happy/blob/master/LICENSE) file.


