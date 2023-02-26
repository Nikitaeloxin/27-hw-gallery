import React, {useEffect, useState} from 'react';
import style from '../css/bottom-around.module.css'

const Picture = ({picture,pos,setParentState,setParentItemPos}) => {
    const [state,setState] = useState(false)
        let styles='col-4 p-1';
    // useEffect(()=>{
    // //     if(state){
    // //         styles='col-12 p-1';
    // //     } else {
    // //         styles='col-4 p-1';
    // //     }
    // // })
    const func1 = ()=>{
        const buffState = !state;
        setState(buffState)
        setParentState(buffState)
        setParentItemPos(pos)
    }
    return state?<img onClick={()=>func1()} className='col-12 p-1' src={picture} alt="friend"/>:
        <img onClick={()=>func1()} className='col-4 p-1' src={picture} alt="friend"/>;



};

export default Picture;