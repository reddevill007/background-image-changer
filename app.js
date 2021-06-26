var next = document.getElementById('next');
var prev = document.getElementById('prev');
var main = document.getElementById('main');
var thumbnail = document.getElementsByClassName('thumbnail');

var bgimg = new Array(
    "pic-1.jpeg",
    "pic-2.jpeg",
    "pic-3.jpeg",
    "pic-4.jpeg",
    "pic-5.jpeg"
);

let i = 0;

next.onclick = ()=> {
    if(i<4){
        main.style.backgroundImage = 'url("'+bgimg[i+1]+'")';
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++;
    }
}

prev.onclick = ()=> {
    if(i>0){
        main.style.backgroundImage = 'url("'+bgimg[i-1]+'")';
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--;
    }
}