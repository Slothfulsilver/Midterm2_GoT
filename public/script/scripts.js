

function myFunction() {
  var input, filter, cards, cardContainer, title, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("character-container");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".name");
    txtValue = title.textContent || title.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
        location.href = "/error";
    }
  }
}
