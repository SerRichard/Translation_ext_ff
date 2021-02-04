let input = document.querySelector('input');

document.querySelector('input').onclick = valueTrue;

async function valueTrue(){
   
    let value = "button clicked";

    await browser.storage.local.set({ value });
}