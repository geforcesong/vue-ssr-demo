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
          })
        this.rendering(app);
    }
}

module.exports = HomeController;