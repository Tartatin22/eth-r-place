
colors = {
	"aqua": "rgb(0,255,255)",
	"black": "rgb(0,0,0)",
	"blue" : "rgb(0,0,255)",
	"fuchsia": "rgb(255,0,255)",
	"gray": "rgb(128,128,128)",
	"green": "rgb(0,128,0)",
	"lime": "rgb(0,255,0)",
	"maroon": "rgb(128,0,0)",
	"navy": "rgb(0,0,128)",
	"olive": "rgb(128,128,0)",
	"purple": "rgb(128,0,128)",
	"red": "rgb(255,0,0)",
	"silver": "rgb(192,192,192)",
	"teal": "rgb(0,128,128)",
	"white": "rgb(255,255,255)",
	"yellow": "rgb(255,255,0)"
}

function draw(p=null) {
        var canvas = document.getElementById('colorpalette');
	var width = canvas.width;
        canvas.height = canvas.width * 4;
	canvas.width = width;
	if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
	  ctx.fillStyle = 'rgb(200,200,200)';
	  ctx.fillRect(0, 0, canvas.width, canvas.height);
	  var square_size = width / 2;
	  var bs = Math.floor(square_size / 25);
	  for (const x of Array(16).keys()) {
                py = (Math.floor(x/2) * square_size);
                px = ((x % 2) * square_size);
                ctx.fillStyle = 'rgb('+ Math.floor(Math.random()*200) + ', 0, 0)';
		dpx = square_size - 2 * bs;	
		dpy = square_size - 2 * bs;
		ctx.fillRect(px + bs, py + bs, dpx, dpy);
		if (x == p) {
			draw_cross(ctx, px, py, square_size);
		}
	  }
        }
}

function draw_cross(ctx, x, y, h, b=2){
	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.fillRect(x + Math.floor(h/2) - b/2, y, b, h);
	ctx.fillRect(x, y + Math.floor(h/2) - b/2, h, b); 
}

function int_to_color(number) {
	var i = 0
	var color = null
	Object.keys(colors).forEach(function(key) {
		if(i == number){
			color = colors[key];
		}
		i = i + 1;
	});
	return color;
}

function getMousePosition(canvas, event) {
	let rect = canvas.getBoundingClientRect();
	let x = event.clientX - rect.left;
	let y = event.clientY - rect.top;
	let n = Math.floor(x / (canvas.width / 2));
	n = n + Math.floor(y / (canvas.height / 8)) * 2;
	draw(n);
}
$(document).ready(function() {
	console.log("document ready");
	
	let canvas = document.getElementById('colorpalette');

	canvas.addEventListener("mousedown", function(e)
	{
		getMousePosition(canvas, e);
	});


	draw();

});
