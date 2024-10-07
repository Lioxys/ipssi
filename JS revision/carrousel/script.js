// VARIABLES
const RIGHT = 39;
const LEFT = 37;
const SPACE = 32;

let toolbar = getElement("#toolbar");
let previous = getElement("#previous");
let play = getElement("#play");
let next = getElement("#next");
let random = getElement("#random");

let img = [
    {path: "img/img_1.jpg", title: "titre image une"},
    {path: "img/img_2.jpg", title: "titre image deux"},
    {path: "img/img_3.jpg", title: "titre image trois"}
];

let positionActuelle = 0;
let showImg = getElement("#slider img");
let imgTitle = getElement("#slider figcaption");
let timer = null

// EVENTS
getElement("#toolbar-toggle").addEventListener("click", () =>{
    console.log("test");
    toolbar.classList.toggle("d-none");
})

document.addEventListener('keyup', (e) => {
    switch(e.keyCode){
        case RIGHT:
            avancer();
            break;
        case LEFT:
            reculer();
            break;
        case SPACE:
            jouer();
            break;
    }
})
previous.addEventListener('click', reculer);
play.addEventListener('click', jouer);
next.addEventListener('click', avancer);
random.addEventListener('click', aleatoire);


// FUNCTIONS
function avancer(){
    positionActuelle++;
    if (positionActuelle >= img.length){
        positionActuelle = 0;
    }

    refresh();

}

function aleatoire(){

    getElement("#play i").classList.toggle("fa-play");
    getElement("#play i").classList.toggle("fa-pause");

    if (timer == null){
        timer = setInterval(function(){
            let pos = positionActuelle
                do{
                    positionActuelle = Math.floor(Math.random) * img.length();
                }while(pos == positionActuelle);

            refresh();
        }, 2000)
    }
    

    refresh();
}

function jouer(){
    getElement("#play i").classList.toggle("fa-play");
    getElement("#play i").classList.toggle("fa-stop");

    if (timer == null){
        timer = setInterval(avancer, 2000);
    }else{
        clearInterval(timer);
        timer = null;
    }
}

function reculer(){
    positionActuelle--;
    if (positionActuelle < 0){
        positionActuelle = img.length -1;
    }
    refresh()
}

function refresh(){
    showImg.src = img[positionActuelle].path;
    imgTitle.innerHTML = img[positionActuelle].title
}

function getElement(id){
    return document.querySelector(id);
}