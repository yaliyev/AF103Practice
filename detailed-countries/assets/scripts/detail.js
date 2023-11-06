
let cards = document.getElementById('cards');

let countries = [];


async function getCountriesData() {
    countries = await fetch('https://restcountries.com/v3.1/all').then((response) => response.json());
    return countries;
}

function loadCountryAndItsNeighbours() {
        let params = new URLSearchParams(window.location.search);
        let countryName = params.get("name");
        let country = countries.find(country =>country.name.official === countryName);


        document.querySelector('#country-image').src = country.flags.png;
        document.querySelector('#country-name').innerText = country.name.official;
        document.querySelector('#country-capital').innerText += country.capital;
        document.querySelector('#country-population').innerText += country.population;
        document.querySelector('#country-region').innerText += country.region;
        document.querySelector('#country-fifa-name').innerText +=  country.fifa;

        let borders = country.borders;

        for(let i = 0;i<borders.length;i++){
            let borderCountry = countries.find(country => country.cca3 === borders[i]);
            console.log(borderCountry);
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

       

       cardImage.src = borderCountry.flags.png;
       cardImage.style.height = "200px";

       cardTitle.innerText = borderCountry.name.official;
       cardCapital.innerText = `Capital: ${borderCountry.capital}`;
       cardPopulation.innerText = `Population: ${borderCountry.population}`;

       card.addEventListener('click',function(){
        window.location.href = `/templates/detail.html?name=${borderCountry.name.official}`;
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

(async () => {
    await getCountriesData();
    loadCountryAndItsNeighbours();
})();