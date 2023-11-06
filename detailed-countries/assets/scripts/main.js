
let cards = document.getElementById('cards');

let countries = [];



let searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(){
    loadCountryCards(searchMode = true,this.value);
  });


async function getCountriesData(){
  countries =   await fetch('https://restcountries.com/v3.1/all').then((response)=>response.json());
  return countries;
}

 function loadCountryCards(searchMode = false,searchText){
    let searchData = [];

    cards.innerHTML = "";

    if(searchMode){

        searchData = countries.filter( (country)=> country.name.official.toLowerCase().indexOf(searchText.toLowerCase()) > -1 );

    }else{
        searchData = JSON.parse(JSON.stringify(countries));
    }
    
    for(let i = 0;i < searchData.length;i++){

        let country = searchData[i];
        console.log(country);
        

        let colThree = document.createElement("div");
        let card =  document.createElement("div");
        let cardImage = document.createElement("img");
        let cardBody = document.createElement("div");

       let cardTitle = document.createElement("h5");
       let cardCapital = document.createElement("p");
       let cardPopulation = document.createElement("p");
       
       

       colThree.setAttribute("class","col-4 mt-5");
       card.setAttribute("class","card");
       cardImage.setAttribute("class","card-img-top");
       cardBody.setAttribute("class","card-body");
       cardTitle.setAttribute("class","card-title");
       cardCapital.setAttribute("class","card-text");
       cardPopulation.setAttribute("class","card-text");

       

       cardImage.src = country.flags.png;
       cardImage.style.height = "200px";

       cardTitle.innerText = country.name.official;
       cardCapital.innerText = `Capital: ${country.capital}`;
       cardPopulation.innerText = `Population: ${country.population}`;

       card.addEventListener('click',function(){
        window.location.href = `/templates/detail.html?name=${country.name.official}`;
       });

       cardBody.appendChild(cardTitle);
       cardBody.appendChild(cardCapital);
       cardBody.appendChild(cardPopulation);

       card.appendChild(cardImage);
       card.appendChild(cardBody);

       colThree.appendChild(card);

       cards.appendChild(colThree);



       

    }


   
}

(async ()=>{
await getCountriesData();
countries.push({"name":{"official":"GurbanLandia"},"flags":{"png":"https://media.licdn.com/dms/image/D4E03AQFzCuRbnmzqtw/profile-displayphoto-shrink_200_200/0/1698918324850?e=2147483647&v=beta&t=Bm8foBoVT0O-uhuamv2bm0ebFL2CUcDW1yczTfqg-J8"}})
loadCountryCards();
})();



