
const popupOpenButton = document.querySelector('.contacts-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup-close');
const popupName = popup.querySelector('.user-name-input');
const popupEmail = popup.querySelector('.user-email-input');
const popupForm = popup.querySelector('.popup-form');



let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

popupOpenButton.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add('popup-show');
popupName.focus();
if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }

});

popupCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove('popup-error');
});

popupForm.addEventListener('submit', function(evt){
if (!popupName.value || !popupEmail.value) {
 evt.preventDefault();
 popup.classList.remove('popup-error');
 popup.offsetWidth = popup.offsetWidth;
 popup.classList.add('popup-error');
}else{
	if (isStorageSupport) {
	localStorage.setItem('name', popupName.value);
    }
 }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup-show')) {
    	evt.preventDefault();
    	popup.classList.remove('popup-show');
        popup.classList.remove('popup-error');
    }
  }
});
