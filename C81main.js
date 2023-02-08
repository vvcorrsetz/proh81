var element=document.getElementById("can")
var draw=element.getContext("2d")
draw.beginPath()
draw.strokeStyle="blue"
draw.lineWidth=5
draw.arc(40,60,20,0,2*Math.PI)
draw.stroke()

draw.beginPath()
draw.strokeStyle="yellow"
draw.lineWidth=5
draw.arc(65,80,20,0,2*Math.PI)
draw.stroke()

draw.beginPath()
draw.strokeStyle="black"
draw.lineWidth=5
draw.arc(89,60,20,0,2*Math.PI)
draw.stroke()

draw.beginPath()
draw.strokeStyle="green"
draw.lineWidth=5
draw.arc(40,60,20,0,2*Math.PI)
draw.stroke()

draw.beginPath()
draw.strokeStyle="red"
draw.lineWidth=5
draw.arc(40,60,20,0,2*Math.PI)
draw.stroke()

draw.beginPath()
draw.strokeStyle="red"
draw.lineWidth=1;
draw.rect(10,13,330,200)
draw.stroke()