
window.onload = function () {
    button = document.getElementById("toggle");
    activate = 'ON'
    var btnClickHandler = () => {
        activate = activate === 'ON' ? 'OFF' : 'ON';
        button.innerText = activate;
        chrome.runtime.sendMessage({
                type: 'activate',
                payload: {
                    message: activate,
                },
            },
            (response) => {}
        );
    }
    button.addEventListener('click', btnClickHandler);
}
