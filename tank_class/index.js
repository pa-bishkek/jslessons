function Tank(id, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.hp = 100;
    this.id = id;
    this.speed = 15;
    this.el = document.getElementById(id);
    this._changeStyle();
}

Tank.prototype._printCoords = function() {
    console.log("My position: x:" + this.x + " y:" + this.y);
};
Tank.prototype._changeStyle = function() {
    this.el.style.left = this.x + "px";
    this.el.style.top = this.y + "px";
};
Tank.prototype._changePosition = function(axis, d) {
    next = this[axis] + d;
    if (next >= 0 && next <= 540) {
        this[axis] = next;
        this._changeStyle();
        this._printCoords();
    }
};
Tank.prototype.up = function() {
    this._changePosition("y", -1);
};
Tank.prototype.down = function() {
    this._changePosition("y", 1);
};
Tank.prototype.left = function() {
    this._changePosition("x", -1);
};
Tank.prototype.right = function() {
    this._changePosition("x", 1);
};

var t = new Tank("tank1");
var t2 = new Tank("tank2", 540, 0);
// t.__proto__ = Tank.prototype;
console.log(t);

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
