window.onload = () => {
    let charContainer = document.getElementById("character-container");

    let urlParams = new URLSearchParams(location.search);
    let selectedCharacter = urlParams.get('id');
    console.log(selectedCharacter);

    fetch("https://animation-backend.onrender.com/characters/" + selectedCharacter)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}