const section = document.querySelector("section");
const header = document.querySelector("h1");
const playerLivesCount = document.querySelector("span");
const button = document.querySelector("button");
let playerLives = 6;


playerLivesCount.textContent = playerLives;


const getData = () => [
{imgSrc: './images/spidey.jpg', name: "spidey"},
{imgSrc: './images/skye.jpg', name: "skye"},
{imgSrc: './images/rubble.jpg', name: "rubble"},
{imgSrc: './images/kubus.jpg', name: "kubus"},
{imgSrc: './images/ghost.jpg', name: "ghost"},
{imgSrc: './images/bluey.jpg', name: "bluey"},
{imgSrc: './images/blaze.jpg', name: "blaze"},
{imgSrc: './images/barbapappa.jpg', name: "barbapappa"},
{imgSrc: './images/spidey.jpg', name: "spidey"},
{imgSrc: './images/skye.jpg', name: "skye"},
{imgSrc: './images/rubble.jpg', name: "rubble"},
{imgSrc: './images/kubus.jpg', name: "kubus"},
{imgSrc: './images/ghost.jpg', name: "ghost"},
{imgSrc: './images/bluey.jpg', name: "bluey"},
{imgSrc: './images/blaze.jpg', name: "blaze"},
{imgSrc: './images/barbapappa.jpg', name: "barbapappa"},
];



const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};


const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add('clicked');
    const clickedCards = document.querySelectorAll('.clicked');
    console.log(clickedCards);
    //logic
    if (clickedCards.length === 2) {
        if (
            clickedCards[0].getAttribute('name') ===
            clickedCards[1].getAttribute('name')
        ) {
            clickedCards.forEach((card) => {
                card.classList.remove('clicked');
                card.style.pointerEvents = 'none';
                setTimeout(() => card.classList.add('match'), 1500);


            });

        } else {
            console.log("wrong");
            clickedCards.forEach((card) => {
                card.classList.remove('clicked');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);

            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart();
                return checkCards();
            }
        };
    }

    const matchCards = document.querySelectorAll('.match');
    console.log(matchCards);
    if (matchCards.length === 14) {
        section.classList.add('hidden');
        header.innerHTML = "Wygrana. Gratulacje!";
        setTimeout(() => window.location.reload(true), 5000);
    };

};
const restart = () => {
    section.classList.add('hidden');
    header.innerHTML = "Przegrana. Spróbuj jeszcze raz!";
    setTimeout(() => window.location.reload(true), 4000);
};

cardGenerator();


// button
button.addEventListener('click', () =>{
    window.location.reload(true)
})