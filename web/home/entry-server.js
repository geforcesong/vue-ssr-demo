import { createApp } from './main.js';

export default context => {
    return new Promise((resolve, reject) => {
        const { app } = createApp();
        return resolve(app);
    });
}