let modebtn = document.querySelector("#mode");
let currMode = "light";

modebtn.addEventListener("click", () => {
    if(currMode === "light"){
        document.body.style.backgroundColor = "#282c34";
        // document.querySelector("body").style.backgroundColor = "black";
        document.body.style.color = "white";
        currMode = "dark";
    }else{
        document.body.style.backgroundColor = "white";
        // document.querySelector("body").style.backgroundColor = "white";
        document.body.style.color = "black";
        currMode = "light";
    }
})
