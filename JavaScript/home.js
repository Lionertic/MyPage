const data = {
    elems: document.querySelectorAll("#target ul li"),
    mouse: document.getElementById("mouse"),
    colors: ["rgb(41,29,53)", "rgb(88,75,79)", "rgb(102,75,0)", "rgb(41,61,61)"],
    lis: [],
    scaleVal: 1,
    maxScale: 10,
    bigger: !1,
    mouseOpac: 1,
    edge: 20,
    mx: innerWidth / 2,
    my: innerHeight / 2,
    mEase: 0.3,
    pointer: {
        x: innerWidth / 2,
        y: innerHeight / 2
    }
};
class Control {
    constructor(thedata) {
        for (let k in thedata) {
            this[k] = data[k]
        }
    }
    set pointerVal(valObj) {
        this.pointer.x = valObj.x;
        this.pointer.y = valObj.y
    }
    set mouseColor(color) {
        this.mouse.style.backgroundColor = color
    }
    get mouseVal() {
        return {
            x: this.mx,
            y: this.my
        }
    }
    static transform(tar, x, y, sval) {
        tar.style.transform = `translate(${x}px,${y}px) scale(${sval})`
    }
    static getDist(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
    }
    init() {
        for (let i = 0; i < this.elems.length; i++) {
            this.lis.push(new Lis(this.elems[i], this.colors[i]));
            this.lis[i].init();
            this.lis[i].el.addEventListener("click", () => {
                this.mouse.classList.toggle("click");
                setTimeout(() => {
                    this.mouse.classList.remove("click")
                }, 1000)
            })
        }
    }
    render() {
        this.mx += (this.pointer.x - this.mx) * this.mEase;
        this.my += (this.pointer.y - this.my) * this.mEase;
        if (this.mx <= this.edge || this.mx >= innerWidth - this.edge || this.my <= this.edge || this.my >= innerHeight - this.edge) {
            this.mouseOpac += -this.mouseOpac * 0.2
        } else {
            this.mouseOpac += (1 - this.mouseOpac) * 0.2
        }
        for (let i = 0; i < this.lis.length; i++) {
            let dist = Control.getDist(this.mx, this.my, this.lis[i].center.x, this.lis[i].center.y);
            if (dist < this.lis[i].r) {
                this.bigger = !0;
                break
            } else {
                this.bigger = !1;
                this.mouseColor = "#ff8080"
            }
        }
        if (this.bigger) {
            this.scaleVal += (this.maxScale - this.scaleVal) * 0.2
        } else {
            this.scaleVal += (1 - this.scaleVal) * 0.2
        }
        this.mouse.style.opacity = this.mouseOpac;
        Control.transform(this.mouse, this.mx, this.my, this.scaleVal);
        this.lis.forEach(e => e.render())
    }
}
class Lis {
    constructor(el, color) {
        this.el = el;
        this.color = color;
        this.r = 35;
        this.center = {}
    }
    init() {
        let rect = this.el.getBoundingClientRect();
        this.center.x = rect.left + rect.width / 2;
        this.center.y = rect.top + rect.height / 2;
        this.dx = this.center.x;
        this.dy = this.center.y
    }
    render() {
        let dist = Control.getDist(controler.mouseVal.x, controler.mouseVal.y, this.center.x, this.center.y);
        if (dist < this.r) {
            controler.mouseColor = this.color;
            this.dx += (controler.mouseVal.x - this.dx) * 0.1;
            this.dy += (controler.mouseVal.y - this.dy) * 0.1
        } else {
            this.dx += (this.center.x - this.dx) * 0.1;
            this.dy += (this.center.y - this.dy) * 0.1
        }
        Control.transform(this.el, this.dx - this.center.x, this.dy - this.center.y, 1)
    }
}
const controler = new Control(data);
window.addEventListener("mousemove", e => {
    controler.pointerVal = {
        x: e.clientX,
        y: e.clientY
    }
});
window.addEventListener("touchmove", e => {
    e.preventDefault();
    controler.pointerVal = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
    }
});
window.addEventListener("load", () => controler.init());
window.addEventListener("resize", () => {
    controler.lis.forEach(e => e.init())
});
const run = () => {
    requestAnimationFrame(run);
    controler.render()
};
run()
