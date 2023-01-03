function getCountryList(country) {
    document.addEventListener('DOMContentLoaded', ()=> {

        const selectCountry = document.getElementById(country);
        const selectCapital = document.getElementById("capital");


        fetch("https://restcountries.com/v2/all").then(resp => {
            return resp.json();
        }).then(countries => {
            // console.log(countries);
            let outputCountry = "";
            countries.forEach(country => {
                // console.log("country name: " + country.name);
                outputCountry += `<option value="${country.numericCode}">${country.name}</option>`;
                

            });
            selectCountry.innerHTML = outputCountry;

            const capitalCode = document.getElementById("countries").selectedOptions[0].value; 
            getCapital(capitalCode, countries);
        }).catch(err => {
            console.log(err);
        })
    });
}

function getCapital(capitalCode, countries) {
    const selectCapital = document.getElementById("capital");

    // fetch("https://restcountries.com/v2/all").then(resp => {
    //     return resp.json();
    // }).then(countries => {
        console.log(countries[016]);
            console.log(capitalCode);
            console.log(countries[016].capital);

            selectCapital.value = countries[016].capital;
    // }).catch(err => {
    //     console.log(err);
    // })
}

function getStateList(id) {
    document.addEventListener('DOMContentLoaded', ()=> {

        const selectState = document.getElementById(id);

        fetch("./data.json").then(resp => {
            return resp.json();
        }).then(states => {
            let output = "";
            states.forEach(state => {
                output += `<option value="${state.name}">${state.abbreviation}</option>`;
            });

            selectState.innerHTML = output;
        }).catch(err => {
            console.log(err);
        })
    });
}
