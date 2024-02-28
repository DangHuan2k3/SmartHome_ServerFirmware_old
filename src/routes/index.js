// ...
const object_1Router = require('./object_1');
const espRouter = require('./ESP');

function route(app) {
    /*

    Paramerters
        app: express Instance
    */
    //app.use('/object_1', object_1Router);

    app.use('/esp', espRouter);


}

module.exports = route;