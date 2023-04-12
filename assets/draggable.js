
$(function () {
  var $parent = $(".parent");
  var $child = $(".child");
  var isDragging = false;

  $child.on("mousedown", function (e) {
    isDragging = true;
  });

  $parent.on("mousemove", function (e) {
    if (isDragging) {
      var x = e.clientX;
      var y = e.clientY;
      var parentRect = $parent[0].getBoundingClientRect();
      var maxX = parentRect.width - $child.outerWidth();
      var maxY = parentRect.height - $child.outerHeight();
      var posX = x - parentRect.left - $child.outerWidth() / 2;
      var posY = y - parentRect.top - $child.outerHeight() / 2;
      posX = Math.max(0, Math.min(posX, maxX));
      posY = Math.max(0, Math.min(posY, maxY));
      $child.css({
        left: posX + "px",
        top: posY + "px",
      });
    }
  });

  $parent.on("mouseup", function (e) {
    isDragging = false;
  });
});
