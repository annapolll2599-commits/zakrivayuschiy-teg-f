/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const hearts = document.querySelectorAll('.like-icon');
const likeButtons = document.querySelectorAll('.card__like-button');
const iconButtons = document.querySelectorAll('.card__icon-button');

iconButtons.forEach(function(iconBtn, idx) {
  iconBtn.onclick = function() {
    toggleLike(hearts[idx], likeButtons[idx]);
  };
});

likeButtons.forEach(function(btn, idx) {
  btn.onclick = function() {
    toggleLike(hearts[idx], btn);
  };
});

function toggleLike(heartIcon, button) {
  heartIcon.classList.toggle('is-liked');
  updateButtonLabel(heartIcon, button);
}

function updateButtonLabel(heartIcon, button) {
  var label = button.querySelector('.button__text');
  if (heartIcon.classList.contains('is-liked')) {
    window.setTimeout(function() {
      label.textContent = 'Unlike';
    }, 500);
  } else {
    window.setTimeout(function() {
      label.textContent = 'Like';
    }, 500);
  }
}
