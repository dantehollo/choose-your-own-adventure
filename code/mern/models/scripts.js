
const mongoose = require('./connection.js')

// Schema
const ScriptSchema = new mongoose.Schema({
    pathName: Number,
    responses: Array,
})

// collection
const ScriptCollection = new mongoose.model('script', ScriptSchema)

// get all
const getAllScripts = () => {
    return ScriptCollection.find({})
}

// get one
const getOneScript = (id) => {
    return ScriptCollection.findById(id)
}

// create
const createNewScript = (scriptData) => {
    return ScriptCollection.create(scriptData)
}

// update
const updateScript = (id, scriptData) => {
    return ScriptCollection.updateOne({_id: id}, scriptData)
}

// delete
const deleteScript = (id) => {
    return ScriptCollection.deleteOne({_id: id})
}

module.exports = {
    getAllScripts,
    getOneScript,
    createNewScript,
    updateScript,
    deleteScript
}
