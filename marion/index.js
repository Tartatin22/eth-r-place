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

let canvas = document.getElementById("canvas");
const size = canvas.width / 16 ;
let chosenPixel = 0;

function draw(tab) {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
    for (const x of Array(256).keys()) {
        couleur = int_to_color(tab[x]);
        py = Math.floor(x/16) * size;
        px = (x % 16) * size;
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

draw([15, 15, 0, 3, 6, 5, 5, 4, 1, 1, 2, 5, 4, 14, 10, 14, 7, 4, 5, 8, 0, 2, 6, 2, 9, 8, 5, 9, 9, 9, 2, 10, 3, 1, 14, 7, 12, 6, 2, 1, 11, 12, 14, 12, 9, 0, 15, 10, 8, 13, 1, 6, 5, 2, 0, 11, 3, 6, 11, 13, 7, 5, 3, 5, 5, 3, 2, 5, 1, 13, 10, 3, 1, 13, 0, 10, 12, 7, 7, 3, 10, 6, 10, 4, 3, 12, 14, 8, 0, 2, 11, 12, 14, 14, 7, 8, 9, 1, 3, 10, 6, 12, 4, 14, 14, 8, 8, 12, 4, 8, 10, 4, 10, 8, 8, 9, 4, 2, 1, 1, 6, 0, 14, 1, 14, 11, 6, 3, 2, 3, 7, 14, 14, 14, 9, 11, 0, 0, 11, 13, 6, 11, 8, 13, 0, 1, 8, 11, 9, 5, 6, 2, 10, 1, 2, 2, 10, 12, 10, 9, 12, 5, 2, 2, 2, 4, 1, 13, 3, 13, 0, 13, 4, 0, 5, 12, 9, 7, 12, 9, 8, 11, 8, 3, 8, 0, 11, 9, 7, 14, 1, 9, 9, 4, 0, 0, 11, 11, 14, 0, 6, 3, 10, 6, 14, 7, 0, 12, 10, 6, 8, 10, 4, 11, 0, 8, 12, 1, 4, 7, 0, 9, 0, 5, 6, 3, 8, 5, 12, 0, 1, 1, 7, 3, 2, 14, 8, 4, 8, 10, 7, 14, 14, 12, 14, 0, 11, 7, 12, 3, 6, 9, 12, 1, 2, 3,7, 12, 0, 3, 6, 5, 5, 4, 1, 1, 2, 5, 4, 14, 10, 14, 7, 4, 5, 8, 0, 2, 6, 2, 9, 8, 5, 9, 9, 9, 2, 10, 3, 1, 14, 7, 12, 6, 2, 1, 11, 12, 14, 12, 9, 0, 0, 10, 8, 13, 1, 6, 5, 2, 0, 11, 3, 6, 11, 13, 7, 5, 3, 5, 5, 3, 2, 5, 1, 13, 10, 3, 1, 13, 0, 10, 12, 7, 7, 3, 10, 6, 10, 4, 3, 12, 14, 8, 0, 2, 11, 12, 14, 14, 7, 8, 9, 1, 3, 10, 6, 12, 4, 14, 14, 8, 8, 12, 4, 8, 10, 4, 10, 8, 8, 9, 4, 2, 1, 1, 6, 0, 14, 1, 14, 11, 6, 3, 2, 3, 7, 14, 14, 14, 9, 11, 0, 0, 11, 13, 6, 11, 8, 13, 0, 1, 8, 11, 9, 5, 6, 2, 10, 1, 2, 2, 10, 12, 10, 9, 12, 5, 2, 2, 2, 4, 1, 13, 3, 13, 0, 13, 4, 0, 5, 12, 9, 7, 12, 9, 8, 11, 8, 3, 8, 0, 11, 9, 7, 14, 1, 9, 9, 4, 0, 0, 11, 11, 14, 0, 6, 3, 10, 6, 14, 7, 0, 12, 10, 6, 8, 10, 4, 11, 0, 8, 12, 1, 4, 7, 0, 9, 0, 5, 6, 3, 8, 5, 12, 0, 1, 1, 7, 3, 2, 14, 8, 4, 8, 10, 7, 14, 14, 12, 14, 0, 11, 7, 12, 3, 6, 9, 12, 1, 2, 3]);    

    
canvas.addEventListener("click", function (evt) {
    let mousePos = getMousePos(canvas, evt);
    chosenpixel = givecoord(mousePos.x,mousePos.y);
    //alert(mousePos.x + ',' + mousePos.y);
    //alert(chosenpixel);
}, false);


function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}

function givecoord(x,y){
    col = Math.floor(x/size);
    line = Math.floor(y/size);
    pixels_number = line*16 + col;
    return pixels_number;
}