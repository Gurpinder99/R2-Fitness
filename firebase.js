
let nameerr = document.getElementById('nameerr');
let phoneerr = document.getElementById('phoneerr');
let emailerr = document.getElementById('emailerr');
let msgerr = document.getElementById('msgerr');
function validname(){
  
let name = document.getElementById('name').value;







if(name.length == 0){
nameerr.innerHTML = "name required";
nameerr.style.display="block";

return false;

}

else{nameerr.style.display="none";
return true;
}





}

function validpho(){
  
    let phoneno = document.getElementById('phoneno').value;
    
    
    if(isNaN(phoneno) ){
        phoneerr.innerHTML = "Digits Only";
        phoneerr.style.display="block";
        return false;
        
        }
       


    if(phoneno.length !== 10){
    phoneerr.innerHTML = "Phone Number Must Be 10 digitis Long";
    phoneerr.style.display="block";
    return false;
  
    }

    else{ phoneerr.style.display = 'none'
return true;
}


        
    }
    function validemail(){
  
        let email = document.getElementById('email').value;


       
    
        if(!email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,3}$/)))
        {
        emailerr.innerHTML = "Please Enter Valid Email";
        emailerr.style.display="block";
        return false;
        }
    
        else{ emailerr.style.display = 'none';return true;}
        
        }
    

        function validmsg(){
  
            let msg = document.getElementById('msg').value;
    
    
            if(msg.length < 15)
            {
            msgerr.innerHTML = "Messege must be more then 15 charcter Long";
            msgerr.style.display="block";return false;
         
            }
        
            else{ msgerr.style.display = 'none';return true;}
        
       
            }
        
            document.getElementById("submit").addEventListener("click", (e) => {

e.preventDefault();


let name = document.getElementById('name').value;
  let phoneno = document.getElementById('phoneno').value;
  let email = document.getElementById('email').value;
  let msg = document.getElementById('msg').value;

  let body = "Name:" + name + "<br> Email:" + email + "<br> contact No.:" + phoneno + "<br> Message:" + msg;



if(!validname() || !validpho() || !validemail() || !validmsg()){


let a = document.querySelector('.alert');
    a.innerHTML = "Fill Proper Details and fIx errors"
    a.style.right = "20px"
    a.style.backgroundColor = "rgb(255, 104, 104)"
    a.style.color = "red"
}

else{
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "digitalustaad013@gmail.com",
      Password: "29FACF2EA4D937F6F0D761A77CFA271FFBC6",
      To: "digitalustaad013@gmail.com",
      From: "digitalustaad013@gmail.com",
      Subject: name,
      Body: body
    }).then((message) => {
      let msg = message


      if (msg == "OK") {
        let a = document.querySelector('.alert');
        a.innerHTML = "Your Message has been Sent Successfully"
        a.style.right = "20px"
      }
      else {
        let a = document.querySelector('.alert');
        a.innerHTML = message
        a.style.backgroundColor = "rgb(255, 104, 104)"
        a.style.color = "red"
        a.style.right = "20px"
      }



    });


}


setTimeout(() => {
    document.querySelector(".alert").style.right = "-1000px";
 }, 6000);

    
 document.getElementById("contact-form").reset();


            });


            
