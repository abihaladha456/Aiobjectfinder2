Status="";
function setup(){
canvas=createCanvas(480 , 380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function start(){
    objectDetector=ml5.objectDetector("cocossd" , modelLoaded);
  document.getElementById("status").innerHTML="Status : detecting objects";
  textbox=document.getElementById("textbox").value;
}
function modelLoaded(){
    console.log("modelLoaded");
    Status=true;
}
function draw(){
    image(video , 0 , 0 , 480 , 380);
}