fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countires');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'InnerDiv'
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        const countryInfo = `
        <h3 class="h3">${country.name}</h3>
        <P class = "p">${country.capital}</p>
        <button onclick='displayCOuntryDetail("${country.name}")'> show Details </button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
        

    }

}

const displayCOuntryDetail = name =>{
        const url = `https://restcountries.com/v2/name/${name}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>renderCountryDetails(data[0]));
}

const renderCountryDetails = country =>{
    console.log(country);
    const countryDIv = document.getElementById("countryDetail");
    countryDIv.className= 'country_Information'
    countryDIv.innerHTML = `
    <h1">${country.name}</h1>
    <P>Capital : ${country.capital}</p>
    <P>Currencies : ${country.currencies[0].name}</p>
    <P>population : ${country.population}</p>
    <P>Area : ${country.area}</p>
    <img src="${country.flags.png}">

    `
}


