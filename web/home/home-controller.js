const BaseController = require("../common/base-controller");
const Vue = require('vue');
const fs = require('fs');
const bundle =  require('../../dist/home.server.bundle.js');
class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        // const app = new Vue({
        //     data: {
        //         url: req.url
        //     },
        //     template: `<div>the url is {{url}}</div>`
        // });
        bundle.default({ url: req.url, text: 'This is text from home page model.' }).then((app)=>{
            const templateContext = {
                title: 'home page',
                meta: `
                    <meta property="og:type" content="property list">
                    <meta property="og:site_name" content="Movoto">
                `,
                inlineStyle: ``
            }
            const inlineStyle = fs.readFileSync(__dirname + '/styles/home-inline.css', 'utf-8');
            if (inlineStyle) {
                templateContext.inlineStyle = `<style type="text/css">${inlineStyle}</style>`;
            }
            this.rendering(app, templateContext);
        })
    }
}

module.exports = HomeController;