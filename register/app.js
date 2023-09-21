let form = document.getElementById("signup-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let inputValue = document.getElementById("name").value;
    if (inputValue) {
        localStorage.setItem("name", inputValue);
    } if (inputValue == "Cameron") {
        window.open("https://www.instagram.com/cam__6870/", "_blank");
    } if (inputValue == "je me douche pas") {
        window.open("https://www.leagueoflegends.com/fr-fr/", "_blank")
    } if (inputValue == "pop simoke") {
        window.open("https://twitter.com/Noahrouelibre/status/1622886892546007046", "_blank")
    }
    event.preventDefault();
    window.history.back();
}