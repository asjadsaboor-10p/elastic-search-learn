const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('dev'))
const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
    host: 'elastic-search:9200',
    //log: 'trace'
});

esClient.indices.create({
    index: 'candidates',
    ignore: [400]
}).catch(console.log);

esClient.ping().then(console.log).catch(console.log);

app.get('/', (req, res, next) => {

    const result = 'hello';
    res.send(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))