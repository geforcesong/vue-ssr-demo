import { createApp } from './main.js';

export default context => {
    return new Promise((resolve, reject) => {
        console.log(context);
        const { app } = createApp(context);
        return resolve(app);
    });
}