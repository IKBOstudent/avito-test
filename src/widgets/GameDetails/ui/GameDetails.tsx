import { Link } from 'react-router-dom';
import { Button } from '@gravity-ui/uikit';

import { getDate } from '@/shared/lib';
import { GameDetailsSkeleton } from './skeleton/GameDetailsSkeleton';
import styles from './GameDetails.module.scss';

interface IGameDetailsProps {
    loading: boolean;
    game: IGame;
}

export const GameDetails = ({ loading, game }: IGameDetailsProps) => {
    const {
        // id,
        title,
        release_date,
        publisher,
        developer,
        genre,
        platform,
        // thumbnail,
        description,
        short_description,
        game_url,
        screenshots,
    } = game;

    if (loading) return <GameDetailsSkeleton />;

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Link to="/">Return to home page</Link>

                <h1>{title}</h1>
            </div>
            <section className={styles.main}>
                <div className={styles.info}>
                    <div>
                        <div className={styles.image_carousel}>
                            <img src={screenshots[0].image} alt="Screen" />
                        </div>
                        <div className={styles.screenshots}>
                            {screenshots.map(item => (
                                <img
                                    height={40}
                                    width={80}
                                    key={item.id}
                                    src={item.image}
                                    alt="Screen"
                                />
                            ))}
                        </div>

                        <div className={styles.details}>
                            <p>{short_description}</p>
                        </div>

                        <div className={styles.game_info}>
                            <div>
                                <small>Genre</small>
                                <h3>{genre}</h3>
                            </div>
                            <div>
                                <small>Platform</small>
                                <h3>{platform}</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.about}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <aside>
                    <Link to={game_url} target="_blank">
                        <Button size="xl">Играть</Button>
                    </Link>
                    <ul>
                        <li>
                            <h5>Release Date</h5>
                            <span>{getDate(release_date)}</span>
                        </li>
                        <li>
                            <h5>Publisher</h5>
                            <span>{publisher}</span>
                        </li>
                        <li>
                            <h5>Developer</h5>
                            <span>{developer}</span>
                        </li>
                    </ul>
                </aside>
            </section>
        </div>
    );
};
