document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("character-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let characters = [];
    let currentPage = 0;

    // Function to fetch characters from the API
    function fetchCharacters(page = 1) {
        const pageSize = 10;
        const startIndex = (page - 1) * pageSize;
        axios.get(`https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&page=${page}`)
            .then((response) => {
                characters = response.data;
                displayCharacters(startIndex);
            })
            .catch((error) => {
                console.error("Error fetching character data:", error);
            });
    }

// Function to display characters on the page
function displayCharacters(startIndex) {
    characterContainer.innerHTML = ""; // Clear the container

    for (let i = startIndex; i < startIndex + 10; i++) {
        if (characters[i]) {
            const character = characters[i];
            const card = document.createElement("div");
            card.classList.add("col-md-4", "mb-4");
            card.innerHTML = `

            `;
            characterContainer.appendChild(card);
        }
    }
}
    // Function to handle search
    function handleSearch() {
        const searchText = searchInput.value.toLowerCase();
        const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchText));
        displayCharacters(0);
    }

    // Function to navigate to the next page
    function nextPage() {
        if (currentPage < Math.ceil(characters.length / 10) - 1) {
            currentPage++;
            displayCharacters(currentPage * 10);
        }
    }

    // Function to navigate to the previous page
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            displayCharacters(currentPage * 10);
        }
    }

    // Event listeners
    searchButton.addEventListener("click", handleSearch);
    nextButton.addEventListener("click", nextPage);
    prevButton.addEventListener("click", prevPage);

    // Initial fetch of characters
    fetchCharacters();
});
document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("character-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Function to fetch characters from the server
    function fetchCharacters() {
        fetch("/api/characters")
            .then((response) => response.json())
            .then((data) => {
                characters = data;
                currentPage = 0;
                displayCharacters(currentPage);
            })
            .catch((error) => {
                console.error("Error fetching character data:", error);
            });
    }

    let characters = [];
    let currentPage = 0;

    // Function to display characters on the page
    function displayCharacters(startIndex) {
        characterContainer.innerHTML = ""; // Clear the container

        for (let i = startIndex; i < startIndex + 10; i++) {
            if (characters[i]) {
                const character = characters[i];
                const card = document.createElement("div");
                card.classList.add("col-md-4", "mb-4");
                card.innerHTML = `
                    <div class="card">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Character Image">
                        <div class="card-body">
                            <h5 class="card-title">ID: ${character.url.split("/").pop()}</h5>
                            <p class="card-text">First Name: ${character.firstName || "N/A"}</p>
                            <p class="card-text">Last Name: ${character.lastName || "N/A"}</p>
                            <p class="card-text">Born: ${character.born || "N/A"}</p>
                            <p class="card-text">Died: ${character.died || "N/A"}</p>
                            <p class="card-text">Title(s): ${character.titles.join(", ") || "N/A"}</p>
                            <p class="card-text">Aliases: ${character.aliases.join(", ") || "N/A"}</p>
                            <p class="card-text">Family: ${character.allegiances.join(", ") || "N/A"}</p>
                            <p class="card-text">Family Crest: ${character.familyCrest || "N/A"}</p>
                        </div>
                    </div>
                `;
                characterContainer.appendChild(card);
            }
        }
    }

    // Function to handle search
    function handleSearch() {
        const searchText = searchInput.value.toLowerCase();
        const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchText));
        displayCharacters(0);
    }

    // Function to navigate to the next page
    function nextPage() {
        if (currentPage < Math.ceil(characters.length / 10) - 1) {
            currentPage++;
            displayCharacters(currentPage * 10);
        }
    }

    // Function to navigate to the previous page
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            displayCharacters(currentPage * 10);
        }
    }

    // Event listeners
    searchButton.addEventListener("click", handleSearch);
    nextButton.addEventListener("click", nextPage);
    prevButton.addEventListener("click", prevPage);

    // Initial fetch of characters
    fetchCharacters();
});
