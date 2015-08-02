
      var dataset = [];                               //Initialize empty array
      for (var i = 0; i < 20; i++) {                  //Loop 25 times
        var newNumber = Math.random() * 45;           //New random number (0-30)
        dataset = dataset.concat(newNumber);          //Add new number to array
      }
      
      d3.select(".container").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {                 //d = data attr. of elm being processed
          var barHeight = d * 18;
          return barHeight + "px";
          console.log(barHeight);
        })
        .style("background", function(d) {
          if (d > 30) {  
               return "url(http://213.161.172.115/mjpg/video.mjpg)" ;
          } else if (d > 40) {   
              return "url(http://213.161.172.115/mjpg/video.mjpg)";
          } else if (d > 20) {   
              return "url(http://82.148.72.2:60000/cgi-bin/faststream.jpg?stream=full&fps=0)";
          } else {
              return "url(http://cam6284208.miemasu.net/nphMotionJpeg?Resolution=640x480&Quality=Clarity)";
          }
         });

            
         d3.select(".window")                                     //On mouseover, update with new data  
            .on("mouseover", function() {                         //New values for dataset
            var numValues = dataset.length;                       //Count original length of dataset
            dataset = [];                                         //Initialize empty array               
            for (var i = 0; i < numValues; i++) {                 //Loop numValues times
              var newNumber = Math.floor(Math.random() * 55);     //New random integer (0-25)
              dataset.push(newNumber);                            //Add new number to array
            } 


    
            d3.selectAll(".bar")                                   //Update all rects
              .data(dataset)    
              .transition()
              .delay(function(d, i) {
                return i / dataset.length * 1000;
              })
              .duration(1000)              
              .style("width", function(d) {
                 var barHeight = d * 18;
                 return 100 + "%";
              })

            
        });

        d3.select(".window")                                        
          .on("mouseout", function() {                         
            
            d3.selectAll(".bar")                                   
              .data(dataset)    
              .transition()
              .delay(function(d, i) {
                return i / dataset.length * 1000;
              })
              .duration(1500)          
              .style("width", function(d) {
                 return 25 + "px";
              })
               
              .style("background", function(d) {
                  if (d > 30) {  
                      var rand = windows[Math.floor(Math.random() * windows.length)]; 
                      return rand;
                  } else if (d > 20) {   
                     var rand = windows[Math.floor(Math.random() * windows.length)]; 
                      return rand;
                  } else {
                      var rand = windows[Math.floor(Math.random() * windows.length)]; 
                      return rand;
                  }
               });

            
        });

  var windows = [

      "url(http://tuincam.bt.tudelft.nl/mjpg/video.mjpg)",
      "url(http://195.55.112.200:8083/mjpg/video.mjpg)",
      "url(http://camera.nton.lviv.ua/mjpg/video.mjpg)",
      "url(http://videovalvonta.fi/cgi-bin/faststream.jpg)",
      "url(http://webcam.vanderbiltbeachresort-reservations.com:4445/mjpg/video.mjpg)",
      "url(http://tancredi.axiscam.net/mjpg/video.mjpg)",
      "url(http://82.77.65.43:8207/cgi-bin/faststream.jpg)",
      "url(http://piercam.cofairhope.com/mjpg/video.mjpg)",
      "url(http://webcam.csatolna.hu/mjpg/video.mjpg)",
      "url(http://sun.hm.ukrtel.net/axis-cgi/mjpg/video.cgi)",
      "url(http://sciencecentercam.fas.harvard.edu/axis-cgi/mjpg/video.cgi)",
      "url()",
      // "url()",



      ];

  var rand = windows[Math.floor(Math.random() * windows.length)]; 
  console.log(rand);

