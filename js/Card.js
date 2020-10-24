class Card
{

  constructor()
  {
    this.cards = ["pierre","feuille","ciseaux"];
    this.aiCard = [];
    this.content = document.querySelector('.content');
    this.p = document.createElement('p');
    this.myCards = document.querySelectorAll('.block-hover');
    this.aiCards = document.querySelectorAll('.ai-card');
  }


  init()
  {
    this.content.innerHTML = " ";
    document.querySelector('#playing').classList.replace('block','hidden');

    this.aiCard = [];
    this.choice = "";
    this.myCards.forEach(element => {
      element.classList.remove('disabled');
      element.classList.remove('opac');
    })

    this.aiCards.forEach(element => {
      element.classList.remove('disabled');
      element.classList.remove('opac');
    })

  }

  randomAiCard()
  {
    const randomCard = Math.floor(Math.random()*3); // calcul aleatoire du tableau
    this.aiCard = this.cards[randomCard]; //carte de l'IA
  }

  choiceCard(choice)
  {
    this.choice = choice;
    this.randomAiCard();
    
    if((choice == "pierre" && this.aiCard == "feuille" ) || (choice == "feuille" && this.aiCard == "ciseaux" ) ||(choice == "ciseaux" && this.aiCard == "pierre"))
    {  
        this.p.innerHTML = `<span>perdu<span> !`;
        this.content.appendChild(this.p);
    }
    else if((choice == "pierre" && this.aiCard == "pierre") || (choice == "feuille" && this.aiCard == "feuille") || (choice == "ciseaux" && this.aiCard == "ciseaux"))
    {
      this.p.innerHTML = `<span>égalité</span> !`;
      this.content.appendChild(this.p);
    }else{
      this.p.innerHTML =`<span>gagné</span> !`;
      this.content.appendChild(this.p);
    }

    this.myCards.forEach(element => {
      element.classList.add('disabled');

      if(element.alt === this.choice)
      {
        element.classList.add('opac');
      }
    })

    this.aiCards.forEach(element => {
      element.classList.add('disabled');
      if(element.alt === this.aiCard)
      {
        element.classList.add('opac');
      }
    })

    document.querySelector('#playing').classList.replace('hidden','block');
  }

}
