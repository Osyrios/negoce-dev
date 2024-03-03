import logoWhite from '../assets/logo/logoWhite.png'

export function AboutMe(){
    return <>
        <div className="flex flex-row gap-9 mt-16 mb-40">
            <div className="flex justify-center items-center ellip">
                <img src={logoWhite}
                     alt="image avec le logo YN"
                     className={"rounded-full w-auto h-auto"}
                     style={{clipPath: 'ellipse(30% 50%)'}}
                />
            </div>
            <div>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id euismod nisl.
                    Etiam tristique nec purus vel imperdiet. Maecenas imperdiet placerat ante, eget laoreet neque suscipit quis.
                    Nullam nec lectus augue. Vivamus sagittis, lectus nec cursus tristique, libero magna mattis sem, in convallis
                    nibh urna vitae nibh. Nunc lacinia enim nunc, hendrerit tincidunt justo posuere ut.<br/>

                    Proin nulla lacus, porta non turpis in, sollicitudin consectetur sapien. Donec luctus tortor nunc.
                    Integer condimentum lectus ut lectus rhoncus, ut viverra velit condimentum. Duis et dolor a elit mollis
                    mollis at scelerisque elit. Suspendisse vitae erat efficitur, bibendum massa nec, posuere turpis.
                    Nullam fermentum accumsan sagittis.
                </p>
            </div>
        </div>

    </>
}