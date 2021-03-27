const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload () {

}


function setup () {
  createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    //create Bodies here.
      ground = new Ground(240,798,480,30);

      for (var b = 0; b <= width; b = b + 80) {
        divisions.push(new Divisons(b, height-divisionHeight/2, 10, divisionHeight));
      }

      //create rows of plinkos
          for (var j = 40; j <= width; j = j + 50) {
            plinkos.push(new Plinko(j,75));
          }

          for (var k = 15; k <= width; k = k + 50) {
            plinkos.push(new Plinko(k,150));
          }

          for (var l = 40; l <= width; l = l + 50) {
            plinkos.push(new Plinko(l,225));
          }

          for (var m = 15; m <= width; m = m + 50) {
            plinkos.push(new Plinko(m,300));
          }

          for (var n = 40; n <= width; n = n + 50) {
            plinkos.push(new Plinko(n,375));
          }

    Engine.run(engine);
}


function draw () {  
  rectMode(CENTER);  
    
   background(0,0,0);  
   Engine.update(engine);

     
    //display objects here
    ground.display();
    
    //display columns of divisions    
        for (var b = 0; b < divisions.length; b++) {
          divisions[b].display();
        }
    
     //create random particles
     if(frameCount % 70 === 0) {
      particles.push(new Particle(random(width/2-10, width/2+10),10,10));
    }

    //display particles
        for (var a = 0; a < particles.length; a++) {
          particles[a].display();
        }    

    //display rows of plinkos
        
        for (var n = 0; n < plinkos.length; n++) {
          plinkos[n].display();
        }

    //console.log(divisions);    
   

  drawSprites();
}

