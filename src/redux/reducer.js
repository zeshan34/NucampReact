import { CAMPSITES } from '../shared/CAMPSITES';
import { COMMENTS } from '../shared/comments';
import{ PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const intialState =
{
    campsites : CAMPSITES,
    comments : COMMENTS,
    partners : PARTNERS,
    promotions :PROMOTIONS
};

export const Reducer =(state = initialState, action) => {
    return state;
};