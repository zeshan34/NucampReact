import  {createStore, combineReducers } from 'redux';
import {Campsites} from './campsites';
import {Comments} from './comments'
import {Partners} from './partners';
import {Promotions} from './promotions';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            compsites:CAMPSITES,
            comments:COMMENTS,
            partners:PARTNERS,
            promotions:PROMOTIONS

        })
    );
       
    return store;
} 