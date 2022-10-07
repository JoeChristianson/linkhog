# linkhog

A simple package for scraping a domain for internal and external links.

## Usage

This can either be used either as an node module or can be run off the commandline.

## installation

For use as a node module:

npm i linkhog

For use as an app:

## usage

### node module

const linkhog = require("linkhog")

// This would scrape the website and return the results to the results constant
const scrape = async ()=>{
  const results = await linkhog("www.yourdomain.com")
  console.log(results
}

// This would scrape the website and write the results to a file in JSON
const scrapeAndWrite = async ()=>{
  await linkhog("www.yourdomain.com","../scraperesults.json)
}

### as stand-alone app

```
Have node installed. 
Clone down linkhog.
go to the root directory of the app.
Run:
node index.js www.yourdomain filePathForWritingResults.json
```


