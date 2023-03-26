import React from "react";

export function PixelMap({ setPixel, getPixels }) {
  return (
    <div>
        <script src="./index.js"></script>
	<div class="parent">
		<div class="canvasFrame">
			<h1>canvas</h1>
		
		</div>

		<div class="colorPaletteFrame">
			    <canvas id="colorpalette" width="100" height="400"></canvas>
		</div>
	</div>		



          event.preventDefault();


          //setPixel(x, y, color);
          const pixels = getPixels();
          console.log(pixels);
 

    </div>
  );
}
