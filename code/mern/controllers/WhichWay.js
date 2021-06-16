const { json } = require('express')
const express = require('express')

const WhichWayApi = require('../models/WhichWay')

const WhichWayRouter = express.Router()

// get all - don't see this one being used outside of testing
WhichWayRouter.get('/', (req, res) => {
    WhichWayApi.getAllPaths()
        .then((allWays) => {
            res.json(allWays)
        })
})

// get one - this will be used constantly
WhichWayRouter.get('/:id', (req, res) => {
    WhichWayApi.getOnePath(req.params.id)
        .then((onePath) => {
            res.json(onePath)
        })
})

// create
WhichWayRouter.post('/', (req, res) => {
    WhichWayApi.createNewPath(req.body)
        .then((newPath) => {
            res.json(newPath)
        })
})

// update
WhichWayRouter.put('/:id', (req, res) => {
    WhichWayApi.updatePath(req.params.id, req.body)
        .then((updatedPath) => {
            res.json(updatedPath)
        })
})

// delete
WhichWayRouter.delete('/:id', (req, res) => {
    WhichWayApi.deletePath(req.params.id)
        .then((deletedPath) => {
            res.json(deletedPath)
        })
})

module.exports = {
    WhichWayRouter
}