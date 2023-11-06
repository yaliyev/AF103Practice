let cards = [
    {
        itemName: 'OK004 Okka Minio Türk Kahvesi Makinesi - Bakır',
        itemImageLink: 'https://cdn.dsmcdn.com/ty413/product/media/images/20220429/23/100525960/8649512/1/1_org.jpg',
        addedToWishList: true
    },
    {
        itemName: 'OK004 Okka Minio Türk Kahvesi Makinesi - Bakır',
        itemImageLink: 'https://cdn.dsmcdn.com/ty413/product/media/images/20220429/23/100525960/8649512/1/1_org.jpg',
        addedToWishList: false
    }
];

let cardsElement = document.getElementById('cards');

// let hearts = Array.from(document.getElementsByClassName('heart'));

// hearts.forEach((heart) => {
//     console.log(heart);
//     heart.addEventListener('click', () => {
//         if (heart.classList[0] === 'fa-regular') {
//             heart.classList.replace('fa-regular', 'fa-solid');
//         } else {
//             heart.classList.replace('fa-solid', 'fa-regular');
//         }
//         console.log(heart.classList);
//     })
// })

function insertCards() {
    for (let i = 0; i < cards.length; i++) {

        let cardData = cards[i];

        let colThree = document.createElement('div');

        let card = document.createElement('div');
        let cardImageDiv = document.createElement('div');
        let cardImage = document.createElement('img');
        let cardIcon = document.createElement('i');
        let cardBody = document.createElement('div');
        let cardTitle = document.createElement('h6');


      


        colThree.setAttribute('class', 'col-3');
        card.setAttribute('class', 'card');
        cardImageDiv.setAttribute('class','image-source-card');
        cardImage.setAttribute('class','card-img-top image-source');
        if(!cardData.addedToWishList){
            cardIcon.setAttribute('class','fa-regular fa-heart heart');
        }else{
            cardIcon.setAttribute('class','fa-solid fa-heart heart');
        }
        cardBody.setAttribute('class','card-body');
        cardTitle.setAttribute('class','card-title');
        

        cardImage.src = cardData.itemImageLink;
        cardTitle.innerText = cardData.itemName;


        cardIcon.addEventListener('click', () => {
            if (cardIcon.classList[0] === 'fa-regular') {
                cardIcon.classList.replace('fa-regular', 'fa-solid');
                cards[i].addedToWishList = true;
            } else {
                cardIcon.classList.replace('fa-solid', 'fa-regular');
                cards[i].addedToWishList = false;
            }

            localStorage.setItem('wishlist-cards',JSON.stringify(cards));
            
        })


        cardImageDiv.appendChild(cardImage);
        cardImageDiv.appendChild(cardIcon);

        cardBody.appendChild(cardTitle);

        card.appendChild(cardImageDiv);
        card.appendChild(cardBody);

        colThree.appendChild(card);

        cardsElement.appendChild(colThree);



        
        


    }
}
insertCards();
