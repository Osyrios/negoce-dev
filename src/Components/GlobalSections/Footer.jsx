import email from '../../assets/social/email.png'
import linkedin from '../../assets/social/linkedin.png'
import phone from '../../assets/social/phone.png'
import githubWhite from '../../assets/social/whiteGithub.png'
import {useEffect} from "react";
import {observer} from "../tools/observer.js";


export function Footer({anchor}){

    const socials = [
        {
            "name":"yassine.n13@gmail.com",
            "logo": email,
            "link":"mailto:yassine.n13@gmail.com",
            "blank": ""
        },
        {
            "name":"06.49.63.67.91",
            "logo": phone,
            "link":"tel:+33649636791",
            "blank": ""
        },
        {
            "name":"Linkedin",
            "logo": linkedin,
            "link":"https://fr.linkedin.com/in/yassine-n%C3%A9goce-78b14512b",
            "blank": "_blank"
        },
        {
            "name":"Github",
            "logo": githubWhite,
            "link":"https://github.com/Osyrios",
            "blank": "_blank"
        }
    ]

     useEffect(()=>{
        document.querySelectorAll('.appearFromTop, .appearFromRight, .appearFromBottom, .appearFromLeft')
            .forEach((t)=>{
                observer.observe(t)
            })
        },[])

    return <div className="bg-blue-900 shadow flex-col items-center" id={anchor}>
        <h1 className="appearFromLeft font-designer text-gray-400 text-center text-2xl py-4">Me contacter</h1>
        <div className="appearFromRight flex flex-col md:flex-row md:w-auto justify-center items-center m-auto pb-8 pt-2 ">
            {socials.map((social) =>
                <div key={social.name} className="md:w-2/6 flex flex-row flex-start md:flex-col items-center">
                    <a href={social.link ? social.link : "#"} target={social.blank} className="w-2/6 flex justify-end md:justify-center m-2 md:w-auto md:m-0">
                        <img src={social.logo} alt={social.name} className="w-1/6"/>
                    </a>
                    <p className="block">{social.name}</p>
                </div>
            )}
        </div>
    </div>
}