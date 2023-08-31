import { useState } from 'react';
import { Button } from '@gravity-ui/uikit';
import { ChevronLeft, ChevronRight } from '@gravity-ui/icons';

import { IScreenshot } from '@/entities/game';
import { CarouselSkeleton } from './skeleton/CarouselSkeleton';

import styles from './ScreensCarousel.module.scss';

interface IScreensCarouselProps {
    screenshots: IScreenshot[];
    loading: boolean;
}

export const ScreensCarousel = ({
    screenshots,
    loading,
}: IScreensCarouselProps) => {
    const [selectedId, setSelectedId] = useState<number>(0);
    const [selectedPage, setSelectedPage] = useState<number>(0);

    if (loading) return <CarouselSkeleton />;

    if (screenshots.length === 0) return null;

    const handleSelect = (nextId: number) => {
        setSelectedId(nextId);
    };

    const handleDecreasePage = () => {
        setSelectedPage(prev => (prev > 0 ? prev - 1 : prev));
    };

    const handleIncreasePage = () => {
        setSelectedPage(prev =>
            prev < Math.ceil(screenshots.length / 3) - 1 ? prev + 1 : prev
        );
    };

    return (
        <div className={styles.root}>
            <div className={styles.carousel}>
                <ul
                    style={{
                        transform: `translateX(calc(-100% * ${selectedId} - 32px * ${selectedId}))`,
                    }}
                >
                    {screenshots.map((item, i) => (
                        <li key={i}>
                            <div>
                                <img src={item.image} alt="Screenshot" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.screens}>
                <Button
                    size="s"
                    disabled={selectedPage === 0}
                    onClick={handleDecreasePage}
                >
                    <ChevronLeft />
                </Button>
                <div
                    className={styles.screenWrapper}
                    style={{ maxWidth: 'calc(80px * 3 + 24px * 2)' }}
                >
                    <ul
                        style={{
                            transform: `translateX(calc(${selectedPage} * (-80px * 3 - 24px * 3)))`,
                        }}
                    >
                        {screenshots.map((item, i) => (
                            <li
                                key={item.id}
                                className={
                                    i === selectedId ? styles.active : ''
                                }
                                onClick={() => handleSelect(i)}
                            >
                                <img
                                    height={50}
                                    width={80}
                                    src={item.image}
                                    alt="Screenshot"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    size="s"
                    disabled={
                        selectedPage === Math.ceil(screenshots.length / 3) - 1
                    }
                    onClick={handleIncreasePage}
                >
                    <ChevronRight />
                </Button>
            </div>
        </div>
    );
};
