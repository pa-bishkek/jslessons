function Tank(id) {
    this.x = 0;
    this.y = 0;
    this.hp = 100;
    this.id = id;
    this.speed = 15;
    this.el = document.getElementById(id);
    this._printCoords = function() {
        console.log("My position: x:" + this.x + " y:" + this.y);
    };
    this._changeStyle = function() {
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
    };
    this._changePosition = function(axis, d) {
        next = this[axis] + d;
        if (next >= 0 && next <= 540) {
            this[axis] = next;
            this._changeStyle();
            this._printCoords();
        }
    };
    this.up = function() {
        this._changePosition("y", -1);
    };
    this.down = function() {
        this._changePosition("y", 1);
    };
    this.left = function() {
        this._changePosition("x", -1);
    };
    this.right = function() {
        this._changePosition("x", 1);
    };
    this._changeStyle();
}

var t = new Tank("tank1");

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
