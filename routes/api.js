const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({ body }, res) => { // { body } looks for req.body and abstracts the body for us
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction); // forwards to the frontend
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("error: ", err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body) // body is an array of objects, so we use insertMany
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("error: ", err);
    });
});

router.get("/api/transaction", (req, res) => { // no data to abstract = req
  Transaction.find({}) // Transaction references our model
    .sort({ date: -1 }) // most recent descending, database optimized for sorting
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log("error: ", err);
    });
});

module.exports = router;
