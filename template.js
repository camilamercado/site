		var tmpl = '<div class="timeline0">\
                <div class="timeImg3">\
                    <div class="tl_upper3"></div>\
                    <div class="tl_base3"></div>\
                </div>\
                <div class="stamp3">\
                    <div class="date3"></div>\
                    <div class="hour3"></div>\
                    <div class="name3"></div>\
                </div>\
                <div class="story3"></div>\
            </div>'

            tmpl = $(tmpl);
            
            var count = hist.val().count;

            tmpl.find('.tl_upper3').css('background-image', hist.val().upper);
            tmpl.find('.tl_base3').css('background-image', hist.val().base);
            
            tmpl.find('.date3').text(hist.val().date);
            tmpl.find('.hour3').text(hist.val().hour);
            tmpl.find('.name3').text(hist.val().name);
            

            tmpl.find('.story3').text(hist.val().narrate);

            
            var amt = $("#left3 .date3").length;
            console.log(amt);
            
            document.querySelector(".entryCount").innerHTML=amt+1;

           tmpl.find(".timeline0").text($( ".timeline0" ).attr( "class",'count_'+ amt ));


            // $("#timeline0").attr('class','count_'+ count);

            $('#left3').append(
            	tmpl
            );