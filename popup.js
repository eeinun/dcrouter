
window.onload = function () {
    button = document.getElementById("toggle");
    target = 'PC'
    var btnClickHandler = () => {
        target = target === 'PC' ? 'MOBILE' : 'PC';
        button.innerText = target;
        chrome.runtime.sendMessage({
                type: 'target',
                payload: {
                    message: target,
                },
            },
            (response) => {}
        );
    }
    button.addEventListener('click', btnClickHandler);
}
