const request = require('supertest');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const api = request(process.env.API_URL);
const getUser = async (userId) => {
    const userRes = await api
        .get(`/users/${userId}`)
        .accept('json')
        .send();
    return userRes.body.data;
};

module.exports = {
    getUser
};
