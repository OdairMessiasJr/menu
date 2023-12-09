const btnAbrir = document.getElementById("menu-mob");

btnAbrir.addEventListener("click", function(){
    const mobile = document.getElementById("menu-mobile");

    if(mobile.classList.contains("open")){
        mobile.classList.remove("open");
    }else{
        mobile.classList.add("open");
    }
})