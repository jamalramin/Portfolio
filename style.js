function show (){
    document.getElementById('menu-bar').style.display = "flex";
}


function sendMail(){
    document.getElementById('button').value = "Send";
    var params = {
        name : document.getElementById("name").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_9caae1v" , "template_oi9aclt" , params).then(function (res){
    })
}


function hide (){
    document.getElementById("menu-bar").style.display = "none";
}


function clo(){
    document.getElementById("menu-bar").style.display = "none";
}


function openPopup(){
    var popup = document.getElementById("popup");
    
    popup.classList.add('openPopup');
} 

function closePopup(){
    var popup = document.getElementById("popup");
    popup.classList.remove('openPopup');
} 