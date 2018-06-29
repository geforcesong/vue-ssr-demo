const BaseController = require("../common/base-controller");
const Vue = require('vue');

class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        const app = new Vue({
            data: {
                url: req.url
            },
            template: `<div>the url is {{url}}</div>`
        });
        const templateContext = {
            title: 'home page',
            meta: `
                <meta property="og:type" content="property list">
                <meta property="og:site_name" content="Movoto">
            `
        }
        this.rendering(app, templateContext);
    }
}

module.exports = HomeController;