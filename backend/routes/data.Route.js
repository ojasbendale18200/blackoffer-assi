const express = require('express');
const dataRouter = express.Router();
const {DataModel} = require("../model/data.Model")



dataRouter.get('/data', async (req, res) => {
  try {
    const {
      endYear,
      topic,
      sector,
      region,
      pest,
      source,
      swot,
      country,
      city,
    } = req.query;

    const query = DataModel.find();

    if (endYear) query.where("end_year").equals(endYear);
    if (topic) query.where("topic").equals(topic);
    if (sector) query.where("sector").equals(sector);
    if (region) query.where("region").equals(region);
    if (pest) query.where("pestle").equals(pest);
    if (source) query.where("source").equals(source);
    if (swot) query.where("swot").equals(swot);
    if (country) query.where("country").equals(country);
    if (city) query.where("region").equals(city);

    const data = await query.exec();
    // asd

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = dataRouter;