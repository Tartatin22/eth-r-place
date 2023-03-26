import React from "react";

export function PixelMap({ setPixel, getPixels }) {
  const colors = {
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
  };
  
  var picked_color = null;
  
  
  function givecoord(x,y, size){
    let col = Math.floor(x/size);
    let line = Math.floor(y/size);
    let pixels_number = line*16 + col;
    return pixels_number;
}
  
  
  function getMousePos(canvas, evt) {
  	let rect = canvas.getBoundingClientRect();
  	return {
      		x: evt.clientX - rect.left,
      		y: evt.clientY - rect.top
  	};
  }
  
  function draw(tab, canvas) {
    if (canvas.getContext) {
          const size = canvas.width / 16 ;
    canvas.addEventListener("mousedown", function(e)
	{
		let mousePos = getMousePos(canvas, e);
		console.log("mousePos is : ", mousePos);
    		let chosenpixel = givecoord(mousePos.x,mousePos.y, size);
    		console.log("Choosen pixel is : ", chosenpixel);
    		var x = chosenpixel % 16;
    		var y = Math.floor(chosenpixel/16);
    		if (picked_color == null){
    			alert("You need to specify a color before painting ! :P");
    		}else {
    		setPixel(x, y, picked_color);
    		}
	});

      let ctx = canvas.getContext('2d');
      for (const x of Array(256).keys()) {
        let couleur = int_to_color(tab[x]);
        let py = Math.floor(x/16) * size;
        let px = (x % 16) * size;
        ctx.fillStyle = couleur;
        ctx.fillRect(px, py, px + size,py + size);
        //console.log("coordonees de " + x + " : " + px + " et " + py)
      }
    }
  }
  function int_to_color(number){
    let color_selected = Object.values(colors)[number];
    return color_selected;
  }
  
  
  function fetchPixels() {
    getPixels().then((result) => {
      const pixels = result;
      let canvas = document.getElementById("canvas");
      console.log(pixels);
      draw(pixels, canvas);
    });
  }
  
  // colorpalette 

  function draw_cp(canvas=null, p=null) {
  	console.log("draw cp");
  	var canvas = document.getElementById("colorpalette");

	canvas.addEventListener("mousedown", function(e)
	{
		getMousePosition(canvas, e);
	});

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
                let py = (Math.floor(x/2) * square_size);
                let px = ((x % 2) * square_size);
                ctx.fillStyle = int_to_color(x);
		let dpx = square_size - 2 * bs;	
		let dpy = square_size - 2 * bs;
		ctx.fillRect(px + bs, py + bs, dpx, dpy);
		if (x == p) {
			draw_cross(ctx, px, py, square_size);
		}
	  }
        }
  }
  
  function getMousePosition(canvas, event) {
	let rect = canvas.getBoundingClientRect();
	let x = event.clientX - rect.left;
	let y = event.clientY - rect.top;
	var n = Math.floor(x / (canvas.width / 2));
	n = n + Math.floor(y / (canvas.height / 8)) * 2;
	draw_cp(canvas, n);
	picked_color = n;
}
  
  function draw_cross(ctx, x, y, h, b=2){
	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.fillRect(x + Math.floor(h/2) - b/2, y, b, h);
	ctx.fillRect(x, y + Math.floor(h/2) - b/2, h, b); 
}
  return (
    <div>

      <div class="parent">
        <div class="canvasFrame">
          <canvas id="canvas" width="512" height="512"></canvas>
        </div>

        <div class="colorPaletteFrame">
          <canvas id="colorpalette" width="100" height="400"></canvas>
        </div>
      </div>
      <div>
      <script type="text/javascript">
      	fetchPixels();
          draw_cp();</script>
        <button onClick={() => {
          fetchPixels();
          draw_cp();
        }}>Fetch pixels</button>

      </div>
      
    </div>
  );
}
