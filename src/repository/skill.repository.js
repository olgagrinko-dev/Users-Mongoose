const { TableUser, ObjectId } = require('../db');

async function getAllSkillDB() {
    const data = await TableUser.find({ _id: new ObjectId(_id) })
    return data;
}

module.exports = { getAllSkillDB }