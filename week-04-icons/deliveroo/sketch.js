/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: Deliveroo Riders - Pay
 DATA SOURCE: TBIJ
 LINK TO DATA: https://www.thebureauinvestigates.com/stories/2021-03-25/deliveroo-riders-earning-as-little-as-2-pounds
 HEADERS: N/A

 TASKS: 
 1. Can you source and display a different graphic for 
 the % that earn less?
 2. Can you use a different HSB colour after each mouse click?  
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 let lessThanMinWage = 41; //percentage receiving less than minimum wage

 let numRows = 10;
 let numColumns = 10;
 let size = 50;
 
 let iconHighlight;
 let icon;
 
 let dataset;
 
 let currRowIndex = 0;
 let percentageRiders = 0;
 let payThreshold = 0;

 let h;
 let s;
 let b;
 
 function preload(){
   dataset = loadTable("deliveroo.csv", "header");
   iconHighlight = loadImage("deliveryrider_green.png")
   icon = loadImage("deliveryrider_red.png");
 }
 
 function setup(){
   createCanvas(500, 700);
   
   imageMode(CENTER); //draw images from their centrepoint
   
   payThreshold = dataset.getNum(currRowIndex, 0);
   percentageRiders = dataset.getNum(currRowIndex, 1);
   
   h = random(0, 255);
   s = random(0, 255);
   b = random(0, 255);

 }
 
 function draw(){
   background(245);
   
   let index = 0;

   colorMode(HSB);
   
   for(let row = 0; row < numRows; row++){
     for(let col = 0; col < numColumns; col++){
       let x = size/2+(col*size);
       let y = size/2+(row*size);
       
       fill(55);
       noStroke();
       if(index >= 100 - percentageRiders){
         noTint();
         image(iconHighlight, x, y, size, size);
       }else{
         tint(205, 196);
         image(icon, x, y, size, size);
       }
       
       
       index++;
       
       //fill(255);
       //text(index, x, y);
     }
     
     fill(h, s, b);
     textSize(36);
     textFont('Inter');
 
     text(percentageRiders+"%", 10, height-160);
     fill(55);
     text("of Deliveroo Riders\nearn less than", 10, height-113);
     fill(h, s, b);
     text("£"+payThreshold+" per hour", 10, height-20);
   }
 }
 
 function mouseClicked(){
   currRowIndex++;

   h = random(0, 255);
   s = random(0, 255);
   b = random(0, 255);
   
   if(currRowIndex>=dataset.getRowCount()){
     currRowIndex = 0;
   }
   
   payThreshold = dataset.getNum(currRowIndex, 0);
   percentageRiders = dataset.getNum(currRowIndex, 1);
 }