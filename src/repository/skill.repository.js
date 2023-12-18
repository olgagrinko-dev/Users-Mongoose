const { TableSkill, ObjectId } = require('../db');

async function getAllSkillDB() {
    const data = await TableSkill.find();
    return data;
}

async function getSkillByIdDB(_id) {
    const data = await TableSkill.find({ _id: new ObjectId(_id)});
    return data;
}

async function createSkillDB(skill) {
    await TableSkill.create(skill);
    const data = await TableSkill.find();
    return data;
}

async function upSkillDB(_id, skill) {
    await TableSkill.updateOne({ _id: new ObjectId(_id) }, { $set: skill });
    const data = await TableSkill.find();
    return data;
}

async function deleteSkillByIdDB(_id) {
    await TableSkill.deleteOne({ _id: new ObjectId(_id)});
    const data = await TableSkill.find();
    return data;
}

module.exports = { getAllSkillDB, getSkillByIdDB, createSkillDB, upSkillDB, deleteSkillByIdDB }