var activate;
window.onload = function () {
    button = document.getElementById("toggle");
    chrome.runtime.sendMessage({ type: "init" }, (response) => {
        button.innerText = response.payload.message;
        activate = button.innerText;
    });
    var btnClickHandler = () => {
        activate = activate === 'ON' ? 'OFF' : 'ON';
        button.innerText = activate;
        chrome.runtime.sendMessage({
                type: 'activate',
                payload: {
                    message: activate,
                },
            }
        );
    }
    button.addEventListener('click', btnClickHandler);
}
