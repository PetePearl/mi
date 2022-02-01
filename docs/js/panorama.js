"use strict";

(function () {
  var panorama = document.getElementById('panorama');

  var _panorama$getBounding = panorama.getBoundingClientRect(),
      panoramaX = _panorama$getBounding.x,
      panoramaY = _panorama$getBounding.y;

  var panoramaWidth = panorama.clientWidth;
  var panoramaHeight = panorama.clientHeight;
  var image = document.getElementById('panorama-image');
  var imageWidth = image.clientWidth;
  panorama.addEventListener('mousemove', parallaxHandler);
  window.addEventListener('resize', setVariables);
  /**
   * parallaxHandler
   * @param {MouseEvent} event
   */

  function parallaxHandler(event) {
    var _getMousePosition = getMousePosition(event),
        x = _getMousePosition.x,
        y = _getMousePosition.y,
        percentX = _getMousePosition.percentX,
        percentY = _getMousePosition.percentY;

    var differentWidth = imageWidth - panoramaWidth;
    console.log(percentX);
    var imageOffset = differentWidth * percentX;
    image.style.transform = "translateX(-".concat(imageOffset, "px)");
  }
  /**
   * @param {MouseEvent} event
   */


  function getMousePosition(event) {
    var x = Math.round(event.clientX - panoramaX);
    var y = Math.round(event.clientY - panoramaY);
    var percentX = x / panoramaWidth;
    var percentY = y / panoramaWidth;
    return {
      x: x,
      y: y,
      percentX: percentX,
      percentY: percentY
    };
  }

  function setVariables() {
    var _panorama$getBounding2 = panorama.getBoundingClientRect(),
        x = _panorama$getBounding2.x,
        y = _panorama$getBounding2.y;

    panoramaX = x;
    panoramaY = y;
    panoramaWidth = panorama.clientWidth;
    panoramaHeight = panorama.clientHeight;
    image.style.transform = '';
  }
})();