// credits to tbuckley@ that provided the first implementation.

const canvas = document.querySelector("canvas");
//const canvas = document.createElement("canvas");
//const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d",
    {
        desynchronized: true,
        alpha: false
    });


function getPoint(e) {
  const rect = canvas.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

let point;

canvas.addEventListener("pointerdown", (e) => {
  point = getPoint(e);
});

canvas.addEventListener("pointermove", (e) => {
  if (!point)
    return;
  
  const events = e.getCoalescedEvents();
  
  events.forEach((e) => {
    const new_point = getPoint(e);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(new_point.x, new_point.y);
    ctx.stroke();
    point = new_point;
  });

});

canvas.addEventListener("pointerup", (e) => {
  point = null;
});

const angle = screen.orientation.angle % 360;
/*
//canvas.style.transform = `rotateZ(${angle}deg)`;
// 0.6
width = window.innerWidth;
// 0.8
height = window.innerHeight;

if (angle % 180 == 90) {
  canvas.width = height;
  canvas.height = width;
} else {
  canvas.width = width;
  canvas.height = height;
}
*/

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function clear_canvas() {
    ctx.fillStyle = 'white';
//  ctx.fillRect(0, 0, width, height);
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  // Don't use here ctx.clearRect() in combination with
  // chrome://flags/#tint-gl-composited-content because clearRect() uses
  // a transparent fill, and we'd be seeing the background.
}

clear_canvas();