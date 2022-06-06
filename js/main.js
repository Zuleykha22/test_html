let myImg = [
  "photo/one.jpg",
  "photo/two.jpg",
  "photo/three.jpg",
  "photo/four.jpg",
];
let img = document.querySelector("#slider img");
img.src = myImg[0];

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let currentSlide = 0;
next.onclick = function () {
  currentSlide++;
  if (currentSlide >= myImg.length) {
    currentSlide = 0;
  }
  img.src = myImg[currentSlide];
};

prev.onclick=function(){
    currentSlide--;
    if(currentSlide==-1){
    currentSlide=myImg.length-1
    }
    img.src=myImg[currentSlide]
}