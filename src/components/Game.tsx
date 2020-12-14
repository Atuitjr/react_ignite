import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/gameDetailAction';

import { Link } from 'react-router-dom';
import { getSmallImage } from '../util';

import { popIn } from '../animations';

const Game = ({ game }: any) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(game.id));
    };
    return (
        <StyledGame
            layoutId={game.id.toString()}
            onClick={() => loadDetailHandler()}
            variants={popIn}
            initial='hidden'
            animate='show'
        >
            <Link to={`/games/${game.id}`}>
                <motion.h3 layoutId={`h3${game.id.toString()}`}>
                    {game.name}
                </motion.h3>
                <p>{game.released}</p>
                <motion.img
                    layoutId={`Image${game.id.toString()}`}
                    src={getSmallImage(game.background_image, 640)}
                    alt={game.name}
                />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
