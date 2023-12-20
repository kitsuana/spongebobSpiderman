window.onload = () => {

    // let urlParams = new URLSearchParams(location.search);
    // let selectedCharacter = urlParams.get('id');
    // console.log(selectedCharacter);

    fetch("https://animation-backend.onrender.com/characters/11")
        .then((res) => res.json())
        .then((character) => {
            console.log(character);
            let charContainer = document.getElementById("character-container");

            charContainer.innerHTML = `
            <h3>${character.name}</h3>
            <img id="char-img" src="${character.imageUrl}" alt="${character.name}" />
            <p>Show: ${character.showName}</p>`;
        })
}