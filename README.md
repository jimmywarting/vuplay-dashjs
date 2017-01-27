# vuplay dashjs

## Description

This repo will demonstrate how to use vudrm with the [dash.js](https://github.com/Dash-Industry-Forum/dash.js/wiki).
If you have any questions please contact support@vualto.

## Instructions

### Install Dependancies

1. Install [npm](https://www.npmjs.com/)
2. Install the [grunt-cli](https://www.npmjs.com/package/grunt-cli): `npm install -g grunt-cli`
3. Clone the repo: `git clone git@github.com:Vualto/vuplay-dashjs.git`
4. Navigate to the project's root folder: `cd vuplay-dashjs`
5. Install the dependancies: `npm install`

### Build and run the dev environment

Running `grunt build` in the project's root will create a `dist` folder that contains all the files need to run this demo.

You can run `grunt serve` that will run the build task and attempt to load a node.js server at `http://dashjs.vuplay.local.drm.technology:14703`

Please note that you will need to add the host `dashjs.vuplay.local.drm.technology` to your local machine's hosts file in order for this to work.
This server is not suitable for production.

## Useful links

### dash.js

- [dash if forum](http://dashif.org/)
- [dash.js wiki](https://github.com/Dash-Industry-Forum/dash.js/wiki)
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js)

### build tools

- [npm](https://www.npmjs.com/)
- [grunt](http://gruntjs.com/)