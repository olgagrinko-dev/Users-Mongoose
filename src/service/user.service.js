const { getAllUserDB, getUserByIdDB, createUserDB, upUserDB, deleteUserByIdDB } = require('../repository/user.repository');

async function getAllUser() {
    const data = await getAllUserDB();
    return data;
}

async function getUserById(_id) {
    const data = await getUserByIdDB(_id);
    return data;
}

async function createUser(user) {
    const data = await createUserDB(user);
    return data;
}

async function upUser(_id, user) {
    const data = await upUserDB(_id, user);
    return data;
}

async function deleteUserById(_id) {
    const data = await deleteUserByIdDB(_id);
    return data;
}

module.exports = { getAllUser, getUserById, createUser, upUser, deleteUserById };