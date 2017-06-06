function $Dojo(object) {
  this.myobject = document.getElementById(object);
  this.click = function (callback) {
    this.myobject.addEventListener("click", callback)
  }
  this.hover = function (hoverin, hoverout) {
        this.myobject.addEventListener("mouseover", hoverin);
        this.myobject.addEventListener("mouseout", hoverout);
    };

    return this;
}
