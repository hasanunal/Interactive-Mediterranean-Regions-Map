/* maps */
const regionsCards = document.querySelector(".list-of-regions");
const regionsCard = document.querySelectorAll(".list-of-regions li");
const generalRegions = document.querySelector('#regions');
const svgPathRegions = document.querySelectorAll("#regions > *");
const regionActiveCard = document.querySelector('[data-state=mersin]');
const regionActivePath = document.querySelector('#mersin');
function removeAllOn() {
    regionsCard.forEach(function (el) {
        el.classList.remove("on");
    });
    svgPathRegions.forEach(function (el) {
        el.classList.remove("on");
    });
}
function addOnFromState(el) {
    const stateId = el.getAttribute("id");
    const wordState = document.querySelector("[data-state='" + stateId + "']");
    wordState.classList.add("on");
    el.classList.add("on");
    mediterraneanRegions();
}
const mediterraneanRegions = function () {
    generalRegions.addEventListener('mousemove', (event) => {
        regionsCards.style.top = event.clientY + -120 + 'px';
        regionsCards.style.left = event.clientX + 20 + 'px';
        regionsCards.style.position = 'fixed';
    });
}

svgPathRegions.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        removeAllOn();
        addOnFromState(el);
    });
    el.addEventListener("mouseleave", () => {
        removeAllOn();
    });
    el.addEventListener("touchstart", () => {
        removeAllOn();
        addOnFromState(el);
    });
});

/* active city in case of not election */
generalRegions.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if(![...regionsCard].filter(e=>e.classList.contains("on")).length){
            regionActiveCard.classList.add("on");
            regionActivePath.classList.add("on")
            regionsCards.setAttribute("style", "position:absolute");
        }
    }, 1000);
})