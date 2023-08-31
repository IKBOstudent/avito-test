import { Link } from 'react-router-dom';
import { Text } from '@gravity-ui/uikit';

import { getDate } from '@/shared/lib';
import { type IGame } from '@/entities/game';
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
                <img src={thumbnail} alt={`Poster ${title}`} />
            </div>
            <div className={styles.info}>
                <div className={styles.info_main}>
                    <Text variant="header-1">{title}</Text>
                    <Text variant="body-2">{genre}</Text>
                </div>

                <div className={styles.info_publish}>
                    <Text ellipsis variant="body-1">
                        {publisher}
                    </Text>
                    <Text variant="caption-2" whiteSpace="nowrap">
                        {getDate(release_date)}
                    </Text>
                </div>
            </div>
        </Link>
    );
};
