const axios = require("axios");

const api = axios.create({
    baseURL: "http://localhost:1516/"
});

export default api;