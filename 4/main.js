let popup = document.getElementsByClassName("popup"),
    close_popup = document.getElementsByClassName('popup_body');

document.getElementById("btn").onclick = () => {
    popup[0].style="display: block";
}


document.getElementById('close').onclick = () => {
    popup[0].style="display: none";
}

window.onclick = (e) => {
    if(e.target == close_popup[0]){
        popup[0].style = "display:none"
    }
}

