const express = require('express');
const routes = require("./configuration/routes");
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.app.use(express.static(path.join(__dirname, 'dist')));
        new routes(this.app);
    }

    run() {
        this.app.listen(5000, function () {
            console.log('Typtscript Example app listening on port 5000!')
        })
    }
}

const server = new Server()
server.run();
