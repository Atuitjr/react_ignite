import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { getSmallImage } from '../util';

const GameDetail = ({ pathId }: any) => {
    const history = useHistory();
    const exitDetailHandler = (e: any) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    };

    const { game, screenshots, isLoading } = useSelector(
        (state: any) => state.gameDetail
    );
    return (
        <>
            {!isLoading && (
                <CardShadow
                    className='shadow'
                    onClick={(e: any) => exitDetailHandler(e)}
                >
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className='rating'>
                                <motion.h3 layoutId={`h3${pathId}`}>
                                    {game.name}
                                </motion.h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data: any) => (
                                        <h3 key={data.platform.id}>
                                            {data.platform.name}
                                        </h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img
                                layoutId={`Image${pathId}`}
                                src={getSmallImage(game.background_image, 1280)}
                                alt={game.id}
                            />
                        </Media>
                        <Description>{game.description_raw}</Description>
                        <div className='gallery'>
                            {screenshots.results.map((screenshot: any) => (
                                <img
                                    src={getSmallImage(screenshot.image, 1280)}
                                    alt={screenshot.id}
                                    key={screenshot.id}
                                />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;
