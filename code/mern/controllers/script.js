
const express = require('express')

const guestBookApi = require('../models/scripts.js')

const guestBookRouter = express.Router()

// get all
guestBookRouter.get('/', (req, res) => {
  guestBookApi.getAllGuests()
    .then((allGuests) => {
      res.json(allGuests)
  })
})

// get one
guestBookRouter.get('/:id', (req, res) => {
  guestBookApi.getOneGuest(req.params.id)
    .then((oneGuest) => {
      res.json(oneGuest)
    })
})

// create
guestBookRouter.post('/', (req, res) => {
  guestBookApi.createNewGuest(req.body)
    .then((createdGuest) => {
      res.json(createdGuest)
    })
})

// update
guestBookRouter.put('/:id', (req, res) => {
  guestBookApi.updateGuest(req.params.id, req.body)
    .then((updatedGuest) =>{
      res.json(updatedGuest)
    })
})

// delete
guestBookRouter.delete('/:id', (req, res) => {
  guestBookApi.deleteGuest(req.params.id)
    .then((deletedGuest) => {
      res.json(deletedGuest)
    })
})

module.exports = {
  guestBookRouter
}
