function avatar() {
        var img = document.getElementById("bg")
        img.style.backgroundImage = "url('img/avatar1.jpg')"
        img.style.backgroundPosition = "0";
}

function django() {
        var img = document.getElementById("bg")
        img.style.backgroundImage = "url('img/django1.jpg')"
        img.style.backgroundPosition = "0";
}

function interstellar() {
        var img = document.getElementById("bg")
        img.style.backgroundImage = "url('img/interstellar1.jpg')"
        img.style.backgroundPosition = "0";
}

function rick() {
        var img = document.getElementById("bg")
        img.style.backgroundImage = "url('img/rick1.jpg')"
        img.style.backgroundPosition = "0";
}

function signup() {
        var doc = document.getElementById("sign")
        doc.style.display = "block";
}

function pop() {
        var doc = document.getElementById("sign")
        doc.style.display = "none";
}

function easter() {
        alert('EasterEgg found.')
        var img = document.getElementById("bg")
        img.style.backgroundImage = "linear-gradient(to bottom, transparent, #222), url('img/lycee.jpg')"
        img.style.backgroundPosition = "0";
}

function del() {
        let name = localStorage.getItem("name");
        localStorage.removeItem("name");
}

var images = ['img/rick1.jpg', 'img/interstellar1.jpg', 'img/django1.jpg', 'img/avatar1.jpg'];

var wallpaper = document.getElementById("bg");

var i = 0;

function updateWallpaper() {
  wallpaper.style.backgroundImage = "url('" + images[i] + "')";

  i++;

  if (i == images.length) {
    i = 0;
  }
}
updateWallpaper()
setInterval(updateWallpaper, 10000);


const film = document.querySelector('.film');
const flashlight = document.querySelector('.flashlight');
const html = document.querySelector('.html');

html.addEventListener('mousemove', (event) => {
  flashlight.style.left = `${event.pageX - 750}px`;
  flashlight.style.top = `${event.pageY - 800}px`;
});

let name = localStorage.getItem("name");

if (name) {
        var sign = document.getElementById('sign')
        sign.innerHTML = name;
        var vu = document.getElementById('la')
        vu.classList.remove("pavu");
}