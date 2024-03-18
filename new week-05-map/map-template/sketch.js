//adapted from Mappa tutorial
//for more, see: https://mappa.js.org/docs/simple-map.html
const options = {

  lat: 51.425222, //latitude
  lng: -0.563167, //longitude
  zoom: 3,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'

}
const mappa = new Mappa('Leaflet')

let myMap;
let canvas;

function setup() {

  // Create our canvas element, and store its reference 
  canvas = createCanvas(640, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}

function draw(){

  clear();

  let pos = myMap.latLngToPixel(51.425222, -0.563167);
  fill(0);
  ellipse(pos.x, pos.y, 5, 5);
  textSize(20);
  text("Royal Holloway", pos.x, pos.y-5);

}
