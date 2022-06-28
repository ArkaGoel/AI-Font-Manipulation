noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.position(0, 110);
    canvas = createCanvas(550, 550);
    canvas.position(650, 110);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("PoseNet Inititalized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX= " + noseX + " noseY= " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("lefWristX= " + leftWristX + " rightWristX= " + rightWristX + " Difference= " + difference);
    }
}

function draw() {
    background('#A7F6FA');
    text("Arka", noseX, noseY);
    textSize(difference);
}