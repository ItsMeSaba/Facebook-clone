import { ADD_USER } from './actionTypes';

export let addUser = user => ({
    type : ADD_USER,
    user
})