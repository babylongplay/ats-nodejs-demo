const request = require('./request')

let userName = 'testuser123'
let gameCode = 'SAL'
let ip = '127.0.0.1'

// create user
let createUserParam = {
    userName: userName,
    name: 'Test User',
    registeredIp: ip
}
request.createUser(createUserParam)
// get user info
request.getInfo(userName)
// get wallet info
request.walletInfo(userName)

// credit
let creditParam = {
    userName: userName,
    amount: 2,
    txnId: '',
    remark: ''
}
request.credit(creditParam)
// debit
let debitParam = {
    userName: userName,
    amount: 1,
    txnId: '',
    remark: ''
}
request.debit(debitParam)
// fund history
request.fundHistory()

// launch game
let gameParam = {
    userName: userName,
    gameCode: gameCode,
    mobile: 0,
    ip: ip,
    returnUrl: 'https://google.com'
}
request.launchGame(gameParam)