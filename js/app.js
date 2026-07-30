const header = document.getElementById("siteHeader");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const languageButton = document.getElementById("languageButton");
const quoteForm = document.getElementById("quoteForm");

let currentLanguage =
    localStorage.getItem("truecoat-language") || "en";

function updateHeader() {
    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );
}

window.addEventListener("scroll", updateHeader);
updateHeader();

function closeMenu() {
    menuButton.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});

document
.querySelectorAll(".mobile-menu a")
.forEach(link => {

    link.addEventListener(
        "click",
        closeMenu
    );

});

function setLanguage(language){

    currentLanguage = language;

    localStorage.setItem(
        "truecoat-language",
        language
    );

    document.documentElement.lang = language;

    document
    .querySelectorAll("[data-en][data-tr]")
    .forEach(element=>{

        element.textContent =
            element.dataset[language];

    });

    const name =
        document.getElementById("name");

    const location =
        document.getElementById("location");

    const details =
        document.getElementById("details");

    if(language==="tr"){

        name.placeholder="Adınız";

        location.placeholder="Örn. Girne";

        details.placeholder=
        "Oda sayısı, büyüklük ve detaylar";

        languageButton.textContent="EN";

        document.title=
        "TrueCoat Cyprus | Boya";

    }

    else{

        name.placeholder="Your name";

        location.placeholder="e.g. Kyrenia";

        details.placeholder=
        "Rooms, size and details";

        languageButton.textContent="TR";

        document.title=
        "TrueCoat Cyprus | Painting";

    }

}

languageButton.addEventListener(
    "click",
    ()=>{

        setLanguage(

            currentLanguage==="en"
            ? "tr"
            : "en"

        );

    }
);

const observer =
new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

observer.unobserve(entry.target);

}

});

},

{
threshold:.15
}

);

document
.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));

quoteForm.addEventListener(
"submit",
event=>{

event.preventDefault();

const name=
document.getElementById("name").value;

const location=
document.getElementById("location").value;

const project=
document.getElementById("projectType");

const projectName=
project.options[
project.selectedIndex
].text;

const details=
document.getElementById("details").value;

const message=

currentLanguage==="tr"

?

`Merhaba TrueCoat Cyprus,

İsim: ${name}

Konum: ${location}

Proje: ${projectName}

Detay:

${details}

Ücretsiz teklif almak istiyorum.`

:

`Hello TrueCoat Cyprus,

Name: ${name}

Location: ${location}

Project:

${projectName}

Details:

${details}

I would like a free quote.`;

const whatsappNumber =
"905551112233";

window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

"_blank"

);

}

);

document.getElementById("year").textContent =
new Date().getFullYear();

setLanguage(currentLanguage);
