// 21

function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


// 22
function calculate(a, b, operator) {
    if (operator = '+') {
        return sum(a, b);
    }
    if (operator = '-') {
        return substraction(a, b);
    }
    if (operator = '*') {
        return multiply(a, b);
    }
    if (operator = '/') {
        return divide(a, b);
    }
}


const data = [
    {
        iso2: "AF",
        iso3: "AFG",
        country: "Afghanistan",
        cities: [
            "Herat",
            "Kabul",
            "Kandahar",
            "Molah",

            "Rana",
            "Shar",
            "Sharif",
            "Wazir Akbar Khan",
        ],
    },
    {
        iso2: "AL",
        iso3: "ALB",
        country: "Albania",
        cities: [
            "Elbasan",

            "Petran",
            "Pogradec",
            "Shkoder",
            "Tirana",
            "Ura Vajgurore",
        ],
    },
    {
        iso2: "DZ",
        iso3: "DZA",
        country: "Algeria",

        cities: [
            "Algiers",
            "Annaba",
            "Azazga",
            "Batna City",
            "Blida",
            "Bordj",
            "Bordj Bou Arreridj",
            "Bougara",
            "Cheraga",
            "Chlef",
            "Constantine",

            "Djelfa",
            "Draria",
            "El Tarf",

            "Hussein Dey",

            "Illizi",
            "Jijel",
            "Kouba",
            "Laghouat",
            "Oran",
            "Ouargla",
            "Oued Smar",
            "Relizane",
            "Rouiba",
            "Saida",
            "Souk Ahras",

            "Tamanghasset",
            "Tiaret",
            "Tissemsilt",
            "Tizi",
            "Tizi Ouzou",
            "Tlemcen",
        ],
    },
    {
        iso2: "AD",
        iso3: "AND",
        country: "Andorra",

        cities: [
            "Andorra la Vella",
            "Canillo",
            "Encamp",
            "Engordany",

            "Escaldes-Engordany",
            "La Massana",
            "Llorts",
            "Ordino",
            "Santa Coloma",
            "Sispony",

            "Soldeu",
        ],
    },
    {
        iso2: "AO",
        iso3: "AGO",
        country: "Angola",
        cities: [
            "Ambriz",
            "Benguela",
            "Cabinda",
            "Cacole",

            "Camabatela",
            "Cazeta",
            "Huambo",

            "Kuito",

            "Lobito",
            "Luanda",
            "Lubango",
            "Lucapa",
            "Lumeje",
            "Malanje",
            "Menongue",
            "Muxaluando",
            "Namibe",
            "Ondjiva",
            "Piri",

            "Saurimo",
            "Talatona",
        ],
    },
    {
        iso2: "AI",
        iso3: "AIA",
        country: "Anguilla",
        cities: [
            "The Valley",
            "Blowing Point Village",
            "Sandy Ground Village",

            "Sandy Hill",
            "East End Village",
            "George Hill",
            "Island Harbour",
            "North Hill Village",
            "North Side",
            "South Hill Village",
            "Stoney Ground",
            "Farrington",
            "The Quarter",
            "West End Village",
        ],
    },
    {
        iso2: "AG",
        iso3: "ATG",
        country: "Antigua and Barbuda",
        cities: [
            "All Saints",
            "Cassada Gardens",
            "Codrington",
            "Old Road",
            "Parham",

            "Woods",
        ],
    },
];
// 23
function getCountries() {
    let countries = [];

    for (let i = 0; i < data.length; i++) {
        countries.push(data[i].country);
    }
    return countries;
}

// 24
function getCountriesCountByFirstLetter() {

    let resultArr = [];

    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    
    
    let countries = getCountries();
    
    for(let i = 0; i < letters.length;i++){
        let letterCount = 0;
         for(let j = 0; j < countries.length;j++){
            if(countries[j][0] == letters[i].toUpperCase()){
                letterCount++;
            }
         }
         let country = {};
         country.letter = letters[i];
         country.count = letterCount;

         resultArr.push(country);
    }
    return resultArr;
}


// 25 
function getTheCountryWhichHaveTheMostCities() {
    let maxCities = 0;
    let countryIndex = 0;

    for (let i = 0; i < data.length; i++) {
        if (maxCities < data[i].cities.length) {
            maxCities = data[i].cities.length;
            countryIndex = i;
        }
    }
    return data[countryIndex].country;
}

// 26
function getTheCitiesOfCountryWhichHasTheLongestName() {
    let longestCountryNameLength = 0;
    let longestCountryNameIndex = null;

    for (let i = 0; i < data.length; i++) {
        if (longestCountryNameLength < data[i].country.length) {
            longestCountryNameLength = data[i].country.length;
            longestCountryNameIndex = i;
        }
    }

    return data[longestCountryNameIndex].cities;
}

// 27
function getTheCountriesCitiesLengthList() {
    let countriesCitiesLengthList = [];



    for (let i = 0; i < data.length; i++) {
        let country = {};
        country.name = data[i].country;
        country.cityCount = data[i].cities.length;
        countriesCitiesLengthList.push(country);
    }
    return countriesCitiesLengthList;

}
