let currentTab = null;

browser.tabs.onActivated.addListener((event) => currentTab = event.tabId);

setInterval(updateURLTime, 1000);

async function updateURLTime(){
    if (!currentTab){
        return;
    }
    
    let frames = null;

    try {
        frames = await browser.webNavigation.getAllFrames({ 'tabId': currentTab})
    } catch (error) {
        console.log(error);
    }

    let frame = frames.filter((frame) => frame.parentFrameId == -1)[0];

    if(!frame.url.startsWith('http'))
        return;

    let hostname = new URL(frame.url);

    try {
        let time = Date.now();
        browser.storage.local.set({[hostname]: time});
    } catch (error) {
        console.log(error);
    }
}