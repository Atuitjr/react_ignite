import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/gameDetailAction';

import { Link } from 'react-router-dom';

const Game = ({ game }: any) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(game.id));
    };

    return (
        <StyledGame onClick={() => loadDetailHandler()}>
            <Link to={`/games/${game.id}`}>
                <h3>{game.name}</h3>
                <p>{game.released}</p>
                <img src={game.background_image} alt={game.name} />
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
