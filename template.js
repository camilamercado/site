//Template State Call

// if (intent.responsive.name === "tablet"){
//   console.log(intent.responsive.name);
// }


console.log(intent.responsive.name);

var state = "";

$(".topNav").click(function(){
  state = "0";
  console.log(state);
   if( state === "0" ) {
      document.querySelector(".template").style.display="none";
      document.querySelector(".splash").style.display="block";
  }
});

$(".x").mouseover(function(){
  state = "X";
  console.log(state);
  // $(".x").addClass("navModsh");
});

$(".y").mouseover(function(){
  state = "Y";
  console.log(state);
});

$(".z").mouseover(function(){
  state = "Z";
  console.log(state);
});


//Template Generator


function template(){

    var counter = null;

    for(var i = 0; i < pages.length; i++) {
        
        if(pages[i].state === state ) {

          //$("."state"").addClass("navModsh");
          document.querySelector(".template").style.display="block";
          document.querySelector(".splash").style.display="none";

          document.querySelector(".title").innerHTML=pages[i].title;
          document.querySelector(".subTitle").innerHTML=pages[i].subTitle;
          document.querySelector(".icon").style.backgroundImage=pages[i].icon;
          document.querySelector(".window1").style.backgroundImage=pages[i].window1;
          //document.querySelector(".text1").innerHTML=pages[i].text1;


          var a = document.createElement('a');
          var linkText = document.createTextNode(pages[i].link);
          a.appendChild(linkText);
          a.title = pages[i].title;
          a.href = pages[i].link;
          document.querySelector(".subTitle").appendChild(a);


          //slideMod 

          $(function () { 
          
                  counter = 0;

                  var brute = pages[i].frames;

                  console.log(brute[counter]); 

             
              $('.slideMod').click(function () {
                  counter = (counter + 1) % brute.length; 
                  // increment your counter
                  // the modulus (%) operator resets the counter to 0
                  // when it reaches the length of the array
                  document.querySelector(".window1").style.backgroundImage=brute[counter].image;
                  console.log(brute[counter]); // the new incremented value
              });
          });

          

        }

    }

}

























