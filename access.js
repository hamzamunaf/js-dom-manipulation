console.log("== document.body:", document.body);

var body = document.body;
console.log("== body.childNodes:", body.childNodes);
console.log("== body.firstChild:", body.firstChild);
console.log("== body.lastChild:", body.lastChild);

var headerElem = body.childNodes[1];
console.log("== headerElem.childNodes:", headerElem.childNodes);
console.log("== headerElem.nextSibling:", headerElem.nextSibling);
console.log("== headerElem.previousSibling:", headerElem.previousSibling);
console.log("== headerElem.parentNode:", headerElem.parentNode);

var photoCardContainer = document.getElementById('photo-card-container');
console.log("== photoCardContainer:", photoCardContainer);

var photoCards = document.getElementsByClassName('photo-card');
console.log("== photoCards:", photoCards);
for (var i = 0; i < photoCards.length; i++) {
  console.log("  - photoCards[i]:", photoCards[i]);
}

// var images = document.getElementsByTagName('img');
// console.log("== images:", images);
//
var firstPhotoCardImage = document.querySelector('.photo-card:first-child img');
console.log("== firstPhotoCardImage:", firstPhotoCardImage);
//
// var photoCardContainer2 = document.querySelector('#photo-card-container');
// console.log("== photoCardContainer2:", photoCardContainer2);
//
// var photoCards2 = document.querySelectorAll('.photo-card');

var photoCard = photoCards[0];
console.log("== photoCard.textContent:", photoCard.textContent);
console.log("== photoCard.innerHTML:", photoCard.innerHTML);
