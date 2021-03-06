import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { getSmallImage } from '../util';

import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

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

    const getPlatformImages = (platform: string) => {
        switch (platform) {
            case 'PlayStation 4':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        }
    };

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt='star' key={i} src={starFull}></img>);
            } else {
                stars.push(<img alt='star' key={i} src={starEmpty}></img>);
            }
        }
        return stars;
    };

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
                                <div className='start'>{getStars()}</div>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data: any) => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatformImages(
                                                data.platform.name
                                            )}
                                            alt={data.platform.id}
                                        />
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
    @media (max-width: 1500px) {
        padding: 1rem 2rem;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
    @media (max-width: 1500px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        .rating {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
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
    @media (max-width: 1500px) {
        justify-content: space-between;
        img {
            margin: 0;
        }
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
    @media (max-width: 1500px) {
        margin: 2rem 0rem;
    }
`;

export default GameDetail;
