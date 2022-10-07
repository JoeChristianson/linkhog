const puppeteer = require("puppeteer")

const startBrowser = async ()=>{
    let browser;
    try{
        browser = await puppeteer.launch({
            headless:true,
            args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
        })
        return browser
    }catch(err){
        console.log("browser failed");
    }
}

module.exports = startBrowser