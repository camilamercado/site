//Template State Call

var state = "base";

console.log(state);

  $(".topNav").click(function(){
    
    state = "base";
    
      if( state === "base" ) {

        document.querySelector(".template").style.display="none";
        document.querySelector(".splash").style.display="block";
        
        $(".sideNav").css( "opacity", "1");
        
        $(".sideNav").mouseout(function(){
            $(".sideNav").css( "opacity", "1");
        });
      
      }
  });

$(".x").mouseover(function(){
  state = "X";
  console.log(state);
});

$(".y").mouseover(function(){
  state = "Y";
  console.log(state);
});

$(".z").mouseover(function(){
  state = "Z";
  console.log(state);
});

$(".zed").mouseover(function(){
  state = "ZED";
  console.log(state);
});

$(".zoink").mouseover(function(){
  state = "ZOINK";
  console.log(state);
});


//Template Generator


function template(){

    var counter = null;

    for(var i = 0; i < pages.length; i++) {
        
        if(pages[i].state === state ) {

          //disapearing sideNav

           $(".sideNav").css( "opacity", "0");
           
           $(".sideNav").mouseover(function(){
               $(".sideNav").css( "opacity", "1");
           });

           $(".sideNav").mouseout(function(){
               $(".sideNav").css( "opacity", "0");
           });

           //template contents

          document.querySelector(".template").style.display="block";
          document.querySelector(".splash").style.display="none";

          document.querySelector(".title").innerHTML=pages[i].title;
          document.querySelector(".date").innerHTML=pages[i].subTitle;
          document.querySelector(".link").innerHTML=pages[i].link;
          document.querySelector(".icon").style.backgroundImage=pages[i].icon;
          document.querySelector(".window1").style.backgroundImage=pages[i].window1;
          document.querySelector(".text1").innerHTML=pages[i].text1;


          var a = document.createElement('a');
          var linkText = document.createTextNode(pages[i].linky);
          a.appendChild(linkText);
          a.title = pages[i].title;
          a.href = pages[i].linky;
          document.querySelector(".link").appendChild(a);


          //slideMod 

          $(function (slide) { 
          
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













