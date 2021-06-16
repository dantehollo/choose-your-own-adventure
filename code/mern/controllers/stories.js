const express = require('express')

const storiesApi = require('../models/stories.js')

const storiesRouter = express.Router()

// get all
storiesRouter.get('/', (req, res) => {
  storiesApi.getAllStories()
    .then((allStories) => {
      res.json(allStories)
  })
})

// get one
storiesRouter.get('/:id', (req, res) => {
  storiesApi.getOneStory(req.params.id)
    .then((oneStories) => {
      res.json(oneStories)
    })
})

// create
storiesRouter.post('/', (req, res) => {
  storiesApi.createNewStory(req.body)
    .then((createdStories) => {
      res.json(createdStories)
    })
})

// update
storiesRouter.put('/:id', (req, res) => {
  storiesApi.updateStory(req.params.id, req.body)
    .then((updatedStories) =>{
      res.json(updatedStories)
    })
})

// delete
storiesRouter.delete('/:id', (req, res) => {
  storiesApi.deleteStory(req.params.id)
    .then((deletedStories) => {
      res.json(deletedStories)
    })
})

module.exports = {
  storiesRouter
}
