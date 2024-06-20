
import dotenv from 'dotenv';
dotenv.config();

const baseUrls:any = {
    local: "http://localhost:8080",
    test: "http://localhost:8080",
    development: "https://dev.lifecycles.io",
    qa: "https://qa.lifecycles.io",
    production :'https://portal.lifecycles.io',
    load:"https://load.lifecycles.io",
}

const env:any = process.env.NODE_ENV || 'development';

export const config = {
    BASE_URL: baseUrls[env],
    API_PREFIX: '/api/v1',
}