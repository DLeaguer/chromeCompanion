console.log('This is ME!');

// let img = document.getElementsByClassName('progressiveMedia-image js-progressiveMedia-image');

let img = document.getElementsByTagName('img');
for (var i = 0; i < img.length; i++){
  img[i].addEventListener('click', changeImg);

}
console.log(img);


function changeImg(){
  this.href = '';
  this.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png";
}

// let img = document.createElement("img");
// img.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/157453-200.png";
// img.zIndex = 1000;
// img.width = 200;
// img.height = 200;
// document.body.appendChild(img);