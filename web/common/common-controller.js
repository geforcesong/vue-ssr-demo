const BaseController = require("./base-controller");
const Vue = require('vue');
const fs = require('fs');
const bundle =  require('../../dist/site.server.bundle.js');

class CommonController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        
        bundle.default({ text: 'This is text from home page model.',requestUrlRaw: req.path }).then((app)=>{
            const templateContext = {
                title: 'home page',
                meta: `
                    <meta property="og:type" content="property list">
                    <meta property="og:site_name" content="Movoto">
                `,
                inlineStyle: ``
                
            }
            this.rendering(app, templateContext);
        });
    }
}

module.exports = CommonController;