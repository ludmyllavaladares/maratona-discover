const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
     name: "Ludmylla",
     avatar: "https://avatars.githubusercontent.com/u/64492197?s=400&u=ca2453bb0e97b9842e7fb3c96a446a075a2a0ac3&v=4",
     "monthly-budget": 3000,
     "days-per-week": 5,
     "hours-per-day": 5,
     "vacation-per-year": 4,
}

// request, response
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))



module.exports = routes;