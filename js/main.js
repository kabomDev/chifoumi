"use strict";

const card = new Card;

document.querySelector('.buttons').addEventListener('click', function(event)
{
  const choice = event.target.value;
  card.init(choice);
})

document.querySelector('#playing').addEventListener('click', function()
{
  document.location.reload(true);
})
