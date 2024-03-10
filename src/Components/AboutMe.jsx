import photoYassine from '../assets/photo-yassine.jpeg'

export function AboutMe(){
    return <>
        <div className="flex flex-col justify-center gap-5 mt-5 mb-16 mx-7 md:flex-row md:gap-9 md:mt-16 md:mb-32 font-robotoRegular">
            <div className="flex justify-center items-center ellip">
                <img src={photoYassine}
                     alt="image avec le logo YN"
                     className="h-1/3 w-1/3 md:h-auto md:w-auto rounded-full mt-4 hover:animate-spin"
                     style={{}}
                />
            </div>
            <div className="flex items-center">
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