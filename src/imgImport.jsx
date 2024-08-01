
// Function so that the import of images is a little easier.
export const getImgSrc = (path) => {
    return new URL(`/Assets/${path}`, import.meta.url).href;
};