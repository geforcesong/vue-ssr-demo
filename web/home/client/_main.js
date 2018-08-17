import createApp from '@/app';

(_ => {
    const { app } = createApp(window.context);
    app.$mount('#app');
})();

