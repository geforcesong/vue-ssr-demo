const renderer = require('vue-server-renderer').createRenderer();

class BaseController {
    constructor() {

    }

    initialize(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    rendering(app) {
        renderer.renderToString(app, (err, html) => {
            if (err) {
                this.res.status(500).end('Internal Server Error')
                return
            }
            this.res.end(`
              <!DOCTYPE html>
              <html lang="en">
                <head><title>Hello</title></head>
                <body>${html}</body>
              </html>
            `)
        });
    }
}

module.exports = BaseController;