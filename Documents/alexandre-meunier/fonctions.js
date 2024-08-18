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

document.addEventListener("DOMContentLoaded", function() {
    const copyTextSpans = document.querySelectorAll('.copier');

    copyTextSpans.forEach(span => {
        span.addEventListener('click', function() {
            const textToCopy = span.textContent;

            navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Texte copié: ${textToCopy}`);
            }).catch(err => {
                console.error('Échec de la copie : ', err);
            });
        });
    });
});

function closePopup() {
    document.getElementById('popup').style.opacity = 0;
}