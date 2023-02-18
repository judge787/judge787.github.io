let name;
let total;
let fee;
let classNum;
let email; //declared variables
let email2;
let inquiry;

//quote
document.getElementById("button").onclick = function(){ //gets input from user and stores them in variables
 
    name = document.getElementById("text").value;
    email = document.getElementById("email").value;
    classNum= document.getElementById("classNum").value;
    
if(classNum > 4){  //if classNUm is less greater than 4 execute the following code
    fee = 10;
    total= fee * classNum; //calculate the total fee using fee value assigned depending on if statement
    alert("Your estimated annual fee would be $" + total + " for " + classNum + " classrooms after discounts. " + "Thank you for contacting us " + name + ", an email has been sent to " + email + " for more information."); //alert the user
}

else{
    fee= 20;
    total= fee * classNum;
    alert("Your estimated annual fee would be $" + total + " for " + classNum + " classrooms. " + "Thank you for contacting us " + name + ", an email has been sent to " + email + " for more information.");
}
}

//inquiry
document.getElementById("button1").onclick = function(){ //gets input from user and stores them in variables
 
    inquiry = document.getElementById("inquiry").value;
    email2 = document.getElementById("email2").value;

    alert("Thank you for inquiring with us , we've recived your email and our team will get back to you as soon as possible for the following inquiry:  "  + inquiry);

}

//dark mode
 var icon2 = document.getElementById("icon2");
 
 if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
 }


let localData = localStorage.getItem("theme");

if(localData=="light"){
    icon2.src== "images/moon.png";
    document.body.classList.remove("dark-mode");
}
else if(localData=="dark"){
    document.body.classList.add("dark-mode");
}

icon2.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        icon2.src="images/moon.png";
        localStorage.setItem("theme","light");
    }
}



//menu bar
var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right = "0";
        }
            function hideMenu(){
            navLinks.style.right = "-200px";
    }


//hidden contact/image boxes on contact us page
$(document).ready(function(){
    
    $("#box1").click(function(){
      $("#form1").toggle();
      $('#form1').removeClass('hidden');
      $('#box1').hide('#box1');
    });

    $("#box2").click(function(){
      $("#form2").toggle();
      $('#form2').removeClass('hidden');
      $('#box2').hide('#box2');
    });

    $("#image1").hover(function(){
    $("#map").removeClass('hidden');
    $("#image1").addClass('hidden');
    });

    $("#image2").hover(function(){
        $("#map2").removeClass('hidden');
        $("#image2").addClass('hidden');
        });

        $("#image3").hover(function(){
            $("#map3").removeClass('hidden');
            $("#image3").addClass('hidden');
            });
            
      

  });


 



 

//api key: AIzaSyCMbylZusJoQqYPJyZjsGhRvIVDnl7gYVM

//AIzaSyDT8cKnjVvbJ7Ly1zEk8LRso097Ekxhd08

