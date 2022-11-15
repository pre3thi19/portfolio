let menu=document.querySelector('.menu-icon'); 
menu.onclick = () => {
    menu.classList.toggle("move");
};

function validate() {
    let name=document.querySelector(".name");
    let email=document.querySelector(".email"); 
    let msg=document.querySelector(".message"); 
    let sendBtn=document.querySelector(".send-btn");  

    sendBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(name.value== "" || email.value == "" || msg.value == ""){
        emptyerror();
    }else{
        sendmail(name.value,email.value,msg.value); 
        success();
    }
});
} 
validate();  
function sendmail(name,email,msg) {
    emailjs.send("service_lbspkh5","template_cgsyq21",{
        from_name: email,
        to_name: name,
        message: msg,
        });
    
}
function emptyerror(){
    swal({
        title: "oh no...",
        text: "fileds cannot be empty",
        icon: "error",
        
      });
} 
function success(){
    swal({
        title: "email sent successfully",
        text: "we try to reply in 24 hours",
        icon: "success",
        
      });
}