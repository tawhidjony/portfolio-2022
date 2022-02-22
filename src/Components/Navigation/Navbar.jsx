import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [theme, toggleTheme ] = useState(localStorage.getItem('theme') || 'light')
    const ToggleTheme = () => {
        if(theme === 'dark'){
          localStorage.setItem("theme", "light")
        }else{
          localStorage.setItem("theme", "dark")
        }
    }
    let themeColorSwitchIcon = theme === 'dark' ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="sunny-outline"></ion-icon>
  return (
    <Navigation>
        <Logo>
            <h3>Tawhidjony</h3>
        </Logo>
        <NavMenu>
            <ul>
                <li>
                    <Button as={Link} to="/"><ion-icon className="icon" name="home-outline"></ion-icon><span>Home</span></Button>
                </li>
                <li>
                    <Button as={Link} to="/resume"><ion-icon className="icon" name="document-text-outline"></ion-icon><span>Resume</span></Button>
                </li>
                <li>
                    <Button as={Link} to="/project"><ion-icon className="icon" name="briefcase-outline"></ion-icon><span>Project</span></Button>
                </li>
                <li>
                    <Button as={Link} to="/about"><ion-icon className="icon" name="information-circle-outline"></ion-icon><span>About</span></Button>
                </li>
                <li>
                    <Button as={Link} to="/contact"><ion-icon className="icon" name="chatbox-outline"></ion-icon><span>Contact</span></Button>
                </li>
            </ul>
        </NavMenu>
        <Settings>
            <ul>
                <li>
                    <button type='button' onClick={ToggleTheme} >{themeColorSwitchIcon}</button>
                </li>
                <li>
                    <button type='button' ><ion-icon name="settings-outline"></ion-icon></button>
                </li>
            </ul>
        </Settings>
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-bottom: 2rem;
    overflow: hidden;
    padding: 0px 20px;
    margin-top: 1rem;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
    width: 100%;
    h3{
        font-size: 2rem;
        font-style: italic;
        font-family: ${props => props.theme.NeonDerThaw};
        color: ${props => props.theme.primary};
    }

`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
    }
`
const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    color: ${props => props.theme.primary};
    transition: all 0.5s ease;
    margin: 0 8px;
    font-size: 1.2rem;
    border: 1px solid${props => props.theme.primary};
    ion-icon.md.hydrated {
        font-size: 1rem;
    }
    & span {
        margin-left: 8px;
        font-size: 1rem;
    }
    &:hover {
        color: ${props => props.theme.text};

    }
`
const Settings = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        li {
            button {
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                border-radius: 5px;
                color: ${props => props.theme.primary};
                transition: all 0.5s ease;
                margin: 0 8px;
                font-size: 1.2rem;
                border: 1px solid ${props => props.theme.primary};
                ion-icon.md.hydrated {
                    font-size: 1rem;
                }
                &:hover {
                    color: ${props => props.theme.text};
                }
            }
        }
    }
`