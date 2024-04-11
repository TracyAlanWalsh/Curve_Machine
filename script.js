var myCanvas = document.getElementById("my_canvas");
var ctx = myCanvas.getContext("2d");

// Function to draw a curved line with rotation animation
function drawAnimatedCurve(startX, startY, len, angle, controlX, controlY, rotationFactor) {
    ctx.beginPath();
    ctx.save();

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180 * rotationFactor);

    // Draw a curved line instead of a straight line
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(controlX, controlY, controlX, controlY, 0, -len);

    if (len < 19) {
        ctx.restore();
        ctx.stroke(); // Stroke after defining the curve
        return;
    }

    drawAnimatedCurve(0, -len, len * 0.81, -15, controlX, controlY, rotationFactor);
    drawAnimatedCurve(0, -len, len * 0.81, +15, controlX, controlY, rotationFactor);

    ctx.restore();
}

// Function to clear canvas
function clearCanvas(canvas) {
    canvas.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

// Function for animation
function animate() {
    // Clear canvas
    clearCanvas(ctx);
    // Update rotation factor
    rotationFactor += 0.004;
    // Draw the curve with animation
    drawAnimatedCurve(centerX, centerY, 210, 0, 121, 111, rotationFactor);
    // Request animation frame
    requestAnimationFrame(animate);
}

// Initial setup
var centerX = 450;
var centerY = 700;
var rotationFactor = 1;

// Start animation
animate();
