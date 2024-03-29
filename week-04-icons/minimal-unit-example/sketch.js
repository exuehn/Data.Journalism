/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: what is the data about?
 DATA SOURCE: what organisation/person collected the data?
 LINK TO DATA: where did you get the data from?
 HEADERS: what are the headers of the dataset?

TASK: Can you display the number of Internet users per 100 people for the
country of Cyprus using data from the "internet-users-per-100-people.csv"
file? The data originates from this project: 
https://github.com/ckan/ckanext-mapviews/tree/master

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

let numRows = 10;
let numColumns = 10;

let hue = 0;
let randomIndex = 0;
//let currentRowIndex = 0;

let size = 50;

let dataset;
let cyprus;

function preload(){

  dataset = loadTable("internet-users-per-100-people.csv", "header");

}

function setup(){
  createCanvas(600, 700);

  cyprus = dataset.getNum(50, 16);
  console.log (cyprus);
  
  colorMode(HSB);
  hue = random(0, 360);
  
  strokeWeight(2);
}

function draw(){
  background(hue, 45, 85);
  
  let index = 0;
  
  for(let i = 0; i < numRows; i++){
    for(let j = 0; j < numColumns; j++){
      
      let x = 75 + (j*size);
      let y = 75 + (i*size);
      
      if(index >= cyprus){
        noFill();
        stroke(0, 0, 100);
      }else{
        noStroke();
        fill(0, 0, 100);
      }
      ellipse(x, y, size-5, size-5);
      
      index++;
    }
  }
  
  fill(0, 0, 100);
  textFont('Outfit');
  textSize(25);
  text(int(cyprus) + " in 100 people uses internet in Cyprus", 57, height-100);
}

function mouseClicked(){
  cyprus++;

  
  //if(cyprus>=dataset.getRowCount()){
  //  cyprus = 0;
  //}
  
  cyprus = dataset.getNum(50, int(random(4,17)));

}