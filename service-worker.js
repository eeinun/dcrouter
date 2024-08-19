var target = 'PC'

// script.js의 target 가져오는 기능
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'target') {
        console.log(request.payload.message);
        target = request.payload;
    }
    sendResponse({});
})
// dc 접속 시 target 환경의 url로 변경