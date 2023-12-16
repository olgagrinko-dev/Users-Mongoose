const { TableSkill, ObjectId } = require('../db');

async function getAllSkillDB() {
    const data = await TableSkill.find();
    return data;
}

async function getSkillByIdDB(_id) {
    const data = await TableSkill.find({ _id: new ObjectId(_id) });
    return data;
}

async function createSkillDB(skill) {
    await TableSkill.create(skill);
    const data = await TableSkill.find();
    return data;  
}

module.exports = { getAllSkillDB, getSkillByIdDB, createSkillDB }