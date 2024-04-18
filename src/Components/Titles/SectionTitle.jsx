// eslint-disable-next-line react/prop-types
import {useEffect} from "react";
import {observer} from "../tools/observer.js";

export function SectionTitle({title, anchor}) {

     useEffect(()=>{
        document.querySelectorAll('.appearFromTop, .appearFromRight, .appearFromBottom, .appearFromLeft')
            .forEach((t)=>{
                observer.observe(t)
            })
        },[])


    return <>
        <div id={anchor} className=" md:mb-32"></div>
        <h2 className="appearFromLeft mt-5 py-2 shadow-xl shadow-gray-900 mx-5 ps-4 text-lg rounded-xl font-bold font-designer text-white bg-titles-secondary md:rounded-3xl md:text-2xl md:ps-10 md:my-8 md:py-2 lg:py-4">
            {title}
        </h2>
    </>
}