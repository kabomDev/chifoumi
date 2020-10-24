"use strict";

const card = new Card;
const cards = document.querySelectorAll('.block-hover');

cards.forEach(element =>
{
  element.addEventListener('click', function(event)
  {
    const choice = event.target.dataset.target;
    card.init();
    card.choiceCard(choice);
  })
});

document.querySelector('#playing').addEventListener('click', function()
{
  card.init();
})
