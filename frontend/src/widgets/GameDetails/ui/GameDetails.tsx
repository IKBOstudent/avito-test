import { Link, useParams } from 'react-router-dom';
import { Button, Text, Link as LinkGravity } from '@gravity-ui/uikit';
import { ChevronLeft } from '@gravity-ui/icons';

import { getDate } from '@/shared/lib';
import { useGetGameByIdQuery } from '@/entities/game';
import { ScreensCarousel } from '@/features/ScreensCarousel';

import styles from './GameDetails.module.scss';

export const GameDetails = () => {
    const { id } = useParams<{ id: string }>();
    const {
        data = null,
        isFetching,
        error,
    } = useGetGameByIdQuery(id || '0', {
        skip: !id,
    });

    const isNotFound = !id || (!isFetching && !data);

    if (isNotFound) {
        return (
            <div>
                Game not found, go to <Link to="/">home page</Link>
            </div>
        );
    }

    if (error) return null;
    if (!data) return null;

    const {
        title,
        release_date,
        publisher,
        developer,
        genre,
        platform,
        thumbnail,
        description,
        short_description,
        game_url,
        screenshots,
    } = data;

    const info = [
        {
            name: 'Release Date',
            value: getDate(release_date),
        },
        { name: 'Publisher', value: publisher },
        { name: 'Developer', value: developer },
    ];

    return (
        <div className={styles.root}>
            <Link to="/">
                <LinkGravity view="secondary" className={styles.returnButton}>
                    <ChevronLeft />
                    Home
                </LinkGravity>
            </Link>

            <div className={styles.title}>
                <Text variant="display-3">{title}</Text>
            </div>

            <div className={styles.main}>
                <section className={styles.about}>
                    <ScreensCarousel screenshots={screenshots} />

                    <div className={styles.short_desc}>
                        <Text variant="body-3">{short_description}</Text>
                    </div>

                    <div className={styles.game_info}>
                        <div className={styles.game_infoGroup}>
                            <Text variant="subheader-1">Genre</Text>
                            <Text variant="subheader-2">{genre}</Text>
                        </div>
                        <div className={styles.game_infoGroup}>
                            <Text variant="subheader-1">Platform</Text>
                            <Text variant="subheader-2">{platform}</Text>
                        </div>
                    </div>

                    <div className={styles.desc}>
                        <Text variant="header-2">ABOUT THIS GAME</Text>
                        <Text variant="body-2">{description}</Text>
                    </div>
                </section>
                <aside className={styles.aside}>
                    <img src={thumbnail} alt="preview" />

                    <Link to={game_url} target="_blank">
                        <Button size="xl">Играть</Button>
                    </Link>

                    <ul>
                        {info.map(item => (
                            <li key={item.name}>
                                <Text variant="body-1">{item.name}</Text>
                                <Text variant="body-2">{item.value}</Text>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};
