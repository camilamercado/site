var state = "";

$(".topNav").mouseover(function(){
  state = "g";
  console.log(state);
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


function template(){


    for(var i = 0; i < pages.length; i++) {
        
        if(pages[i].state === state ) {

          document.querySelector(".template").style.display="block";
          document.querySelector(".field").style.backgroundImage="none";

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
        'icon' : "url(css/Fafnir.png)", 
        'window1' : "url(css/fafw.png)",
        'text1' : "Animation, printmaking, drawing"
         
      },  

];



