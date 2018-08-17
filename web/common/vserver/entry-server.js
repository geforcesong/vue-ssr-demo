import { createApp } from './main.js';

export default context => {
    return new Promise((resolve, reject) => {
        const {app, router} = createApp(context);
        router.push(context.requestUrlRaw);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({code: 404})
            }
            resolve(app);
        }, reject)
    });
}