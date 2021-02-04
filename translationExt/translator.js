browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'value' in changes){
        
        browser.storage.local.get().then(function (result) {
            let results = [];
    
            for(const key of Object.keys(result)){
                results.push({ 'site': key, 'time': result[key]})
            }
    
        
        results.sort((x, y) => y.time - x.time);
        results = results.slice(0, 1);
    
        var currentURL = results[0].site;
        var docURL = window.location.href;

        console.log(currentURL);
    
        if(currentURL === docURL){
            let searchURL = "https://www.translatetheweb.com/?ref=TVert&from=&to=en&a=";

            let nextURL;
        
            for(var i = 0; i <= currentURL.length; i++){
                if(currentURL[i] == ':'){
                    nextURL += '%3A';
                }else if(currentURL[i] == '/'){
                    nextURL += '%2F';
                }else if(i == currentURL.length){
                    nextURL += '#';
                } else {
                    nextURL += currentURL[i];
                }
            }
        
            let finalURL = searchURL + nextURL;
        
            if(finalURL.includes("undefined")){
                finalURL = finalURL.replace('undefined', '');
            }
        
            window.open(finalURL);
            }        
        }); 
    }
})