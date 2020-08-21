window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c = canvas.getContext("2d");
    // Rect
    c.fillStyle = "#fa34a3";
    c.fillRect(100, 100, 100, 100);
    c.fillRect(400, 100, 100, 100);
    c.fillRect(300, 300, 100, 100);
    console.log(canvas);

    // Line
    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 300);
    c.strokeStyle = "#fa34a3";
    c.stroke();

    // arc / circle
    for (var i = 0; i < 300; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }

};