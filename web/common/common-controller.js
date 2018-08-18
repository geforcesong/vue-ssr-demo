const BaseController = require("./base-controller");
const Vue = require('vue');
const fs = require('fs');
const path = require('path');

class CommonController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        const model = {
            title: 'home page 1111',
            meta: `
                <meta property="og:type" content="property list">
                <meta property="og:site_name" content="Movoto">
            `,
            text: 'you are are are .....',
            requestUrlRaw: req.path,
            pageName: req.path === '/' ? 'home' : 'about'
        }
        this.renderPage(model)
    }
}

module.exports = CommonController;