document.addEventListener("DOMContentLoaded", () => {
  //card options

  const cardArray = [
    {
      name: "one",
      img: "images/1.png",
    },
    {
      name: "one",
      img: "images/1.png",
    },
    {
      name: "two",
      img: "images/2.png",
    },
    {
      name: "two",
      img: "images/2.png",
    },
    {
      name: "three",
      img: "images/3.png",
    },
    {
      name: "three",
      img: "images/3.png",
    },
    {
      name: "four",
      img: "images/4.png",
    },
    {
      name: "four",
      img: "images/4.png",
    },
    {
      name: "five",
      img: "images/5.png",
    },
    {
      name: "five",
      img: "images/5.png",
    },
    {
      name: "six",
      img: "images/6.png",
    },
    {
      name: "five",
      img: "images/6.png",
    },
  ];

cardArray.sort(() => 0.5 - Math.random)

  // create board

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  /// check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')

        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent  = 'Cngrats!'
    }
  }

  // flip your card

  function flipCard() {
    var cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
