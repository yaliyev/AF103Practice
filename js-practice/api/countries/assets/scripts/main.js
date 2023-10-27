let countriesCards = document.getElementById('countries-cards');

let globalData = [];


let searchInput = document.getElementById('search');


let sortSelect = document.getElementById('sort-select');

sortSelect.addEventListener('change', () => {

    let data = JSON.parse(JSON.stringify(globalData));

    let sortSelectedValue = sortSelect.value;

    

    if (sortSelectedValue === 'Ascending') {

        let resultDataAfterSort = data.sort((a, b) => {

            return a.population - b.population;

        });

        addCountriesToCards(resultDataAfterSort, true);

    } else if (sortSelectedValue === 'Descending') {
        let resultDataAfterSort = data.sort((a, b) => {

            return b.population - a.population;

        });

        addCountriesToCards(resultDataAfterSort, true);
    }else{
        addCountriesToCards();
    }

});

searchInput.addEventListener('keyup', async () => {

    let searchTxt = searchInput.value.toLowerCase();



    let resultDataAfterSearch = globalData.filter((country) => {
        if (country.name.official.toLowerCase().indexOf(searchTxt) > -1) {
            return country;
        }
    });

    addCountriesToCards(resultDataAfterSearch, true);

});

//    sortButton.addEventListener('click',()=>{

//     let resultDataAfterSort = globalData.sort( (a,b)=>{

//         return a.population - b.population;

//     });

//     addCountriesToCards(resultDataAfterSort,true);
//    });


let getData = async () => {
    console.log('GET DATA');
    let dataResponse = await fetch("https://restcountries.com/v3.1/all");

    let data = await dataResponse.json();


    // data test
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[0].name.official);
    // console.log(data[0].capital[0]);
    // console.log(data[0].population);
    // console.log(data[0].flags.png);

    return data;
}

let addCountriesToCards = async (data, searchMode = false) => {

    if (searchMode == false) {
        data = globalData;
    }

    countriesCards.innerHTML = '';


    for (let i = 0; i < data.length; i++) {

        let colSizeThree = document.createElement('div');

        let countryCard = document.createElement('div');

        let countryImg = document.createElement('img');

        let countryCardBody = document.createElement('div');

        let countryName = document.createElement('h5');

        let countryCapital = document.createElement('div');

        let countryPopulation = document.createElement('div');

        colSizeThree.setAttribute('class', "col-3");

        countryCard.setAttribute('class', "card");

        countryCard.style.width = '18rem';

        countryImg.setAttribute('class', 'card-img-top');

        countryImg.src = data[i].flags.png;

        countryCardBody.setAttribute('class', 'card-body');

        countryName.setAttribute('class', 'card-title');

        countryName.innerText = data[i].name.official;

        countryCapital.setAttribute('class', 'card-text');

        countryCapital.innerHTML = '<strong>Capital:</strong> ' + data[i].capital;

        countryPopulation.innerHTML = '<strong>Population:</strong> ' + data[i].population;

        //styles

        countryCard.style.marginTop = '20px';

        countryCard.style.marginBottom = '20px';


        countryCardBody.setAttribute('style', 'height: 200px ;');

        // countryImg.style.display = 'block';
        // countryImg.width = '100px';
        // countryImg.height = '100px';

        countryImg.setAttribute('style', 'height: 150px ;');

        countryCapital.style.marginTop = "30px";

        countryPopulation.style.marginTop = "30px";

        // appending elements to countries cards

        colSizeThree.appendChild(countryCard);

        countryCard.appendChild(countryImg);
        countryCard.appendChild(countryCardBody);

        countryCardBody.appendChild(countryName);
        countryCardBody.appendChild(countryCapital);
        countryCardBody.appendChild(countryPopulation);

        countriesCards.appendChild(colSizeThree);

    }
}

let initiateApp = async () => {
    globalData = await getData();

    addCountriesToCards();

}
initiateApp();

