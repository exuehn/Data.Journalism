let infoPara;

function setup(){

  dataCanvas = createCanvas(600, 600);
  //links back to the codes in css
  dataCanvas.parent('canvas-tag');
  infoPara = createP('Tom');

}

function mousePressed(){

  let myDate = new Date();
  let datetime = myDate.getHours();
  infoPara.html('hello world: ' + datetime);

}