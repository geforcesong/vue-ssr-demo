const HomeController = require('../web/home/home-controller');
class SiteRouter {
    constructor(app) {
        this.setRoute(app, '/', new HomeController());
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