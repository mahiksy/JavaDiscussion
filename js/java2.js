document.querySelector("#sameAddress").addEventListener("click", function(){
    let address = document.getElementById("bill");
    let home = document.querySelector("#home")
    if(this.clicked){
        home.value = address.value
        home.disabled = true;
    }
    else{
        home.value = "";
        home.disabled = false;
    }
})