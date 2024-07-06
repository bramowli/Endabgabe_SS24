"use strict";
var Geistdiele;
(function (Geistdiele) {
    class Drawable {
        position;
        constructor(_position) {
            this.position = _position;
        }
    }
    Geistdiele.Drawable = Drawable;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Ingredient extends Geistdiele.Drawable {
        type;
        constructor(_type, _position) {
            super(_position);
            this.type = _type;
        }
        draw() { }
    }
    Geistdiele.Ingredient = Ingredient;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Background extends Geistdiele.Drawable {
        type;
        constructor(_type, _position) {
            super(_position);
            this.type = _type;
        }
        draw() {
            Geistdiele.crc2.fillStyle = "grey";
            Geistdiele.crc2.rect(0, 0, Geistdiele.crc2.canvas.width, Geistdiele.crc2.canvas.height);
        }
    }
    Geistdiele.Background = Background;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Door {
        state = false;
        constructor(_state) {
            this.state = _state;
        }
        draw() { }
        changeState() { }
    }
    Geistdiele.Door = Door;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Flavour extends Geistdiele.Ingredient {
        constructor(_type, _position) {
            super(_type, _position);
        }
        draw() { }
    }
    Geistdiele.Flavour = Flavour;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Ghost extends Geistdiele.Drawable {
        emotion = "happy";
        constructor(_position, _emotion) {
            super(_position);
            this.emotion = _emotion;
        }
        draw() { }
        move() { }
        order() { }
        changeEmotion() { }
    }
    Geistdiele.Ghost = Ghost;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class IceCream extends Geistdiele.Drawable {
        type;
        scoops;
        size;
        constructor(_type, _position, _scoops, _size) {
            super(_position);
            this.type = _type;
            this.scoops = _scoops;
            this.size = _size;
        }
        draw() {
            // draw ice cream
        }
    }
    Geistdiele.IceCream = IceCream;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    window.addEventListener("load", handleLoad);
    Geistdiele.canvas = document.querySelector("canvas");
    Geistdiele.crc2 = Geistdiele.canvas.getContext("2d");
    Geistdiele.canvas.addEventListener("click", handleClick);
    function handleLoad() { }
    ;
    function handleClick(_event) {
    }
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Sauce extends Geistdiele.Ingredient {
        constructor(_type, _position) {
            super(_type, _position);
        }
        draw() { }
    }
    Geistdiele.Sauce = Sauce;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Speechbubble extends Geistdiele.Drawable {
        text;
        mirror;
        constructor(_text, _position, _mirror) {
            super(_position);
            this.text = _text;
            this.mirror = _mirror;
        }
        draw() {
        }
    }
    Geistdiele.Speechbubble = Speechbubble;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Topping extends Geistdiele.Ingredient {
        constructor(_type, _position) {
            super(_type, _position);
        }
        draw() { }
    }
    Geistdiele.Topping = Topping;
})(Geistdiele || (Geistdiele = {}));
var Geistdiele;
(function (Geistdiele) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    Geistdiele.Vector = Vector;
})(Geistdiele || (Geistdiele = {}));
//# sourceMappingURL=build.js.map