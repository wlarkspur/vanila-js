const images = [
  "pexels-alexander-grey-1191710.jpg",
  "pexels-francesco-ungaro-673648.jpg",
  "pexels-moose-photos-1037992.jpg",
  "pexels-pixabay-220067.jpg",
  "pexels-pixabay-531880.jpg",
  "pexels-s-migaj-747964.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
