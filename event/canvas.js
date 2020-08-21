window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c = canvas.getContext("2d");

    var mouse = {
        x: undefined,
        y: undefined,
    }

    var maxRadius = 40;
    var minRadius = 2;

    var colorArray = [
        '#ffaa33',
        '#99ffaa',
        '#00ff00',
        '#4411aa',
        '#ff1100',
    ]

    window.addEventListener('mousemove',
        function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
        }
    )

    function Circle(x, y, dx, dy, radius) {
        this.x  = x;
        this.y  = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.maxRadius = maxRadius;
        this.minRadius = minRadius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }

        this.update = function() {
            if (this.x + this.radius> innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.radius> innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            // interactivity
            if (mouse.x - this.x < 50 && mouse.x- this.x > -50
                && mouse.y - this.y < 50 && mouse.y- this.y > -50) {
                if (this.radius < this.maxRadius) {
                    this.radius += 1;
                }
            } else if(this.radius > this.minRadius){
                this.radius -= 1;
            }
            this.draw();
        }
    }

    var circleArray = [];

    for (var i = 0; i < 400; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));  
    }

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight)
        
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }

    }
    animate();
};