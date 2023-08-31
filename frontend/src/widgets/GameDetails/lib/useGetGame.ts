import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { type IGame, useGetGameByIdQuery } from '@/entities/game';

// 5 minutes
const EXPIRATION_TIME = 5 * 60 * 1000;

export const useGetGame = () => {
    const { id } = useParams();

    const [storageData] = useState<IGame | null>(() => {
        const saved = localStorage.getItem(`page/${id}`);
        if (!saved) return null;

        const parsed: { value: IGame; expiry: number } = JSON.parse(saved);

        if (parsed.expiry < new Date().getTime()) {
            // remove page info
            localStorage.removeItem(`page/${id}`);
            return null;
        }
        return parsed.value;
    });

    const {
        data: fetchedData = null,
        isFetching,
        error,
    } = useGetGameByIdQuery(id || '0', {
        skip: !id || !!storageData,
    });

    useEffect(() => {
        if (id && fetchedData) {
            localStorage.setItem(
                `page/${id}`,
                JSON.stringify({
                    value: fetchedData,
                    expiry: new Date().getTime() + EXPIRATION_TIME,
                })
            );
        }
    }, [id, fetchedData]);

    return { data: fetchedData || storageData, isFetching, error };
};
