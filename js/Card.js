class Card
{
  cards = ["pierre","feuille","ciseaux"];
  aiCard = new Array;

  randomAiCard()
  {
    const randomCard = Math.floor(Math.random()*3); // calcul aleatoire du tableau
    this.aiCard = this.cards[randomCard]; //carte de l'IA
  }

  init(choice)
  {
    this.choice = choice;
    this.randomAiCard();
    const content = document.querySelector('.content');
    let p = document.createElement('p');

    content.innerHTML = " ";

    if((choice == "pierre" && this.aiCard == "feuille" ) || (choice == "feuille" && this.aiCard == "ciseaux" ) ||(choice == "ciseaux" && this.aiCard == "pierre"))
    {
        p.innerHTML = `vous avez choisis ${choice}, l'ordi a choisis ${this.aiCard}, vous avez perdu !`;
        content.appendChild(p);
    }
    else if((choice == "pierre" && this.aiCard == "pierre") || (choice == "feuille" && this.aiCard == "feuille") || (choice == "ciseaux" && this.aiCard == "ciseaux"))
    {
        p.innerHTML = `vous avez choisis ${choice}, l'ordi a choisis ${this.aiCard}, vous êtes à égalité !`;
        content.appendChild(p);
    }else{
        p.innerHTML =`vous avez choisis ${choice}, l'ordi a choisis ${this.aiCard}, vous avez gagné !`;
        content.appendChild(p);
    }

    document.querySelector('.block').classList.replace('block', 'hidden');
    document.querySelector('#playing').classList.replace('hidden','block');
  }
}
