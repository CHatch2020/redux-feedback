const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');
const router = express.Router();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
router.post('/feedback', (req, res) => {
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
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});