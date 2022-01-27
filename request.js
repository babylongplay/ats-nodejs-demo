const axios = require('axios')
const config = require('./config.json')

const instance = axios.create({
    baseURL: config.apiUrl,
    timeout: 15000
})

instance.defaults.headers.common['operator-token'] = config.operatorToken;
instance.defaults.headers.common['secret-key'] = config.secretKey;

const createUser = async (param) => {
    try {
        await instance.post(`/api/user/create`, {})
            .then((res) => {
                console.log(`[✓] User Create: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] User Create: ${err}`)
            })
    } catch (err) {
        throw err
    }
}

const getInfo = async (userName) => {
    try {
        await instance.get(`/api/user/${userName}/info`)
            .then((res) => {
                console.log(`[✓] Get Info: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] Get Info: ${err.response}`)
            })
    } catch (err) {
        throw err
    }
}

const walletInfo = async (userName) => {
    try {
        await instance.get(`/api/user/${userName}/wallet`)
            .then((res) => {
                console.log(`[✓] Wallet Info: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] Wallet Info: ${err.response}`)
            })
    } catch (err) {
        throw err
    }
}

const credit = async (param) => {
    try {
        await instance.post(`/api/fund/credit`, param)
            .then((res) => {
                console.log(`[✓] Fund Credit: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] Fund Credit: ${err.response}`)
            })
    } catch (err) {
        throw err
    }
}

const debit = async (param) => {
    try {
        await instance.post(`/api/fund/debit`, param)
            .then((res) => {
                console.log(`[✓] Fund Debit: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] Fund Debit: ${err.response}`)
            })
    } catch (err) {
        throw err
    }
}

const fundHistory = async () => {
    try {
        await instance.get(`/api/fund/history`)
            .then((res) => {
                console.log(`[✓] Fund History: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] Fund History: ${err.response}`)
            })
    } catch (err) {
        throw err
    }
}

const launchGame = async (param) => {
    try {
        await instance.post(`/api/platform/login`, param)
            .then((res) => {
                console.log(`[✓] Launch Game: ${res}`)
            })
            .catch((err) => {
                console.log(`[🗙] Launch Game: ${err.response}`)
            })
    } catch (err) {
        throw err
    }
}

module.exports = {
    createUser,
    getInfo,
    walletInfo,
    credit,
    debit,
    fundHistory,
    launchGame
}