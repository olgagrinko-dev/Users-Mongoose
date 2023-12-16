const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/university')

const TableUser = mongoose.model('user', {
    name: String,
    surname: String,
    age: Number,
    email: String,
    password: String,
})

const TableSkill = mongoose.model('skill', {
    title: String,
    trainingPeriod: String,
    teacher: String,
})

const ObjectId = mongoose.Types.ObjectId

module.exports = { TableUser, TableSkill, ObjectId }