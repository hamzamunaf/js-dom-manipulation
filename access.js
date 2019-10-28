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
