import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (e: any) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e: any) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };

    const clearSearched = () => {
        dispatch({ type: 'CLEAR_SEARCH' });
    };

    return (
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo onClick={clearSearched}>
                <img src={logo} alt='nav logo' />
                <h1>Ignite</h1>
            </Logo>
            <form className='search'>
                <input onChange={inputHandler} value={textInput} type='text' />
                <button onClick={submitSearch} type='submit'>
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        outline: none;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
    @media (max-width: 1500px) {
        input {
            width: 100%;
        }
        button {
            width: 100%;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        }
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
    }
`;

export default Nav;
