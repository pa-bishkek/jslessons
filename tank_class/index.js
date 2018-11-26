function Tank(id, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.hp = 100;
    this.id = id;
    this.speed = 15;
    this.el = document.getElementById(id);
    this._changeStyle();
    this.addListener();
}
Tank.selected_tank = null;

Tank.prototype.addListener = function() {
    this.el.addEventListener(
        "click",
        function() {
            this._select();
        }.bind(this)
    );
    // document.addEventListener()
};

Tank.prototype._select = function() {
    Tank.selected_tank = this;
};

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
    this._changePosition("y", -this.speed);
};
Tank.prototype.down = function() {
    this._changePosition("y", this.speed);
};
Tank.prototype.left = function() {
    this._changePosition("x", -this.speed);
};
Tank.prototype.right = function() {
    this._changePosition("x", this.speed);
};

var t = new Tank("tank1");
var t2 = new Tank("tank2", 540, 0);
// t.__proto__ = Tank.prototype;
console.log(t);

window.onkeydown = function(event) {
    if (!Tank.selected_tank) return;
    switch (event.code) {
        case "KeyW":
            Tank.selected_tank.up();
            break;
        case "KeyA":
            Tank.selected_tank.left();
            break;
        case "KeyD":
            Tank.selected_tank.right();
            break;
        case "KeyS":
            Tank.selected_tank.down();
            break;
    }
};
