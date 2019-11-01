var photoCardContainer = document.getElementById('photo-card-container');

function insertNewPhotoCard(url, caption) {
  var photoCardSection = document.createElement('section');
  photoCardSection.classList.add('photo-card');
  photoCardSection.classList.add('another-class');
  photoCardSection.classList.remove('another-class');

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');
  photoCardSection.appendChild(imgContainerDiv);

  var personPhotoImg = document.createElement('img');
  personPhotoImg.classList.add('person-photo-img');
  personPhotoImg.src = url;
  imgContainerDiv.appendChild(personPhotoImg);

  var captionDiv = document.createElement('div');
  captionDiv.classList.add('caption');
  captionDiv.textContent = caption;
  photoCardSection.appendChild(captionDiv);

  console.log("== photoCardSection:", photoCardSection);
  photoCardContainer.appendChild(photoCardSection);
}

insertNewPhotoCard('http://placekitten.com/480/480?image=7', 'Luke as a kitty');

var firstPhotoCard = photoCardContainer.querySelector('.photo-card');
console.log("== firstPhotoCard:", firstPhotoCard);
// firstPhotoCard.remove();
firstPhotoCard.parentNode.removeChild(firstPhotoCard);
