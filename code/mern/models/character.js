const mongoose = require('./connection.js')

// Schema
const CharacterSchema = new mongoose.Schema({
    name: String,
    avatar: Object,
    emotion: String
})

//collection
const CharacterCollection = new mongoose.model('character', CharacterSchema)

// get all
const getAllCharacters = () => {
    return CharacterCollection.find({})
}

// get one
const getOneCharacter = (id) => {
    return CharacterCollection.findById(id)
}

// create
const createNewCharacter = (characterData) => {
    return CharacterCollection.create(characterData)
}

// update
const updateCharacater = (id, characterData) => {
    return CharacterCollection.updateOne({_id: id}, characterData)
}

// delete
const deleteCharacter = (id) => {
    return CharacterCollection.delete({_id: id})
}

module.exports = {
    getAllCharacters,
    getOneCharacter,
    createNewCharacter,
    updateCharacater,
    deleteCharacter
}