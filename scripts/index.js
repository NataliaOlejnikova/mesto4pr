const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupOpenButton = document.querySelector ('.profile__edit-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const formSave = document.querySelector('.popup__container');
const formBody = document.querySelector('.popup__form-body');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_profession');

const openPopup =function () {
  popupElement.classList.add('popup_opened');
};

const closePopup =function () {
  popupElement.classList.remove('popup_opened');
};
popupOpenButton.addEventListener('click',openPopup);
popupCloseButton.addEventListener('click',closePopup);



popupOpenButton.addEventListener('click',()=>{
openPopup();
nameInput.value = profileTitle.textContent;
jobInput.value =profileSubtitle.textContent ;

});


popupCloseButton.addEventListener('click',()=>{
  closePopup();
});

function submitSaveForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;


  closePopup();
};


formBody.addEventListener('submit', submitSaveForm);

