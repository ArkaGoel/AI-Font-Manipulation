function setup() {
    video = createCapture(VIDEO);
    video.position(0, 110);
    canvas = createCanvas(550, 550);
    canvas.position(650, 110);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses)
}

function modelLoaded() {
    console.log("PoseNet Inititalized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
function draw(){
    background('#A7F6FA');
}