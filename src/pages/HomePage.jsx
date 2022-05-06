import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import {Card} from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

function HomePage({countries, setCountries}) {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  let navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => {
        return country.region.includes(region);
      })
    }

    if (search) {
      data = data.filter(
        (country) => country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  }

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).
        then(({data}) => setCountries(data));
    }
  }, []);

  return (
    <React.Fragment>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population.toLocaleString()
              },
              {
                title: 'Region',
                description: country.region
              },
              {
                title: 'Capital',
                description: country.capital
              }
            ]
          }
          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${country.name}`)}
            />
          )
        })}
      </List>
    </React.Fragment>
  );
}

export { HomePage };
