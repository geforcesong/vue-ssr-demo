const CommonController = require('../web/common/common-controller');
class SiteRouter {
    constructor(app) {
        this.setRoute(app, '*', new CommonController());
    }

    setRoute(app, path, controller, controllerName) {
        if (!controllerName) {
            app.get(path, controller.loadView.bind(controller));
        } else {
            app.get(path, (controller)[controllerName].bind(controller));
        }
    }
}

module.exports = SiteRouter;