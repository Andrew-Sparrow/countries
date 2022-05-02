import {useState, useEffect} from 'react';

import styled from 'styled-components';

import {Container} from './Container';

import {IoMoonOutline, IoMoon} from "react-icons/io5";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.a.attrs({
  href: '/',
})``;

const ModeSwitcher = styled.div`
  cursor: pointer
`;

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light' )
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where in the world ?</Title>
          <ModeSwitcher onClick={toggleThemeHandler}>
            {theme === 'dark' ?
              (<IoMoonOutline style={{color: '#fff'}} > Dark Mode</IoMoonOutline>)
              : (<IoMoon > Light Mode</IoMoon>)
            }
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  )
};
