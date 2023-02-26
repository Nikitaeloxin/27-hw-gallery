import React, {useState} from 'react';
import {pictures} from "../utils/constants";
import Picture from "./Picture";

const Gallery = () => {
    const [state,setState] = useState(false);
    const [itemPos,setItemPos] = useState(-1);

    const drawAll = () =>{
      return(  <section className="float-md-none w-50 row border mx-auto mt-auto">
            {pictures.map((p,i)=><Picture key={i} picture={p} pos={i} setParentState={setState} setParentItemPos={setItemPos} />)}
        </section>
      )
    }
    const drawItem = ()=>{
        return(
            <section className="float-md-none w-50 row border mx-auto mt-auto">
                <Picture key={itemPos} picture={pictures[itemPos]} pos={itemPos} setParentState={setState} setParentItemPos={setItemPos}/>
            </section>
        )
    }
    return state?drawItem():drawAll()
};

export default Gallery;