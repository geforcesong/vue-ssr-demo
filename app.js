const express = require('express');
const routes = require("./configuration/routes");

class Server {
    constructor() {
        this.app = express();
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
