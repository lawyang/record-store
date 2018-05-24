const express = require('express');
const Record = require('../module/record.class');

// Have express make me a new router
const router = express.Router();


const recordArray = [
    new Record('Beetles', 'Abbey Road', 1969, ['rock']),
    new Record('Michael Jackson', 'Off The Wall', 1979, ['pop']),
    new Record('Prince', 'Purple Rain', 1984, ['pop']),
    new Record('Cibo Matto', 'Viva la Woman', 1990, ['jpop'])
];

router.get('/', (req, res) => {
    console.log(recordArray);
    res.send(recordArray);
});

router.post('/', (req, res) => {
    console.log('handling POST for /record');
    let sentRecord = req.body;
    let record = new Record(
        sentRecord.artist,
        sentRecord.album,
        sentRecord.year,
        [ sentRecord.genre ]
    );
    recordArray.push(record);
    res.sendStatus(201);
});

module.exports = router;