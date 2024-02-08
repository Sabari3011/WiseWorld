// E4942D97CA11E9F1DCB393BB3F0FB1D42FF0
// 561732C0A740C90FA546F0DC7C53A0AA2B40
// a6b0e67a-453d-4b1b-967d-fd98127cde1f
window.addEventListener("scroll",()=>{
    
    var header = document.getElementById("navbar");
    header.classList.toggle("navtop", window.scrollY > 2)
})

let subscribeform=document.getElementById("subscribeform").addEventListener('submit', (e)=>{

    e.preventDefault();





    if(validateinput())
{
    console.log("here")

    Email.send({
        SecureToken : "a6b0e67a-453d-4b1b-967d-fd98127cde1f",
        To : 'sabarinathan3011@gmail.com',
        From : "expressmail.provider@gmail.com",
        Subject : "Greetings from Wise World",
        Body : "Thank You for Subscribing! , You're now part of our community. Expect exciting updates and events in your inbox soon."
    }).then(
        message => console.log(message)
        );
        let name= document.getElementById("name").value="";
        let email= document.getElementById("email").value="" ; 
    }

})

function validateinput (){
    let name= document.getElementById("name").value.trim() ;
    let email= document.getElementById("email").value.trim() ;
    let nameerr = document.getElementById("nameerr")
    let emailerr = document.getElementById("emailerr")
    
    let err = true;

    if (name === ''){
        nameerr.textContent="Please Enter your name";
        err = false
    }
    else if ( name.length < 3){
        nameerr.textContent="Please Enter a valid Name";
        err = false
    }
   
    else{
        nameerr.textContent=""
    }

    
    let domainnames=email.split(".")
    let domain = domainnames[domainnames.length-1]
    // console.log(domain)
    if (email === ''){
        emailerr.textContent="Please Enter your Email";
        err = false
    }
    else if ( !validateEmail(email)){
        emailerr.textContent="Please Enter a valid Email";
        err = false
    }
    else if(!(domain == "com" || domain=="in" || domain=="net" || domain=="org")){
        emailerr.textContent="Email should end with [com,in,org,net]";
        err = false
    }
    else{
        let username = email.split("@")[0]
        let provider = email.split("@")[1].split(".")[0]
        console.log(provider.search(/^g.+l$/))
        if(username.length < 6 || username.length > 30   || username.search(/[a-z]/) == -1 ){
            emailerr.textContent="Please Enter a valid Email";
        err = false
        }
        
        else if (provider.search(/^g.+l$/) != -1 && provider != "gmail"){
            emailerr.textContent="Please correct the spelling for gmail";
        err = false
        }
        else if (provider.search(/^y.+o$/) != -1 && provider != "yahoo"){
            emailerr.textContent="Please correct the spelling for yahoo";
        err = false
        }
        else if (provider.search(/^b.+g$/) != -1 && provider != "bing"){
            emailerr.textContent="Please correct the spelling for bing";
        err = false
        }
        else{

            emailerr.textContent=""
        }
    }

    return err ;
}


const validateEmail = (email) => {

    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }



let anime2 = document.getElementById("animationtext2");
anime2.style.visibility="hidden"


setTimeout(async()=>{
    anime2.style.visibility="visible"

let content = "Recruitment made easy with better Experts.".split("");
anime2.textContent="";
let temp=""
// console.log(content)
for(let i=0;i<content.length ; i++){
    // anime2.textContent+=e;
    temp+=content[i];
    anime2.innerText=temp;
    // console.log(temp)   
    await sleep(60); 
}
// console.log("finished")
} , 500)


let animation1 = document.getElementById("animationtxt1");
let animation2 = document.getElementById("animationtxt2");
animation2.style.visibility="hidden"
animation2.style.visibility="hidden"

setTimeout(async()=>{
    let content1 = "Your".split("");
    animation1.style.visibility="visible"

    animation1.textContent="";
    let temp1=""
    // console.log(content)
    for(let i=0;i<content1.length ; i++){
        // animation1.textContent+=e;
        temp1+=content1[i];
        animation1.innerText=temp1;
        // console.log(temp)   
        await sleep(100); 
    }
    animation2fun()
    // console.log("finished")
} , 500);



let animation2fun = async() =>{ 
    
    animation2.style.visibility="visible"
    let content2 = "Recruitment Partner".split("");
    animation2.textContent="";
    let temp2=""
    // console.log(content)
    for(let i=0;i<content2.length ; i++){
        // animation1.textContent+=e;
        temp2+=content2[i];
        animation2.innerText=temp2;
        // console.log(temp)   
        await sleep(100); 
    }
    // animation1hide();

}



// let animation1hide = async()=>{
//     contentone="Yours"
//     tempone=""
//     for(let i=0 ; i<contentone.length+1 ; i++){
//         tempone+=" "
//         console.log(tempone+contentone.slice(i,contentone.length+1))
//         animation1.innerHTML=tempone+contentone.slice(i,contentone.length+1)
//         await sleep(100)
//     }

// }
