const VerifyToken = (req, res) => {
    res.send("hola verifyToken");
}

const ReceivedMessage = (req, res) => {
    res.send("hola ReceivedMessage");
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}