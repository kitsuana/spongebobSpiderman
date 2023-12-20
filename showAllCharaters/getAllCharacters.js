window.onload = () => {
    console.log("trigger");
    
    fetch("https://animation-backend.onrender.com/characters")
    .then((res) => res.json())
    .then((characters) => {
        let charactersContainersEl = document.getElementById("characters-container");
        

        characters.forEach((character) => {
            // creating a div element for storing the character details
            let CharacterCard = document.createElement("div");

            charactersContainersEl.appendChild(CharacterCard);

        })
    })
}