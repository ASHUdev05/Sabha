import React, { useState, useEffect } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
const words = ["talk", "share feelings","share ideas","express thoughts","meet new people","make you feel good."];
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);


  return (
    <div className="app">
    <div className="toggle">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button className="button" onClick={() => themeToggler()}>{theme === "light" ? "☀️" : "🌙"}</button>
      </StyledApp>
    
      
        <div className="anim">
        <h1 style={ theme === "light" ? {color: 'black'} : {color: 'cyan'} }>
        A place to {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
      </div>
      </ThemeProvider>
    <div className="app">
      {/*<div className="app-header">
      <h3>Sabha</h3>
      </div>*/}

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
    </div>
    </div>
    </div>
  );
}

export default App;
