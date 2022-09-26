//랜덤하게 배경이미지 바뀌게 하기.
//array에서 랜덤한 숫자를 얻고, 그 랜덤한 숫자에 따른 배경이미지를 body에 추가.

const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
//const images = ["4.jpeg"];
const BGI = "background";

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BGI;

bgImage.src = `img/${chooseImage}`;

document.body.appendChild(bgImage);

//bgImage.id= 'bgImage';