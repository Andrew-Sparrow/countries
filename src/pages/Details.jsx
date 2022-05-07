import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5'
import { SearchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

function Details(props) {
  let { name } = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(SearchByCountry(name))
      .then(({ data }) => {
        setCountry(data[0]);
      });
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && (<Info navigate={navigate} {...country}></Info>)}
    </div>
  );
}

export { Details };
