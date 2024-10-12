import { Meteor } from 'meteor/meteor';
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
    retries: 3, // Number of retries (Defaults to 3)
    retryDelay: axiosRetry.exponentialDelay,
});

async function getDataFromAPI(url) {
    try {
        const response = await axios.post(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:

const methods = {

    getData: async function () {
        const apiUrl = 'https://api.example.com/data';
        const data = await getDataFromAPI(apiUrl)
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        return data;
    }
};
Meteor.methods(methods);