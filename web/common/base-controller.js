const fs = require('fs');
const vrenderer = require('vue-server-renderer');
const renderer = vrenderer.createRenderer({
    template: fs.readFileSync(__dirname + '/templates/index.template.html', 'utf-8')
});

class BaseController {
    constructor() {

    }

    initialize(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    rendering(app, templateContext) {
        renderer.renderToString(app, templateContext, (err, html) => {
            if (err) {
                console.log(err);
                this.res.status(500).end('Internal Server Error')
                return;
            }
            this.res.end(html);
        });
    }
}

module.exports = BaseController;