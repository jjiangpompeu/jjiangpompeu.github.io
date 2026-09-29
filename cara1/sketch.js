function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(255,224,189);
  stroke(0);
  strokeWeight(1,5);
  ellipse(200,210,260,260);

  noStroke();
  fill(255,150,150,150);
  ellipse(100,210,50,30);
  ellipse(300,210,50,30);

  stroke(0);
  strokeWeight(4);
  line(115,130,165,140);
  line(285,130,235,140);

  strokeWeight(1,5);
  fill(255);
  ellipse(140,170,60,60);
  ellipse(260,170,60,60)

  fill(0);
  noStroke();
  ellipse(140,170,25,25);
  ellipse(260,170,25,25);

  fill(255);
  ellipse(145,165,8,8);
  ellipse(265,165,8,8);

  stroke(0);
  strokeWeight(1.5);
  fill(255,200,150);
  ellipse(200,215,35,45);
  fill(0);
  noStroke();
  ellipse(192,225,7,9);
  ellipse(208,225,7,9);

  stroke(0);
  strokeWeight(1,5);
  fill(60,20,20);
  arc(200,270,90,80,0,PI);

  noStroke();
  fill(255,100,150);
  arc(200,275,50,40,0,PI);

  stroke(0);
  strokeWeight(1,5);
  fill(100,150,225);
  rect(90,70,220,40,10);
  fill(255,100,100);
  triangle(200,20,110,70,290,70);
  fill(255,255,0);
  ellipse(200,20,20,20);
  
  
  
}
