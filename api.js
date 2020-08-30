const express = require("express");
const router = express.Router();
var mcache = require('memory-cache');

var cache = (duration) => {
    return (req, res, next) => {
      let key = req.body.url
      let cachedBody = mcache.get(key)
      if (cachedBody) {
        res.json(JSON.parse(cachedBody))
        return
      } else {
        res.sendResponse = res.send
        res.send = (body) => {
          mcache.put(key, body, duration * 1000);
          res.sendResponse(body)
        }
        next()
      }
    }
  }


const metaScraper = require("./metaScraper")

router.post("/scraper",cache(60),metaScraper.scraper)

module.exports = router