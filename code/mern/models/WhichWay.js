
const mongoose = require('./connection.js')

// Schema
const WhichWaySchema = new mongoose.Schema({
    pathNumber: Number,
    script: Array
})

// collection
const WhichWayCollection = new mongoose.model('which-way', WhichWaySchema)

// get all
const getAllPaths = () => {
    return WhichWayCollection.find({})
}

// get one
const getOnePath = (id) => {
    return WhichWayCollection.findById(id)
}

// create
const createNewPath = (storyData) => {
    return WhichWayCollection.create(storyData)
}

// update
const updatePath = (id, storyData) => {
    return WhichWayCollection.updateOne({_id: id}, storyData)
}

// delete
const deletePath = (id) => {
    return WhichWayCollection.deleteOne({_id: id})
}

module.exports = {
    getAllPaths,
    getOnePath,
    createNewPath,
    updatePath,
    deletePath
}
