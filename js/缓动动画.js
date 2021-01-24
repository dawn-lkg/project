function animate(obj, target) {
    this.obj = obj;
    this.target = target;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed=Math.ceil((target-obj.offsetLeft)/10)
        obj.style.left =obj.offsetLeft+speed + "px";
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
        }
    },15)
}