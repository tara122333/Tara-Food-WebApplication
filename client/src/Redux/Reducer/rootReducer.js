import {combineReducers} from 'redux';

import restaurant from './restaurant/restaurant.reducer';
import user from './User/user.reducer';

const rootReducer = combineReducers({restaurant,user});

export default rootReducer;