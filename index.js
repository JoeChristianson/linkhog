const browser = require("./startBrowser.js")
const controller = require("./controller")
const fs = require("fs")

const main = async (indexUrl,filePath)=>{
    console.log('Scraping commenced!');
    const remainingScrapes = [indexUrl]
    const scraped = []
    const failedScrapes = []
    const allResults = new Set()
    while (remainingScrapes.length>0){
        try{
            console.log(`Scraping ${remainingScrapes[0]}. ${remainingScrapes.length -1} currently in queue`);
            const start = {remainingScrapes:remainingScrapes.length};
            const res = await controller(browser,[{url:remainingScrapes[0],printAll:"a"}])
            res.forEach(url=>{
                if(url.indexOf(indexUrl)===0&&!scraped.includes(url)&&!remainingScrapes.includes(url)&&!failedScrapes.includes(url)){
                    remainingScrapes.push(url)
                }
            })
            console.log(`${-start.remainingScrapes+remainingScrapes.length} pages added to scraping queue.`);
            allResults.add(...res.filter(url=>url.indexOf(indexUrl)!==0))
            const externalLinks = Array.from(allResults)
            console.log(`${externalLinks.length} total external links found.`);
            
            scraped.push(remainingScrapes.shift())
            if (filePath){
                const fileCont = {externalLinks,internalLinks:scraped,failedScrapes}
                fs.writeFile(filePath,JSON.stringify(fileCont),(err)=>{
                    if(err){
                        console.log(err);
                    }
                })
            }
        }catch(err){
            console.log(remainingScrapes[0],err);
            failedScrapes.push(remainingScrapes.shift())
        }
    }
    const res = {
        internalLinks:scraped,failedScrapes:failedScrapes,externalLinks:allResults
    }
    console.log("Scrape Completed!");
    if(filePath){
        console.log(`Find results in ${filePath}`);
    }
    return res
}

console.log(process.argv);

if(process.argv.length===3){
    main(process.argv[2])
}else if(process.argv.length===4){
    main(process.argv[2],process.argv[3])
    console.log("two args");
}else if(process.argv.length>4){
    console.log("too many arguments")
}

module.exports = main
