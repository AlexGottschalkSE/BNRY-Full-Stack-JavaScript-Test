const express = require('express')
const axios = require('axios')
const { json } = require('express')
const PORT = 8080
const app = express()

//Handle /news API request
app.get('/headlines', (req, res) => {
    //Make API call to news API
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
        .then((newsAPIResponse) => {
            //Return news API response
            res.send(newsAPIResponse.data)
        }).catch(err => console.log(err))
})

//Handle /bitcoin API request
app.get('/bitcoin', (req, res) => {
    //Make API call to news API
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`)
        .then((newsAPIResponse) => {
            //Return news API response
            teststring = newsAPIResponse.data
            res.send(newsAPIResponse.data)
        }).catch(err => console.log(err)
        );
})

//Handle /search API request
app.get('/search/:q', (req, res) => {
    //Make API call to news API
    axios.get(`https://newsapi.org/v2/everything?q=${req.params.q}&apiKey=${process.env.NEWS_API_KEY}`)
        .then((newsAPIResponse) => {
            //Return news API response
            res.send(newsAPIResponse.data)
        }).catch(err => console.log(err))
})

//Handle / API request
app.get('/', (req, res) => {
    //Make API call to news API
    res.send({ "Result": "Endpoint unhandled" })
})

app.listen(
    PORT,
    () => console.log(`server running on http://localhost:${PORT}`
    ));
