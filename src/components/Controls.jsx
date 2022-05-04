import {useState, useEffect} from 'react';
import {Search} from './Search';
import { CustomeSelect } from "./CustomSelect";

const Controls = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Search search={search} setSearch={setSearch} />
    </>
  )
};

export {Controls};
