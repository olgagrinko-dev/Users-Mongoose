const { TableSkill, ObjectId } = require('../db');

async function getAllSkillDB() {
    const data = await TableSkill.find();
    return data;
}

async function getSkillByIdDB(_id) {
    const data = await TableSkill.find({ _id: new ObjectId(_id)});
    return data;
}

async function createSkillDB(skills) {
    await TableSkill.create(skills);
    const data = await TableSkill.find();
    return data;
}

async function upSkillDB(_id, skills) {
    await TableSkill.updateOne({ _id: new ObjectId(_id) }, { $set: skills });
    const data = await TableSkill.find();
    return data;
}

async function deleteSkillByIdDB(_id) {   
    console.log(_id);
    await TableSkill.deleteOne({ _id: new ObjectId(_id)});
    const data = await TableSkill.find();
    return data;
}

module.exports = { getAllSkillDB, getSkillByIdDB, createSkillDB, upSkillDB, deleteSkillByIdDB }