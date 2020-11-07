
const mongoose = require('./connection.js')

// Schema
const scriptSchema = new mongoose.Schema({
    pathName: Number,
    // : String,
})

// collection
const GuestBookCollection = new mongoose.model('Guest', GuestSchema)

// get all
const getAllGuests = () => {
    return GuestBookCollection.find({})
}

// get one
const getOneGuest = (id) => {
    return GuestBookCollection.findById(id)
}

// create
const createNewGuest = (guestData) => {
    return GuestBookCollection.create(guestData)
}

// update
const updateGuest = (id, guestData) => {
    return GuestBookCollection.updateOne({_id: id}, guestData)
}

// delete
const deleteGuest = (id) => {
    return GuestBookCollection.deleteOne({_id: id})
}

module.exports = {
    getAllGuests,
    getOneGuest,
    createNewGuest,
    updateGuest,
    deleteGuest
}
