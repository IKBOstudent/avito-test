import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Button, Text, Link as LinkGravity } from '@gravity-ui/uikit';
import { ChevronLeft } from '@gravity-ui/icons';
import { getDate } from '@/shared/lib';
import { ScreensCarousel } from '@/features/ScreensCarousel';
import { useGetGame } from '../lib/useGetGame';

import { GameDetailsSkeleton } from './skeleton/GameDetailsSkeleton';

import styles from './GameDetails.module.scss';

const GameNotFound = () => {
    return (
        <div className={styles.messageRoot}>
            <Link to="/">
                <LinkGravity view="secondary" className={styles.returnButton}>
                    <ChevronLeft />
                    Home
                </LinkGravity>
            </Link>
            <Text variant="display-1" className={styles.message}>
                Game not found :(
            </Text>
        </div>
    );
};

const GameError = () => {
    return (
        <div className={styles.messageRoot}>
            <Text variant="display-1" className={styles.message}>
                Something went wrong! Try again later
            </Text>
        </div>
    );
};

export const GameDetails = () => {
    const { data, isFetching, error } = useGetGame();

    const isMobile = useMediaQuery({ maxWidth: 600 });

    if (!data) {
        if (isFetching) return <GameDetailsSkeleton isMobile={isMobile} />;
        return <GameNotFound />;
    }

    if (error) {
        return <GameError />;
    }
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
        minimum_system_requirements,
        // graphics
        // memory
        // os
        // processor
        // storage
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
                    <ScreensCarousel
                        screenshots={screenshots}
                        loading={false}
                        isMobile={isMobile}
                    />

                    <div>
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

                    <div className={styles.requirements}>
                        <Text variant="body-2">
                            Minimum system requirements
                        </Text>
                        <div className={styles.requirements_info}>
                            {(
                                Object.keys(
                                    minimum_system_requirements
                                ) as Array<
                                    keyof typeof minimum_system_requirements
                                >
                            ).map(name => (
                                <div className={styles.game_infoGroup}>
                                    <Text variant="subheader-1">
                                        {name.toUpperCase()}
                                    </Text>
                                    <Text variant="subheader-1">
                                        {minimum_system_requirements[name]}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <aside className={styles.aside}>
                    <img src={thumbnail} alt="preview" />

                    <div className={styles.aside_info}>
                        <Link to={game_url} target="_blank">
                            <Button size="xl">Play now</Button>
                        </Link>

                        <ul>
                            {info.map(item => (
                                <li key={item.name}>
                                    <Text variant="body-2">{item.name}</Text>
                                    <Text variant="subheader-2">
                                        {item.value}
                                    </Text>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};
