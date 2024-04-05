document.querySelector("#subscribe").addEventListener("click", function(){
    if(this.checked){
        document.querySelector("#emailDiv").style.display = "block";
    }
    else{
        document.querySelector("#emailDiv").style.display = "none";
    }
});

document.querySelector("body").addEventListener("click", function(){
    alert(new Date);
});

document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log(address)
    if(this.clicked){
        let address = document.getElementById("bill").value;
        document.getElementById("home").value = address;
    }
    else{
        document.getElementById("home").value  = "";
    }
})


