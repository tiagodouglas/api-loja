const app = require('./config/server');

app.listen(global.config.PORT, () => {
    console.log(`Server listening on port ${global.config.PORT}`)
});