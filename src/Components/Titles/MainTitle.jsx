export function MainTitle({title, anchor}) {
    return <div className="text-center font-designer py-5 md:text-start lg:mb-16 lg:mt-8 flex flex-row justify-center text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-gray-500"
                id={anchor}>
        <h1 className="font-bold lg:text-3xl text-2xl"> {title} </h1>
    </div>
}