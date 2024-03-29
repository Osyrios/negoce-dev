// eslint-disable-next-line react/prop-types
import {useInView} from "react-intersection-observer";

export function SectionTitle({title, anchor}) {

    const { ref, inView, entry } = useInView({
        threshold: 0.2,
        onChange: (inView, entry) => {
            if (inView){
                entry.target.classList.add('reveal-visible')
            }
         },
      });


    return <>
        <div id={anchor} className=" md:mb-32"></div>
        <h2 ref={ref} className="reveal-x mt-5 py-2 shadow-xl shadow-gray-900 mx-5 ps-4 text-lg rounded-xl font-bold font-designer text-white bg-gradient-to-r from-blue-900 to-gray-400 md:rounded-3xl md:text-2xl md:ps-10 md:my-8 md:py-2 lg:py-4">
            {title}
        </h2>
    </>
}