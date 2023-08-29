import { z } from 'zod';

const envVariables = z.object({
    VITE_API_URI: z.string().url(),
});

envVariables.parse(import.meta.env);

export const config = {
    API_URI: import.meta.env.VITE_API_URI as string,
} as const;
