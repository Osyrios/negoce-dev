import bootstrapLogo from '../../assets/technologies/bootstrap.png'
import cssLogo from '../../assets/technologies/css.png'
import djangoLogo from '../../assets/technologies/django.png'
import flaskLogo from '../../assets/technologies/flask.png'
import gitLogo from '../../assets/technologies/git.png'
import htmlLogo from '../../assets/technologies/html.png'
import jinja2Logo from '../../assets/technologies/jinja2.png'
import jsLogo from '../../assets/technologies/js.png'
import phpLogo from '../../assets/technologies/php.png'
import pythonLogo from '../../assets/technologies/python.png'
import reactjsLogo from '../../assets/technologies/reactjs.png'
import sqlLogo from '../../assets/technologies/sql.png'
import tailwindcssLogo from '../../assets/technologies/tailwindcss.png'
import vuejsLogo from '../../assets/technologies/vuejs.png'
import angular from '../../assets/technologies/angular.png'
import wordpress from '../../assets/technologies/wordpress.png'
import shopify from '../../assets/technologies/shopify.png'
import {useInView} from "react-intersection-observer";
export function Skills(){

    const { ref, inView, entry } = useInView({
        threshold: 0.3,
        onChange: (inView, entry) => {
            if (inView){
                entry.target.classList.add('reveal-visible')
            }
         },
      });


    const logoStyle = 'h-20 '

    return <div ref={ref} className="reveal mx-7 mt-6">
        <div className="pt-5 flex flex-col items-center">
            <h5 className="text-center font-designer my-2 p-4 w-9/12 text-sm md:text-base lg:text-lg xl:text-xl shadow-xl rounded-2xl text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-gray-400 mb-4">Technos
                pratiquées</h5>
            <div className="grid grid-cols-4 gap-3 place-items-center mb-5 pt-2">
                <img src={htmlLogo} alt="Logo HTML" className={logoStyle}/>
                <img src={cssLogo} alt="logo CSS" className={logoStyle}/>
                <img src={jsLogo} alt="Logo Javascript" className={logoStyle}/>
                <img src={phpLogo} alt="Logo PHP" className={logoStyle}/>
                <img src={pythonLogo} alt="Logo Python" className={logoStyle}/>
                <img src={sqlLogo} alt="Logo SQL" className={logoStyle}/>
                <img src={gitLogo} alt="Logo Git" className={logoStyle}/>
                <img src={flaskLogo} alt="Logo Flask" className={logoStyle}/>
                <img src={jinja2Logo} alt="Logo Jinja2" className={logoStyle + 'col-span-2'}/>
                <img src={bootstrapLogo} alt="Logo Bootstrap" className={logoStyle}/>
            </div>
        </div>
        <div className="pt-5 flex flex-col items-center">
            <h5 className="text-center font-designer my-2 p-4 w-9/12 text-sm md:text-base lg:text-lg xl:text-xl shadow-xl rounded-2xl text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-gray-400 mb-4">En
                cours d&apos;apprentissage</h5>
            <div className="grid grid-cols-2 gap-1 place-items-center mb-5 pt-2 ">
                <img src={reactjsLogo} alt="Logo ReactJs" className={logoStyle}/>
                <img src={tailwindcssLogo} alt="Logo TailwindCss" className={logoStyle}/>
            </div>
        </div>
        <div className="pt-5 flex flex-col items-center">
            <h5 className="text-center font-designer my-2 p-4 w-9/12 text-sm md:text-base lg:text-lg xl:text-xl shadow-xl rounded-2xl text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-gray-400 mb-4">Mes
                interets</h5>
            <div className="grid grid-cols-3 gap-1 place-items-center mb-5 pt-2">
                <img src={angular} alt="Logo AngularJS" className={logoStyle}/>
                <img src={djangoLogo} alt="Logo Django" className={logoStyle}/>
                <img src={vuejsLogo} alt="Logo VueJs" className={logoStyle}/>
                <img src={wordpress} alt="Logo Wordpress" className={logoStyle}/>
                <img src={shopify} alt="Logo Shopify" className={logoStyle}/>
            </div>
        </div>
    </div>
}