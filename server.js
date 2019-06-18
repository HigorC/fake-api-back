const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const banner = require('./assets/banner.js')
const preMadeApisRoutes = require('./routes/pre-made-apis');
const toCreateRoutes = require('./routes/to-create');
const testRoutes = require('./routes/test');

app.use(express.json());

app.use('/', preMadeApisRoutes);
app.use('/', testRoutes);
app.use('/', toCreateRoutes);

app.listen(port, () => {
    console.log(banner);
    console.log(`>> A todo vapor na porta ${port}!\n`);
});