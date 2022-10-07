const scraper = require("./scraper.js")

const scrapeAll = async (browserInstance,actions)=>{
    let browser;
	try{
		browser = await browserInstance();
		const res = await scraper(browser,actions);	
        await browser.close()
		return res
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance,actions) => scrapeAll(browserInstance,actions)
