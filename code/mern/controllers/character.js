const express = require('express')

const characterApi = require('../models/character.js')

const characterRouter = express.Router()

// get all
characterRouter.get('/', (req, res) => {
    characterApi.getAllCharacters()
        .then((allCharacters) => {
            res.json(allCharacters)
        })
})

// get one
characterRouter.get('/:id', (req, res) => {
    characterApi.getOneCharacter(req.params.id)
        .then((oneCharacter) => {
            res.json(oneCharacter)
        })
})

// create
characterRouter.post('/', (req, res) => {
    characterApi.createNewCharacter(req.body)
        .then((createdCharacter) => {
            res.json(createdCharacter)
        })
})

// update
characterRouter.put('/:id', (req, res) => {
    characterApi.updateCharacater(req.params.id, req.body)
        .then((updatedCharacter) => {
            res.json(updatedCharacter)
        })
})

// delete
characterRouter.delete('/:id', (req, res) => {
    characterApi.deleteCharacter(req.params.id)
        .id((deleteCharacter) => {
            res.json(deleteCharacter)
        })
})

module.exports = {
    characterRouter
}
