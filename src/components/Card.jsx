import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;


function Card({img, name, info = [], onClick}) {
  return (
    <Wrapper onClick={onClick}>
      <CardImage />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((element) => {
              return (
                <CardListItem key={element.title}>
                  <b>{element.title}:</b>{element.description}
                </CardListItem>
              );
            }
          )}
        </CardList>
      </CardBody>
    </Wrapper>
  );
}

export default Card;