import axios from 'axios';
import { stringify } from 'querystring';


// Note: i deleted the headers of authentication 
export class HttpClient {
    static async getByFilter(url: string, query?: any, authToken?: string) {        
        return (await axios.get(`${url}/?${stringify(query)}`)).data;
    }

    static async getById(url: string, id: string, authToken?: string) {
        return (await axios.get(`${url}/${id}`)).data;
    }

    static async post(url: string, body: Object, authToken?: string) {
        return (await axios.post(`${url}/`, body)).data;
    }

    static async delete(url: string) {
        return (await axios.delete(url)).data;
    }

    static async deleteById(url: string, id: string, authToken?: string) {
        return (await axios.delete(`${url}/${id}`)).data;
    }

    static async put(url: string, body: Object, authToken?: string) {
        return (await axios.put(url, body)).data;
    }

    static async putById(url: string, id: string, body: Object, authToken?: string) {
        return (await axios.put(`${url}/${id}`, body)).data;
    }

    static async head(url: string, id: string, authToken?: string) {
        return (await axios.head(`${url}/${id}`)).data;
    }
}
