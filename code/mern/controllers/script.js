
const express = require('express')

const scriptApi = require('../models/scripts.js')

const scriptRouter = express.Router()

// get all
scriptRouter.get('/', (req, res) => {
  scriptApi.getAllScripts()
    .then((allScripts) => {
      res.json(allScripts)
  })
})

// get one
scriptRouter.get('/:id', (req, res) => {
  scriptApi.getOneScript(req.params.id)
    .then((oneScript) => {
      res.json(oneScript)
    })
})

// create
scriptRouter.post('/', (req, res) => {
  scriptApi.createNewScript(req.body)
    .then((createdScript) => {
      res.json(createdScript)
    })
})

// update
scriptRouter.put('/:id', (req, res) => {
  scriptApi.updateScript(req.params.id, req.body)
    .then((updatedScript) =>{
      res.json(updatedScript)
    })
})

// delete
scriptRouter.delete('/:id', (req, res) => {
  scriptApi.deleteScript(req.params.id)
    .then((deletedScript) => {
      res.json(deletedScript)
    })
})

module.exports = {
  scriptRouter
}
