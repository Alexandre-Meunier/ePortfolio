
// Pour le FlashInput

const inputBar = document.getElementById('inputBar');

function flashingInputBar()  {
    setInterval(function () {
        setTimeout(function () {
            inputBar.style.visibility="hidden"
        }, 500)
        setTimeout(function () {
            inputBar.style.visibility="visible"
        }, 1250)
    }, 1250)
}

flashingInputBar();


// Pour l'apparition

document.addEventListener("DOMContentLoaded", function(){
    const elementsToShow = document.querySelectorAll('.apparition');
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    },{threshold: 0.1});
    elementsToShow.forEach(element=>{
        observer.observe(element);
    });
})


// Pour copier

function copyText(element) {
    const textToCopy = element.innerText;
    const tooltip = element.nextElementSibling;

    navigator.clipboard.writeText(textToCopy).then(() => {
        tooltip.classList.remove("hidden");

        setTimeout(() => {
            tooltip.classList.add("hidden");
        }, 2000);
    });
}