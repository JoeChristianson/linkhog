# linkhog

A simple package for scraping a domain for internal and external links.

## Usage

This can either be used either as an node module or can be run off the commandline.

## node module

### installation

For use as a node module:

npm i linkhog

### usage

const linkhog = require("linkhog")

```
// This would scrape the website and return the results to the results constant
const scrape = async ()=>{
  const results = await linkhog("www.yourdomain.com")
  console.log(results
}
```

```
// This would scrape the website and write the results to a file in JSON
const scrapeAndWrite = async ()=>{
  await linkhog("www.yourdomain.com","../scraperesults.json)
}
```
## Stand-alone app

- Have node installed. 
- Clone down linkhog.
- Go to the root directory of the app.
- Run:
```
node index.js www.yourdomain filePathForWritingResults.json
```
