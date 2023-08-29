import { Link } from 'react-router-dom';

import { getDate } from '@/shared/lib';
import { GameCardSkeleton } from './skeleton/GameCardSkeleton';

import styles from './GameCard.module.scss';

interface IGameCardProps {
    item: IGame;
    loading: boolean;
}

export const GameCard = ({ item, loading }: IGameCardProps) => {
    const { id, title, release_date, publisher, genre, thumbnail } = item;
    if (loading) return <GameCardSkeleton />;

    return (
        <Link to={`/game/${id}`} className={styles.root}>
            <div className={styles.image}>
                <img src={thumbnail} alt={`Poster ${title}`} height={200} />
            </div>
            <div className={styles.info}>
                <div className={styles.info_header}>
                    <small>{publisher}</small>
                    <span>{getDate(release_date)}</span>
                </div>
                <h2>{title}</h2>
                <h5>{genre}</h5>
            </div>
        </Link>
    );
};
