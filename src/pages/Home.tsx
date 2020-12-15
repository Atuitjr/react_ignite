/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import GameDetail from '../components/GameDetail';

import Game from '../components/Game';

import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { fadeIn } from '../animations';

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //get data from store
    const { popular, upcoming, newGames, searched } = useSelector(
        (state: any) => state.games
    );

    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
                {searched.length > 0 && <h2>Searched Games</h2>}
                {searched.length > 0 && (
                    <Games>
                        {searched.map((game: any) => (
                            <Game game={game} key={`${game.slug}${game.id}`} />
                        ))}
                    </Games>
                )}

                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game: any) => (
                        <Game game={game} key={`${game.slug}${game.id}`} />
                    ))}
                </Games>

                <h2>New Games</h2>
                <Games>
                    {newGames.map((game: any) => (
                        <Game game={game} key={`${game.slug}${game.id}`} />
                    ))}
                </Games>

                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map((game: any) => (
                        <Game game={game} key={`${game.slug}${game.id}`} />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
    @media (max-width: 1500px) {
        h2 {
            font-size: 2rem;
        }
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
