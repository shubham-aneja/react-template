import React from 'react'
import {isImmutable, Iterable} from 'immutable'

const toJS = (Component)=>(props)=> {
    let jsProps = Object.entries(props).reduce(
        (allPropsObj, newPropArray )=> {
            let value = newPropArray[1];
            let key = newPropArray[0];
            const isIterable = Iterable.isIterable(value);
            value =  isIterable ? value.toJS() : value;
            allPropsObj[key] = value
            return allPropsObj;
        },
        {});

    return <Component {...jsProps} />
};

export default toJS