noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('http://i.postimg.cc/csty8224/6780768-preview.png');
}

function setup(){
    canvas = createcanvas(300,300);
    canvas.center();
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPose)
}
function draw(){
    image(video,0,0,300,300)
    image(clown_nose,noseX,noseY,28,28)
}

function take_snapshot(){
    save('red-nose.png');
}
function gotPose(results){
    if(results.lenth > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x ="+noseX);
        console.log("nose x ="+noseY);
    }
}
