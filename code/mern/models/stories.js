const Stories = require('../client/src/components/scriptObject')
const mongoose = require('./connection.js')

// Schema
const StorySchema = new mongoose.Schema({
    title: String,
    script: Object
})

// collection
const StoryCollection = new mongoose.model('story', StorySchema)

// get all
const getAllStories = () => {
    return StoryCollection.find({})
}

// get one
const getOneStory = (id) => {
    return StoryCollection.findById(id)
}

// create
const createNewStory = (storyData) => {
    return StoryCollection.create(storyData)
}

// update
const updateStory = (id, storyData) => {
    return StoryCollection.updateOne({_id: id}, storyData)
}

// delete
const deleteStory = (id) => {
    return StoryCollection.deleteOne({_id: id})
}

// add story parts in sections
const addPaths = (id, importObj) => {
    let chosenStory = StoryCollection.findById(id)
    let tempObj = ''
    let newArray = Object.entries(importObj)

    let 
    
    for(let i = 0; i < newArray.length; i++){
        tempObj[newArray[i][0]] = newArray[i][1]
        chosenStory.script = tempObj
    }
}

updateStory('60c949c0b5ac9e34e0448e0b', Stories)

// addPaths(id, Stories)

module.exports = {
    getAllStories,
    getOneStory,
    createNewStory,
    updateStory,
    deleteStory
}
