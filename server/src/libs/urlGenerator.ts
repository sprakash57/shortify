import Weburl from "../model/Weburl";

const ALPHANUMERIC: string = '0123456789abcdefghijklmnopqwrstuvwxyz';
const CODE_LENGTH: number = 8;
const TOTAL_ATTEMPTS = 10;

const generateCode = (): string => {
    let result = '';
    for (let i = 0; i < CODE_LENGTH; i++) {
        result += ALPHANUMERIC.charAt(Math.floor(Math.random() * ALPHANUMERIC.length));
    }
    return result;
}

const uniqueUrl = (): string => {
    let attempts = 0, code = '';
    while (!code && attempts <= TOTAL_ATTEMPTS) {
        code = generateCode();
        Weburl.findOne({ code }, (error, res) => {
            if (error) return generateCode();
            if (res) {
                attempts++;
                code = '';
            }
        });
    }
    return `https://pbid.io/${code}`;
}

export default uniqueUrl;