const fs = require('fs');
const template = fs.readFileSync(__dirname + '/templates/index.template.html', 'utf-8')
const { createBundleRenderer } = require('vue-server-renderer');
const renderer = createBundleRenderer(require('../../dist/vue-ssr-server-bundle.json'), {
    template
})

class BaseController {
    constructor() {

    }

    initialize(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    renderPage(model) {
        renderer.renderToString(model, (err, html) => {
            if (err) {
                console.log(err);
                console.log(model.requestUrlRaw);
                let code = err && err.code || 500;
                this.res.status(code).end('Internal Server Error')
                return;
            }
            this.res.end(html);
        });
    }
}

module.exports = BaseController;