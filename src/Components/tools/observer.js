export const observer = new IntersectionObserver((entries)=>{
        for (let entry of entries){
            if (entry.isIntersecting){
                entry.target.classList.add('appear')
            }
        }
    })



