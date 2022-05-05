const BASE_URL = 'https://restcountries.com/v2/';

const ALL_COUNTRIES = BASE_URL + 'all';

const SearchByCountry = (name) => {
  return BASE_URL + 'name/' + name;
};

const filterByCode = (codes) => {
  return BASE_URL + 'alfa?codes=' + codes.join(',');
}
