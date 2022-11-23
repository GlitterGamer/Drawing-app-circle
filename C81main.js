var mouseEvent = ""
var last_position_of_x, last_position_of_y
canvas = document.getElementById("my_Canvas")
ctx= canvas.getContext("2d")
color="red"
width_of_the_line=1
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    color= document.getElementById("color").value
    width_of_the_line=document.getElementById("width").value
    mouseEvent= "mousedown"
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e){
    current_pos_x= e.clientX-canvas.offsetLeft
    current_pos_y= e.clientY-canvas.offsetTop  
    if(mouseEvent=="mousedown"){
    
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_the_line
   ctx.arc(current_pos_x,current_pos_y,width_of_the_line,0,2*Math.PI)
    ctx.stroke()
    }
    last_position_of_x=current_pos_x
    last_position_of_y=current_pos_y
}


canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}

function clear_canvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}