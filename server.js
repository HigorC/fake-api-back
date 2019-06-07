const express = require('express');
const app = express();
const port = 3000;

const banner = require('./assets/banner.js')

app.get('/itWorks', function (req, res) {
    res.send("Yes, It Works!")
})

app.listen(port, ()=>{
    console.log(banner);
    console.log(`>> A todo vapor na porta ${port}!\n`);
});