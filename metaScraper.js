const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')()
  ])

  const got = require('got')

  var scraper = async(req,res)=>{

    try{
    const targetUrl = req.body.url;

      if(targetUrl){

      const { body: html, url } = await got(targetUrl)
      const metadata = await metascraper({ html, url })
      res.json(metadata)

      }

      else
        res.json({"error" : "Invalid URL"})

    }catch(err)
    {
      res.json({"error" : "Invalid URL"})
    }

  }

  module.exports = {scraper};