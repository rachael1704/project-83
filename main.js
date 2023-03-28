var mouseEvent = ""

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 3;

canvas.addEventListener("mouseDown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

console.log("X = " + mouse_x + ", Y = " + mouse_y);
circle(mouse_x, mouse_y)
}

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postition_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("touchstart", my_touchstart);

    function my_touchstart(e) 
    {
        console.log("my_touchstart");
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;
          
      last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
  }

  canvas.addEventListener("touchmove", my_touchmove);
  
  function my_touchmove(e) 
  {
    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
  
}