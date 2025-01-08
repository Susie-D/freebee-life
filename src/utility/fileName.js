const IMG_URL = import.meta.env.VITE_IMG_URL;


export function getFileName(filePath) {
    if (filePath) {
        let fileName = filePath.split('/').splice(1, 2).join('/');
        return IMG_URL + '/' + fileName;
    }
}
