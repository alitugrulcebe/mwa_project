const express = require('express');
const router = express.Router();
const companyService = require('./company.service');

// routes
router.post('/newcompany', newcompany);
router.put('/:id', update);

module.exports = router;

function newcompany(req, res, next) {
    companyService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update(req, res, next) {
    companyService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
