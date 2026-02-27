
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

function closePopup() {
    document.getElementById('popup').style.opacity = 0;
}


// Gérer les redirections des projets

const projets = document.querySelectorAll('.redirect');

projets.forEach((p)=>{
    p.addEventListener('click', function () {
        let titre_projet = p.getAttribute("value-redirect")
        switch (titre_projet) {
            case "Portfolio":
                window.location.href = "#section-presentation"
                break;
            case "Ardoise":
                window.location.href = "https://github.com/Alexandre-Meunier/Ardoise-magique-Java"
                break;
            case "OpenSVC":
                window.location.href = "https://github.com/Alexandre-Meunier/om3"
                break;
            case "LetMeCook":
                window.location.href = "https://letmecook.beskarfox.com/"
                break;
            case "TechChips":
                window.location.href = "https://beskarfox.com/drive/NathKaden/PPP%20Podcast/podcast.mp4"
                break;
            case "Planning":
                window.location.href = "https://github.com/philippe-nougaillon/Planning_IAE"
                break;
            case "CoopComm":
                window.location.href = "https://www.coopcomm.fr/"
                break;
        }
    })
})

const plus = document.querySelector('.plus');

plus.addEventListener('click', function () {
    plus.textContent = "À l'aube d'une nouvelle ère, l'IA devient un enjeu politique avec une progression fulgurante ces dernières années.\n" +
        "Nous expliquerons avec des invités spécialisés dans l'IA l'importance de comprendre les enjeux de cet outil dans la défense, la sociopolitique ou encore dans l'économie"
})