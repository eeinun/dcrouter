var activate = 'ON'

// script.js의 activate 받기
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'activate') {
        console.log(request.payload.message);
        activate = request.payload;
    }
    sendResponse({});
})
// 리디렉션 url (a 태그 href 속성) 수정
function urlTranslation() {
    function rule(src) {
        const mobile_url_page = new RegExp("https:\/\/m.dcinside.com\/(mini\/)?board\/([0-9a-zA-Z_]+)\/([0-9]+)")
        const mobile_url_main = new RegExp("https:\/\/m.dcinside.com\/(mini\/)?(board\/)?([0-9a-zA-Z_]+)")
        if (src.includes("m.dcinside.com")) {
            let m = src.match(mobile_url_page);
            if (m) { 
                return "https://gall.dcinside.com/" + "board/view/?id=" + m[2] + "&no=" + m[3];
            }
            m = src.match(mobile_url_main);
            if (m) {
                return "https://gall.dcinside.com/" + "board/lists/?id=" + m[3];
            }
        }
        return src;
    }
    let a = Array.from(document.getElementsByTagName('a'));
    a.forEach(e => {e.href =
        rule(e.href)});
}
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab.url.includes("chrome://")) {
        if (activate === 'ON') {
            chrome.scripting.executeScript({
                target: {tabId: tab.id, allFrames: true},
                func: urlTranslation
            });
        }  
    }
});
