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
  function draw(tab, canvas) {
    if (canvas.getContext) {
      const size = canvas.width / 16 ;
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
        <button onClick={() => {
          fetchPixels();
        }}>Fetch pixels</button>

      </div>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const x = formData.get("x");
          const y = formData.get("y");
          const color = formData.get("color");

          if (x && y && color) {
            setPixel(x, y, color);
          }
          fetchPixels();
        }}
      >
        <div className="form-group">
          <label>x</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="x"
            placeholder="0"
            required
          />
        </div>
        <div className="form-group">
          <label>y</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="y"
            placeholder="0"
            required
          />
        </div>
        <div className="form-group">
          <label>color</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="color"
            placeholder="0"
            required
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="SetPixel" />
        </div>
      </form>
    </div>
  );
}
