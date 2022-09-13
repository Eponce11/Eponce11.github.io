


function openFullView (imgLink){

    document.getElementById("full-image").src = imgLink;
    document.getElementById("full-image-view").style.display = "flex"
}

function closeFullView (){
    document.getElementById("full-image-view").style.display = "none"
}
