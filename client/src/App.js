import React, { useState } from 'react'
import {ThemeProvider , styled} from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom"
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar/Navbar';

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
  const [user , setUser] = useState(true)
  return (
    <div>
        <ThemeProvider theme={ lightTheme }>
            <BrowserRouter>
            {user ? (
              <Container>
                <Navbar/>
              </Container>
            ) : (
              <Container>
                 <Authentication />
            </Container>
            )
            }
            </BrowserRouter>
        </ThemeProvider>
    </div>
  )
}

export default App
