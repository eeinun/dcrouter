
window.onload = function () {
    button = document.getElementById("toggle");
    target = 'PC'
    var btnClickHandler = () => {
        target = target === 'PC' ? 'MOBILE' : 'PC';
        button.innerText = target;
        console.log(target)
    }
    button.addEventListener('click', btnClickHandler);
}
