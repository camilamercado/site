//Template State Call

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

          frame = 0;

          $(".slideMod").click(function(){
            frame = frame + 1;
            console.log(frame);

             for(var i = 0; i < pages.length; i++) {
        
        if(pages[i].state === state ) {

             document.querySelector(".window1").style.backgroundImage=pages[i].window2;

           }

         }


          });

          



        }

    }

}




var pages = [


      { 
        'state' : "X",
        'title' : "Daphne & Telstar",
        'subTitle' : "2014   ",
        'icon' : "url(css/istamp.png)",
        'window1' : "url(css/dtw.png)",
        'window2' : "url(css/img2.png)",
        'link' : "http://camilamercado.github.io/dds/orbit.html"
         
      }, 

      { 
        'state' : "Y",
        'title' : "b1/Ching",
        'subTitle' : "2013    ",
        'icon' : "url(css/stamp2.png)", 
        'window1' : "url(css/bi1.png)",
        'link' : "http://camilamercado.github.io/biching/"
         
      }, 

      { 
        'state' : "Z",
        'title' : "Actual Size",
        'subTitle' : "2012    ",
        'icon' : "url(css/fafi.png)", 
        'window1' : "url(css/still.png)",
        'link' : ""
         
      },  

];

