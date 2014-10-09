(function() {
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURl;

	navigator.getMedia = navigator.getUserMedia ||
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia; 

	navigator.getMedia({
		video: true,
		audio: false
	}, function(stream) {
	    video.src = vendorUrl.createObjectURL(stream);
	    video.play();
	}, function(error) {
		// an error occured
		// error.code
	});

	video.addEventListener('play', function() {
		draw(this, context, 800, 600);
	}, false);

	function draw(video, context, width, height) {
		context.drawImage(video, 0, 0, width, height);
		setTimeout(draw, 1, video, context, width, height);
	}

})();