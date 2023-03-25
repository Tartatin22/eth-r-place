import React from "react";

export function PixelMap({ setPixel, getPixels }) {
  return (
    <div>
      <h4>PixelMap</h4>
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
          const pixels = getPixels();
          console.log(pixels);
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
