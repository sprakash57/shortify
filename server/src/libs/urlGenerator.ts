import Weburl from "../model/Weburl";

const ALPHANUMERIC: string = '0123456789abcdefghijklmnopqwrstuvwxyz';
const URL_LENGTH: number = 8;
const TOTAL_ATTEMPTS = 10;

const urlGenerator = (): string => {
    let result = '';
    for (let i = 0; i < URL_LENGTH; i++) {
        result += ALPHANUMERIC.charAt(Math.floor(Math.random() * ALPHANUMERIC.length));
    }
    return result;
}

const uniqueUrl = (): string => {
    let attempts = 0, url = '';
    while (!url && attempts <= TOTAL_ATTEMPTS) {
        url = urlGenerator();
        Weburl.findOne({ url }, (error, res) => {
            if (error) return urlGenerator();
            if (res) {
                attempts++;
                url = '';
            }
        });
    }
    return url;
}

export default uniqueUrl;