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


//var counter = setInterval(template, 200);


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
          document.querySelector(".text1").innerHTML=pages[i].text1;



        }

    }

}


var pages = [


      { 
        'state' : "X",
        'title' : "Daphne & Telstar",
        'subTitle' : "2014",
        'icon' : "url(css/istamp.png)",
        'window1' : "url(css/dtw.png)",
        'text1' : "http://camilamercado.github.io/dds/orbit.html"
         
      }, 

      { 
        'state' : "Y",
        'title' : "b1/Ching",
        'subTitle' : "2013",
        'icon' : "url(css/stamp2.png)", 
        'window1' : "url(css/bi1.png)",
        'text1' : "http://camilamercado.github.io/biching/"
         
      }, 

      { 
        'state' : "Z",
        'title' : "Actual Size",
        'subTitle' : "2012",
        'icon' : "url(css/fafi.png)", 
        'window1' : "url(css/still.png)",
        'text1' : "Animation, printmaking, drawing"
         
      },  

];

