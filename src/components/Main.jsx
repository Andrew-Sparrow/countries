import React from 'react';
import styled from 'styled-components';
import {Container} from './Container';

const Wrapper = styled.main`
  padding: 2rem;

  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`;


function Main({children}) {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

export {Main};