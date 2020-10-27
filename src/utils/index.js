export const isDev = () => {
    const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    return development;
}