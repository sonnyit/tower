function Map() {
	this.level = 0;
	this.levelData;
	
	this.buffer = document.createElement("canvas");
	this.buffer.width = WIDTH;
	this.buffer.height = HEIGHT;
	this.context = this.buffer.getContext("2d");
	
	this.enemies;
};
