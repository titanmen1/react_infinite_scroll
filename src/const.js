import {accessKey} from './config'

export const apiRoot = "https://api.unsplash.com";
export const count = 10;
export const apiEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`;