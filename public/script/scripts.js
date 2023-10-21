function myFunction() {
  console.log(1);
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("character-container");
    cards = cardContainer.getElementsByClassName("card");
    console.log(3);
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".name");
      if (title.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
        console.log(4);
      } else {
        console.log(2);
        cards[i].style.display = "none";
      }
    }
  }
  