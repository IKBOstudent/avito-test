export function getDate(date: string) {
    try {
        return new Intl.DateTimeFormat('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(new Date(date));
    } catch (e) {
        return '--.--.----';
    }
}
