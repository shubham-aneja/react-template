import { push} from 'react-router-redux'
import Types from './types.js'

export const pushPath = (pathname)=> {
    return push({pathname});
};