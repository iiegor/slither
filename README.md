# slither ![npm-deps](https://david-dm.org/iiegor/slither.svg)

![This is currently under extremely active development, and you probably shouldn't use it unless you like broken software.](https://drive.google.com/uc?export=download&id=0B9WchF8WhEn9YTZnQkZvNzMzaDg "This is currently under extremely active development, and you probably shouldn't use it unless you like broken software.")

This is supposed to be an open source implementation of the slither server built on top of Node.js that emulates the full functionality of the original server.

## Install
You can get the latest stable release from the [releases](https://github.com/iiegor/slither/releases) page. Once you've downloaded it, you are ready to run the following commands:
```sh
$ cd slither
$ npm install
```
Obviously, if you want to try the latest version, you can clone the master branch but can have bugs because it's a development branch, so don't use it for production.

The server depends on [Node.js](http://nodejs.org/), [npm](http://npmjs.org/) and other packages that are downloaded and installed during the installation process.

## Run
Execute ``$ script/run`` or ``$ npm start`` to start the server.

If you want to install a plugin, add it to ``packageDependencies`` in the package.json with the respective version.

Example:
```json
{
  ...
  "packageDependencies": {
    "my-plugin": "0.1.0"
  }
}
```
and run ``$ script/install``.

## Contributors
* **Iegor Azuaga** (dextrackmedia@gmail.com)

You can contribute to the project by cloning, forking or starring it. If you have any bug, open an issue or if you have an interesting thing you want to implement into the official repository, open a pull request.

## License
MIT © [Iegor Azuaga](https://github.com/iiegor)
