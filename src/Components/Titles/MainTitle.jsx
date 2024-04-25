// eslint-disable-next-line react/prop-types
import {useEffect} from "react";
import {observer} from "../tools/observer.js";

export function MainTitle({title, anchor}) {

     useEffect(()=>{
        document.querySelectorAll('.appearFromTop, .appearFromRight, .appearFromBottom, .appearFromLeft')
            .forEach((t)=>{
                observer.observe(t)
            })
        },[])

    return <div className="appearFromRight text-center font-designer pt-5 pb-2 md:text-start lg:mb-8 lg:mt-8 flex flex-row justify-center text-textColor-navbar bg-clip-text bg-gradient-to-br to-blue-900 from-gray-500"
                id={anchor}>
        <h1 className="font-bold lg:text-3xl text-2xl"> {title} </h1>
    </div>
}