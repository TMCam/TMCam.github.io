let name = localStorage.getItem("name");

if (name) {
        var sign = document.getElementById('sign')
        sign.innerHTML = name;
}