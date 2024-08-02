import React from 'react'
import {ThemeProvider , styled} from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom"
import Authentication from './pages/Authentication';

const Container = styled.div`
    width: 100%;
    height :100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.gb };
    color: ${({ theme }) => theme.text_primary };
    overflow-x : hidden;
    overflow-y: hidden;
    transition: all 0.2s ease;
`;

function App() {
  return (
    <div>
        <ThemeProvider theme={ lightTheme }>
            <BrowserRouter>
            <Container>
                 <Authentication />
            </Container>
            </BrowserRouter>
        </ThemeProvider>
    </div>
  )
}

export default App
