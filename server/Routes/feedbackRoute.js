const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Server POST');
    console.log('req.body', req.body);
    const newFeedback = req.body;
    const sqlText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;
    const sqlValues = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments,]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        console.log('insert succeded');
        res.sendStatus(201);
    }).catch((dbErr) => {
        console.log('Fail in server POST');
        res.sendStatus(500);
    })
});

module.exports = router;