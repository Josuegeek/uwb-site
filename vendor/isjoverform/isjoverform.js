var isjforms = document.querySelectorAll(".isjoverform");
var isjforms2 = document.querySelectorAll(".isjoverform2");

for(let i=0; i<isjforms.length;i++){
    isjforms[i].addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target==isjforms[i]){
            closeIsjForm(i);
        }
    });
}

function showIsjForm(form){
    isjforms[form].classList.remove("isjform-hide");
    isjforms[form].classList.add("isjform-show");
}

function showIsjForm2(form,e){
    isjforms2[form].classList.remove("isjform-hide");
    isjforms2[form].classList.add("isjform-show");
    document.getElementById("act").value=e;

    if(e=="prof"){
        document.getElementById("connexion-txt").innerHTML="Êtes-vous Professeur ?";
    }
    else{
        document.getElementById("connexion-txt").innerHTML="Êtes-vous Etudiant ?"
    }
}

function closeIsjForm(form){
    isjforms[form].classList.add("isjform-hide");
}

function closeIsjForm2(form){
    isjforms2[form].classList.add("isjform-hide");
}