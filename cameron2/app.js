window.onscroll = function() {
  if (window.pageYOffset >= 800) {
    document.querySelector('.actors').classList.add('visible');
    document.querySelector('.staff').classList.add('visible');
   } else {
   document.querySelector('.actors').classList.remove('visible');
   document.querySelector('.staff').classList.remove('visible');
  }
};

const button = document.querySelector('#comm');
const target = document.querySelector('#com');

button.addEventListener('click', () => {
   target.scrollIntoView({ behavior: 'smooth' });
});

const int = document.querySelector('#int');
const intro = document.querySelector('.rickmorty');

int.addEventListener('click', () => {
   intro.scrollIntoView({ behavior: 'smooth' });
});

const res = document.querySelector('#res');
const resume = document.querySelector('.resume');

res.addEventListener('click', () => {
   resume.scrollIntoView({ behavior: 'smooth' });
});

let name = localStorage.getItem("name");

if (name) {
        var sign = document.getElementById('sign')
        sign.innerHTML = name;
}