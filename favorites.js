const express = require('express');
const router = express.Router();

const queries = require('./queries');

router.get("/", (request, response, next) => {
    queries.list().then(favorites => {
        response.json({favorites});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(favorite => {
        favorite
            ? response.json({favorite})
            : response.sendStatus(404)
    }).catch(next);
});

router.post("/", (request, response, next) => {
    console.log(request.body)
    queries.create(request.body).then(favorite => {
        response.status(201).json({favorite: favorite});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(favorite => {
        response.json({favorite: favorite[0]});
    }).catch(next);
});

module.exports = router;