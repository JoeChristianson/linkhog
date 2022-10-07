const handleScrape = async (browser,actions) => {
		let page = await browser.newPage();
        const res = []
        for (let action of actions){
            await page.goto(action.url);
            res.push(...(await print(page,action)))
        }
        return res
}


const print = async(page,action)=>{
    console.log("printing from "+action.url);
    const {printAll,url} = action
    const data = await page.evaluate(async (printAll)=>{
        try{
            const els = await document.querySelectorAll(printAll)
            const res = []
            els.forEach(el=>{
                res.push(el.href)
            })
            return res
        }catch(err){
            return("not working")
        }
    },printAll)
    return data
}

module.exports = handleScrape;