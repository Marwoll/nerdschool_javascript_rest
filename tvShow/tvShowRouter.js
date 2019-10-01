const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');
const tvShowRouter = express.Router();

app.route('/tvshow/:tvShowId').get((req, res) => {
    const tvShowId = req.params.tvShowId; 
    tvShowService.getById(tvShowId);
    res.send(`Fetching TV Show with id ${tvShowId}`);
  });

tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
});
module.exports = tvShowRouter;