const stoppedLink = document.getElementById("prevent-default");
stoppedLink.addEventListener("click", stopLinkAction);

function stopLinkAction(e) {
    e.preventDefault();
}
