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


const json_projets = {
    "1": {
        nom:'Réseau social',
        description:'Développer un réseau social simple en Python',
        experience:['Algorithme de recherche', 'Dictionnaires et tableaux'],
        competences: ['python']
    },
    "2": {
        nom:'L\'ardoise magique',
        description:'Développer un réseau social simple en Python',
        experience:['Algorithme de recherche', 'Dictionnaires et tableaux'],
        competences: ['java']
    },
    "3": {
        nom:'L\'ardoise magique',
        description:'Développer un réseau social simple en Python',
        experience:['Algorithme de recherche', 'Dictionnaires et tableaux'],
        competences: ['java']
    }

}

for (let key in json_projets) {
    //createCard(json_projets[key]);
}

function createCard(object) {
    console.log(object)
    // Créer l'élément parent
    const card = document.createElement("div");
    card.classList.add("parcours", "carte");

    // Titre de la carte
    const title = document.createElement("h2");
    title.classList.add("titre-bloc");
    title.textContent = object.nom;
    card.appendChild(title);

    // Ligne de séparation
    const separator = document.createElement("hr");
    separator.classList.add("bar-titre-carte");
    card.appendChild(separator);

    // Conteneur d'informations
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-parcours");

    // Ajout de la description
    const description = document.createElement("p");
    description.textContent = object.description;
    infoContainer.appendChild(description);

    // Ajout des expériences (boucle)
    object.experience.forEach((exp) => {
        const experienceElement = document.createElement("p");
        experienceElement.textContent = `--> ${exp}`;
        infoContainer.appendChild(experienceElement);
    });

    // Conteneur pour les compétences
    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("competences-parcours");

    // Ajout des icônes de compétences (boucle)
    object.competences.forEach((competence) => {
        const skillIcon = document.createElement("img");
        skillIcon.src = `svg/${competence}.svg`;
        skillIcon.style.height = "50px";
        skillIcon.style.width = "50px";
        skillsContainer.appendChild(skillIcon);
    });

    // Ajout du conteneur des compétences dans le conteneur d'informations
    infoContainer.appendChild(skillsContainer);

    // Ajout du conteneur d'informations à la carte
    card.appendChild(infoContainer);

    // Ajouter la carte dans le conteneur spécifié
    const container = document.getElementById("section-projet").querySelector('.ligne-projet');
    container.appendChild(card);
}


/*<div class="parcours carte">
            <h2 class="titre-bloc">Réseau social</h2>
            <hr class="bar-titre-carte">
            <div class="info-parcours">
              <p>Développer un réseau social simple en Python</p>
              <p>--> Algorithme de recherche</p>
              <p>--> Dictionnaires et tableaux</p>
              <div class="competences-parcours">
                <img src="svg/python.svg" style="height: 50px;width: 50px">
              </div>
            </div>
          </div>
          <div class="parcours carte">
            <h2 class="titre-bloc">L'ardoise magique</h2>
            <hr class="bar-titre-carte">
            <div class="info-parcours">
              <p>Développer des formes géométriques sur un plan 2D</p>
              <p>--> Polymorphisme, héritage, encapsulation</p>
              <div class="competences-parcours">
                <span>Java / Tests unitaires / Eclipse</span>
              </div>
            </div>
          </div>
          <div class="parcours carte">
            <h2 class="titre-bloc"><a class="lien" href="https://jupyter.univ-paris13.fr/~12206971/PerformVision/">Développement web</a></h2>
            <hr class="bar-titre-carte">
            <div class="info-parcours">
              <p>Développement d'un site Internet</p>
              <p>--> Gestion de projet</p>
              <p>--> Recueil de besoins</p>
              <p>--> Développement front end et back end</p>
              <div class="competences-parcours">
                <span>HTML , CSS , JS, PHP, SQL /</span>
                <span>Pattern MVC / VSCode , GitLab / GDrive</span>
              </div>
            </div>
          </div>
          <div class="parcours carte">
            <h2 class="titre-bloc">Optimisation web</h2>
            <hr class="bar-titre-carte">
            <div class="info-parcours">
              <p>Optimisation et debug du site créé dans Développement web</p>
              <p>--> Correction des bugs visuels du site</p>
              <p>--> Ajout de fonctionnalités manquantes</p>
              <p>--> Optimisation des controlleurs</p>
              <div class="competences-parcours">
                <span>HTML , CSS , JS , PHP , SQL /</span>
                <span>Pattern MVC / PHPStorm , GitLab / GDrive</span>
              </div>
            </div>
          </div>
          <div class="parcours carte">
            <h2 class="titre-bloc"><a class="lien" href="https://github.com/Alexandre-Meunier/om3">Orchestrateur de services</a></h2>
            <hr class="bar-titre-carte">
            <div class="info-parcours">
              <p>Développement d'un logiciel au sein de mon stage qui <br> assure la haute disponibilité des services d'un cluster.</p>
              <p>--> Création de gestionnaires d'API</p>
              <p>--> Serveurs intégrant un daemon, Redis et une BDD</p>
              <div class="competences-parcours">
                <span>Go , Bash , Redis / API Restful , CI, Microservices,</span>
                <span>SSH / Goland, GitHub / Mattermost</span>
              </div>
            </div>
          </div>
          <div class="parcours carte">
            <h2 class="titre-bloc">Portfolio</h2>
            <hr class="bar-titre-carte">
            <div class="info-parcours">
              <p>Développement du site d'un prénommé Alexandre Meunier</p>
              <p>--> Me présenter</p>
              <p>--> Rendre original le site</p>
              <div class="competences-parcours">
                <span>HTMl , CSS , JS / PHPStorm , GitHub</span>
              </div>
            </div>
          </div>*/