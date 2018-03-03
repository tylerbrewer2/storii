// target elements with the "draggable" class
interact('.draggable')
  .on('doubletap', function(e) {
    // enables contenteditable element to be edited
    // for some reason the element is *only* editable after being moved unless we handle this
    var div = document.getElementById('editor');
    setTimeout(function() {
        div.focus();
    }, 0);
  })
  .draggable({
    // enable inertial throwing, this makes the animation way smoother
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    onmove: dragMoveListener,
  });

  function dragMoveListener (e) {
    var target = e.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
