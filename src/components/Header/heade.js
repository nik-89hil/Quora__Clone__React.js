

export function addActive(){
    let option = document.querySelectorAll(".checkActive")
    // console.log(option);


    for(let i=0; i<option.length;i++){
        option[i].onclick = function (){
            for(let j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active");

        }
    }
}

addActive();