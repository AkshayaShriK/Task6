document.getElementById("form_validate").addEventListener('submit',function(event)
{
    event.preventDefault();


//step2 for input
let Uname=document.getElementById("username").value.trim();
let Uemail=document.getElementById("email").value.trim();
let Umsg=document.getElementById("msg").value.trim();


//step3 for span 
let Vname=document.getElementById("vname")
let Vemail=document.getElementById("vemail")
let Vmsg=document.getElementById("vmsg")


let isvalid=true;
//step4 requiredfield error
//full name error eg:Akshaya shri 
let unamepattern= /^[A-Za-z]+ [A-Za-z]+$/;
//valid email eg:akshaya@gmail.com
let emailpattern=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
if(Uname === "")
{
    Vname.innerText="*Name is Required"
    isvalid=false;
}
else if( !unamepattern.test(Uname))
{
   Vname.innerText ="*enter ur full name"
    isvalid=false;
}
else if( unamepattern.test(Uname))
{
   Vname.innerText =""
   isvalid=true;
}

if(Uemail === "")
{
    Vemail.innerText="*email is Required"
    isvalid=false;
}
else if(!emailpattern.test(Uemail))
{
    Vemail.innerText ="*enter a valid email"
    isvalid=false;
}
else if(emailpattern.test(Uemail))
{
    Vemail.innerText =""
     isvalid=true;
}
if(Umsg === "")
{
    Vpass.innerText="*message is Required"
    isvalid=false;
}
else if(Umsg.length<3||Umsg.length>100)
{
    Vmsg.innerText="*enter a message char between 3 to 100"
    isvalid=false;
}
else if(Umsg.length >3||Umsg.length<100)
{
    Vmsg.innerText=""
    isvalid=true;
}

if(isvalid)
{
 alert(`hi ${Uname},Thank you for your kind words. Stay connected with our website.`); 
 console.log(Uname,Uemail,Umsg);
 
}
})