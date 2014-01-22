function Game(canvas, context) {
	var map_;
	var timer_;
	
	function clear() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	};
	
	this.init = function() {
		map_ = new Map(canvas.width, canvas.height);
		this.newGame();
	};
	
	this.newGame = function() {
		map_.reset();
		timer_ = setInterval(update, 1000/FPS);
	};
	
	function draw() {
		clear();
		map_.draw(context);
	};
	
	function update() {
		map_.update();
		draw();
	};
};

function changeLink() {
	document.getElementById('myAnchor').innerHTML=MAPS[0].roadX[5];
};
