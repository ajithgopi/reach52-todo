var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const TodoItem = require('../models/TodoItem')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/list', async function(req, res) {
    try {
        TodoItem.find().sort({ date_created: -1 }).exec().then(data => {
            res.json(data);
        });
    } catch (err) {
        res.status(500).json({ status: false })
    }
});

router.post('/create', async function(req, res) {
    try {
        const item = new TodoItem();
        item.content = req.body.content;
        item.date_created = new Date();
        item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ status: false })
    }
});

router.post('/mark_done', async function(req, res) {
    try {
        const item = await TodoItem.findById(req.body.item_id);
        item.is_done = req.body.is_done;
        item.save();
        res.json(item);
    } catch (err) {
        res.status(500).json({ status: false })
    }
});

router.delete('/delete', async function(req, res) {
    try {
        await TodoItem.findByIdAndDelete(req.body.item_id);
        res.status(200).json({ status: true })
    } catch (err) {
        res.status(500).json({ status: false })
    }
});

module.exports = router;