const express = require('express');
const movieRoute = require('./movie.routes');
const firstAssignmentRoute = require('./firstAssigment.routes');

const router = express.Router();

const allRoutes = [
    {
        path: '/movies',
        route: movieRoute
    },
    {
        path: '/firstAssignment',
        route: firstAssignmentRoute
    }
]

allRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router;