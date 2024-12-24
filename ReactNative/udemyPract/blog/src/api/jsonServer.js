import axios from 'axios';

export default axios.create({
    baseURL: 'server link changes each time its booted'
})