/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: What the data is about?
 DATA SOURCE: what organisation/person collected the data?
 LINK TO DATA: where did you get the data from?
 HEADERS: what are the headers of the dataset?
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 
 TASK:  
  1. Can you source and load alternative data? 
  2. Can you add text to the lollipops grabbed from the 'context' column? 

  */

 let scale = 1;

 let dataset;

 let datapointWidth = 5;
 let chartWidth;
 let margin = 50;
 
 function preload(){
   dataset = loadTable("metastock.csv", "header");
 }
 
 //run once when our index.html file is first loaded
 function setup() {
   createCanvas(800, 500); //width in pixels, height in pixels
   chartWidth = width - margin * 2;
   datapointWidth = chartWidth / dataset.getRowCount();
 }
 
 //draw is run in a loop
 function draw() {
   
   background(245);
   
   stroke(55);
   line(0, height-100, width, height-100);
   for(let row=0; row<dataset.getRowCount(); row++){
     let dayIndex = dataset.getNum(row, 1);
     let date = dataset.getString(row, 0);
     let y = height-100;
     let h = dataset.getNum(row, 4);
     let x = margin + i * datapointWidth;

     
     
     stroke(55);
     noFill();
     line(x, y, x, h);
     fill(245);
     ellipse(x, h, 10, 10);
   }
 
 }
 