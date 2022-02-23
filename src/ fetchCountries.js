const countriesBase = 'https://restcountries.com/v3.1/name/';
const countriesInfoFields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${countriesBase}${name}?${countriesInfoFields}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}


// export default function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
//         .then(response => {
//             return response.json();
//         })
// };

