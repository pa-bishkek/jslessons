function Tank(id) {
    this.x = 0;
    this.y = 0;
    this.hp = 100;
    this.id = id;
    this._printCoords = function() {
        console.log("My position: x:" + this.x + " y:" + this.y);
    };
    this.up = function() {
        this.y--;
        this._printCoords();
    };
    this.down = function() {
        this.y++;
        this._printCoords();
    };
    this.left = function() {
        this.x--;
        this._printCoords();
    };
    this.right = function() {
        this.x++;
        this._printCoords();
    };
}

var t = new Tank();

window.onkeydown = function(event) {
    switch (event.code) {
        case "KeyW":
            t.up();
            break;
        case "KeyA":
            t.left();
            break;
        case "KeyD":
            t.right();
            break;
        case "KeyS":
            t.down();
            break;
    }
};
