let express = require('express');
let router = express.Router();
let gatherMarketInformation = require("../../scripts/marketDataGather");

router.get('/', (req, res) => {
    gatherMarketInformation()
        .then((result => result))
        .then((result) => {
            res.send(result)
        }).catch((error) => {
            res.send(error.message)
    });
})

module.exports = router;
