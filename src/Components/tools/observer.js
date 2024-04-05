

export const observer = new IntersectionObserver((entries)=>{
    for (let entry of entries){
        if (entry.isIntersecting){
            entry.target.classList.add('appearY')
            entry.target.classList.add('appearX')
        }
    }
})