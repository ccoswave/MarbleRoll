
var canvas = document.getElementById('surf');
var ctx = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;

var sin = Math.sin;
var cos = Math.cos;
var angle = Math.atan2;
var sqrt = Math.sqrt
var pow = Math.pow;
var rand = Math.random;
var pi = Math.PI;
var tau = Math.PI*2;
var floor = Math.floor;
var abs = Math.abs;

function pointDir (x0,y0,x1,y1) {
  return angle(x1-x0,y0-y1);}

function pointDist (x0,y0,x1,y1) {
  return sqrt((x0-x1)*(x0-x1)+(y0-y1)*(y0-y1));}

function dist (obj1,obj2) {
  return pointDist(obj1.x,obj1.y,obj2.x,obj2.y);}


var k_up = false
var k_down = false
var k_left = false
var k_right = false
var k_ctrl = false
var k_A = false
var k_B = false
var k_C = false

var k_ctrl_down = false
var k_A_down = false

function resetKeys () {
  k_ctrl_down = false
  k_A_down = false
}

function keydown(evt) {
  console.log('key: ',evt.key)
  if (evt.key == '1') {render_mode = 0}
  if (evt.key == '2') {render_mode = 1}
  if (evt.key == 'ArrowUp') {k_up = true}
  if (evt.key == 'ArrowDown') {k_down = true}
  if (evt.key == 'ArrowLeft') {k_left = true}
  if (evt.key == 'ArrowRight') {k_right = true}
  if (evt.key == 'Shift') {
    k_A = true
    k_A_down = true}
  if (evt.key == 'z'&&!k_B) {
    k_B = true
    cam.spin = (cam.spin+0.5)%4}
  if (evt.key == 'x'&&!k_C) {
    k_C = true
    cam.spin = (cam.spin+3.5)%4}
  if (evt.key == 'Control'&&!k_ctrl) {
    k_ctrl = true
    k_ctrl_down = true}}
window.addEventListener('keydown',keydown,false)


function keyup(evt) {
  if (evt.key == 'ArrowUp') {k_up = false}
  if (evt.key == 'ArrowDown') {k_down = false}
  if (evt.key == 'ArrowLeft') {k_left = false}
  if (evt.key == 'ArrowRight') {k_right = false}
  if (evt.key == 'Shift') {k_A = false}
  if (evt.key == 'z') {k_B = false}
  if (evt.key == 'x') {k_C = false}
  if (evt.key == 'Control') {k_ctrl = false}}
window.addEventListener('keyup',keyup,false)

// sounds
var audio = new Audio('wntic.wav');

// images
var isotile = new Image();
isotile.src = "isoblock.png";
var partile = new Image();
partile.src = "parblock.png"
var balltile = new Image();
balltile.src = "ball.png"



function rr() {
  rn = Math.floor(Math.random()*3.5)
  if (rn>1) {rn=1}
  return rn}

function Map (w,h) {
  this.tsize = 24
  this.w = w; this.h = h
  this.mtx = []
  for (n=0;n<this.w*this.h;n++) {
    this.mtx.push(rr())}}
Map.prototype.check = function (x,y) {
  if (x<=this.w*this.tsize&&y<=this.h*this.tsize&&x>=0&&y>=0) {
    if (this.mtx[Math.floor(x/this.tsize)+Math.floor(y/this.tsize)*this.w]) {return true} else {return false}}
  else {
    return false}}
Map.prototype.render = function () {
  tsize = this.tsize
  for (n=0;n<this.w*this.h;n++) {
    ctx.fillStyle = '#222288'
    ctx.strokeStyle = '#000000'
    if (this.mtx[n]) {ctx.fillRect(
                      cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
                      sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+(W-tsize)/2,
                      (cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+
                      sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2))/2+(H-tsize/3)/2,  tsize,tsize)}
    if (this.mtx[n]) {ctx.strokeRect(
                      cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
                      sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+(W-tsize)/2,
                      (cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+
                      sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2))/2+(H-tsize/3)/2,  tsize,tsize)}}}
Map.prototype.render2 = function () {
  for (n=0;n<this.w*this.h;n++) {
    ctx.fillStyle = '#222288'
    ctx.strokeStyle = '#000000'
    y = floor(n/this.w)*this.w
    xshift = 0
    yshift = 0
    if (cam.spin<=1) {
      npos = n
    } else if (cam.spin<2) {
      npos = map.mtx.length-y+(n-y)
      xshift = 23
      yshift = 10
    } else if (cam.spin<3) {
      npos = map.mtx.length-n-1
      if (cam.spin%1==0.5) {
        xshift = 13} else {yshift = -8}
    } else if (cam.spin<4) {
      npos = y+this.w-(n-y)-1
      yshift = -8
      if (cam.spin%1==0.5) {
        xshift = 6
        yshift = 4}
    } else {npos = n}
    
    if (this.mtx[npos]) {
      if ((cam.spin*2)%2==0) {
        tsize = 24
        xsize = 24
        ysize = 16
        ctx.strokeStyle = '#ffffff'
        //ctx.strokeRect(
         //                 cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
         //       sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+(W-tsize)/2,
         //      (cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+
          // sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2))/2+(H-tsize/3)/2,  tsize,tsize)
        ctx.drawImage(
          partile,
          0,0,    //x,y on tiles
          33,33,  //w,h on tiles
                     cos(cam.spin*pi/2)*((npos%this.w)*tsize-marble.x+tsize/2)+xshift-
           sin(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-marble.y+tsize/2)+W/2-tsize/2-1,
          (cos(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-marble.y+tsize/3)+yshift+
                     sin(cam.spin*pi/2)*((npos%this.w)*tsize-marble.x+tsize/3))/2+H/2-tsize/4+2,    //x,y on canvas
          33,33)}
      else if ((cam.spin*2)%2==1) {
        tsize = 23
        xsize = 33
        ysize = 15
        ctx.drawImage(
          isotile,
          0,0,    //x,y on tiles
          33,33,  //w,h on tiles
                     cos(cam.spin*pi/2)*((npos%this.w)*tsize-marble.x+xsize/2)+xshift-
           sin(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-marble.y+ysize/2)+W/2-tsize, 
          (cos(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-marble.y+ysize/2)+yshift+
                     sin(cam.spin*pi/2)*((npos%this.w)*tsize-marble.x+xsize/2))/2+H/2-tsize/3,    //x,y on canvas
          33,33)}
      }
    if (Math.floor(marble.x/24)%this.w+
        Math.floor(marble.y/24)*this.w ==n&&marble.z<0) {marble.render2()}
    //if (this.mtx[n]) {ctx.fillRect(
    //                  cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
    //                  sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+(W-tsize)/2,
    //                  cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.y+tsize/2)+
    //                  sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)+(H-tsize)/2,  tsize,tsize)}
    }
    if (marble.z>=0) {marble.render2()}}





function Controller() {
  this.move = [0,0]
  this.jump = 0
  this._A = 0}
Controller.prototype.update = function () {
  this.move = [0,0]
  this.jump = 0
  this._A = 0
  if (k_up) {this.move[1]=-1}
  if (k_down) {this.move[1]=1}
  if (k_left) {this.move[0]=-1}
  if (k_right) {this.move[0]=1}
  if (k_ctrl) {this.jump = 1}
  if (k_A_down) {this._A = 1}
  }


function Marble(inputs) {
  this.type = 'Marble'
  this.ctrl = inputs
  this.x = 12//map.tsize*map.w-12
  this.y = 12//map.tsize*map.h-12
  this.xsp = 0
  this.ysp = 0
  this.z = 0
  this.zsp = 0
  this.strike = 0
  this.health = 100}
Marble.prototype.update = function () {
  this.ctrl.update()
  this.xsp += (cos(cam.spin*pi/2)*this.ctrl.move[0] + sin(cam.spin*pi/2)*this.ctrl.move[1])*0.5
  this.ysp += (cos(cam.spin*pi/2)*this.ctrl.move[1] - sin(cam.spin*pi/2)*this.ctrl.move[0])*0.5
  this.x += this.xsp
  this.y += this.ysp
  this.xsp = this.xsp/1.1
  this.ysp = this.ysp/1.1
  if (this.strike>0) {this.strike--}
  //if (this.strike==0) {
  if (this.ctrl._A) {
    audio.play();
    this.strike = 16}
  chk = map.check(this.x,this.y)
  if (this.z==0&&chk) {
    if (this.ctrl.jump) {this.zsp = 10}}
  else if (this.z>0||!chk) {this.zsp--} 
  this.z += this.zsp
  if (this.z<0&&chk) {
    this.zsp=0
    this.z=0}
  if (this.z<-100) {reset()}
  for (oc=0;oc<objects.length;oc++) {
    tgt = objects[oc]
    if (tgt!=this&&tgt.strike==16&&dist(this,tgt)<=32) {this.health-=10}}
  
  for (oc=0;oc<objects.length;oc++) {
    if (objects[oc]!=this) {
      if (objects[oc].type=='drone') {
        if (abs(objects[oc].x-this.x)<16
          &&abs(objects[oc].y-this.y)<16) {}}}}
  if (this.health<=0) {this.x=0;this.y=0;reset()}}
Marble.prototype.render = function () {
  ctx.fillStyle = '#8888ff'
  ctx.beginPath();
  ctx.arc(H/2,W/2-this.z-5,10,0,2*Math.PI);
  ctx.fill()
  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.arc(H/2,W/2-this.z-5,10+this.strike,0,2*Math.PI);
  ctx.stroke()}
Marble.prototype.render2 = function () {
  ctx.drawImage(
    balltile,
    0,0,    //x,y on tiles
    17,17,  //w,h on tiles
    W/2-9,H/2-14-this.z,    //x,y on canvas
    17,17)
  ctx.fillStyle = '#000000'}
  //ctx.fillRect(W/2-2,H/2-2-this.z,4,4)}

function Camera() {
  this.spin = 0
  this.x = 0}
function update_renderlist () {
  }



function reset() {
  console.log('reset')
  cam = new Camera()
  map = new Map(64,64)
  objects = []  
  marble = new Marble(new Controller())  
  objects.push(marble)
  }

reset()
var t=0

var renderlist = []
var render_mode = 1
var map = new Map(8,8)
var cam = new Camera()
var marble = new Marble(new Controller())
var objects = []
objects.push(marble)

function execute () {
  function loop () {
    ctx.lineCap = 'round';
    ctx.lineWidth = 2
    ctx.strokeStyle = '#332722'
    ctx.fillStyle = '#332722'
    ctx.clearRect(0,0,W,H)
    ctx.strokeRect(0,0,W,H)
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(W/2,0)
    ctx.lineTo(W/2,H)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0,H/2)
    ctx.lineTo(W,H/2)
    ctx.stroke()
    ctx.fillStyle = '#ffffff'
    ctx.fillText(cam.spin.toString(),16,16)

    ctx.strokeStyle = '#665544'
    ctx.font = "12pt courier";
    for (o=0;o<objects.length;o++) {
      objects[o].update()}


    if (render_mode==0) {
      marble.render()
      map.render()
      if (marble.z>=0) {marble.render()}}
    else if (render_mode==1) {
      //cam.spin = 0.5
      
      map.render2()
      //marble.render2()
      //map.render()
      //ctx.drawImage(
      //  tile,
      //  0,0,    //x,y on tiles
      //  33,33,  //w,h on tiles
      //  16,16,    //x,y on canvas
      //  33,33)
    }
    //for (o=0;o<objects.length;o++) {
      //objects[o].render()}
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 0.5
    ctx.moveTo(W/2,0)
    ctx.lineTo(W/2,H)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0,H/2)
    ctx.lineTo(W,H/2)
    ctx.stroke()
    resetKeys()

    t++
    setTimeout(loop,30)}
  loop()
}
execute()
        