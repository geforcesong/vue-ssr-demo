const BaseController = require("../common/base-controller");
const Vue = require('vue');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.resolve(__dirname, '..', 'common/templates/index.template.html'), 'utf-8')
const { createBundleRenderer } = require('vue-server-renderer');
const renderer = createBundleRenderer(require('../../dist/vue-ssr-server-bundle.json'), {
    // ……renderer 的其他选项
    template
})

class HomeController extends BaseController {
    constructor() {
        super();
    }

    loadView(req, res, next) {
        this.initialize(req, res, next);
        const templateContext = {
            title: 'home page 1111',
            meta: `
                <meta property="og:type" content="property list">
                <meta property="og:site_name" content="Movoto">
            `,
            text: 'you are are are .....'
        }
        renderer.renderToString(templateContext, (err, html) => {
            // 处理异常……
            res.end(html)
        });
    }
}

module.exports = HomeController;