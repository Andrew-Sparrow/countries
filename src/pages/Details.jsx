import React from 'react';
import { useParams } from "react-router-dom";

function Details(props) {
  let params = useParams();

  return (
    <div>
      Details {`${params.name}`}
    </div>
  );
}

export { Details };
