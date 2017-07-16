function level_random_large() {
  console.log('reset')
  cam = new Camera()
  map = new Map(64,64)
  objects = []  
  marble = new Marble(32,32,new Controller())  
  objects.push(marble)
}


function level_0() {
  mtx = [1,1,1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1]
  console.log('reset')
  cam = new Camera()
  cam.spin = 2.5
  map = new Map(12,4)
  map.mtx = mtx
  objects = []  
  marble = new Marble(32,32,new Controller())
  goal = new Goal(11,3)  
  objects.push(marble)}

function level_1() {
  mtx = [1,1,1,1,1,1,0,0,0,0,
         1,1,1,1,1,1,1,0,0,0,
         1,1,1,0,0,1,1,0,0,0,
         1,1,0,0,0,1,1,1,1,0,
         1,1,0,0,0,1,1,1,1,1,
         1,1,1,1,1,0,0,0,1,1,
         0,1,1,1,1,0,0,0,1,1,
         0,0,0,1,1,0,0,1,1,1,
         0,0,0,1,1,1,1,1,1,1,
         0,0,0,0,1,1,1,1,1,1,]
  console.log('reset')
  cam = new Camera()
  cam.spin = 2.5
  map = new Map(10,10)
  map.mtx = mtx
  objects = []  
  marble = new Marble(32,32,new Controller())
  goal = new Goal(8,8)  
  objects.push(marble)}

function level_2() {
  mtx = [1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,
         0,0,0,0,0,0,0,0,1,1,
         0,0,0,0,0,0,0,0,1,1,
         1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,
         1,1,0,0,0,0,0,0,0,0,
         1,1,0,0,0,0,0,0,0,0,
         1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,
         0,0,0,0,0,0,0,1,1,1]
  console.log('reset')
  cam = new Camera()
  cam.spin = 2.5
  map = new Map(10,11)
  map.mtx = mtx
  objects = []  
  marble = new Marble(64,64,new Controller())
  goal = new Goal(8,9)  
  objects.push(marble)}

function level_3() {
  mtx = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
         1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,
         1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,
         1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
         1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,
         1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
         1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
         1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  console.log('reset')
  cam = new Camera()
  cam.spin = 2.5
  map = new Map(23,21)
  map.mtx = mtx
  objects = []  
  marble = new Marble(64*22,64,new Controller())
  goal = new Goal(9,9)  
  objects.push(marble)}
function level_7() {
  mtx = [1,1,0,0,0,0,0,0,
         1,1,1,1,1,1,0,0,
         0,0,0,0,0,0,0,0,
         0,0,0,0,0,1,0,0,
         1,1,1,0,0,1,1,1,
         1,0,0,0,0,0,0,0,
         1,0,0,0,0,0,0,1,
         1,0,0,0,1,1,1,1,
         0,1,0,0,0,0,0,0,
         0,0,1,1,1,0,0,0]
  console.log('reset')
  cam = new Camera()
  cam.spin = 2.5
  map = new Map(8,10)
  map.mtx = mtx
  objects = []  
  marble = new Marble(64+32,64+32,new Controller())  
  objects.push(marble)
}




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
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
  return pointDist(obj1.x,obj1.z,obj2.x,obj2.z);}


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
var img_goal = new Image();
img_goal.src = "goal.png";
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
  this.rgrid = 64
  this.tsize = 24
  this.w = w; this.h = h
  this.mtx = []
  for (n=0;n<this.w*this.h;n++) {
    this.mtx.push(rr())}}
Map.prototype.check = function (x,y,z) {
  if (x<=this.w*this.rgrid&&z<=this.h*this.rgrid&&x>=0&&z>=0) {
    if (this.mtx[Math.floor(x/this.rgrid)+Math.floor(z/this.rgrid)*this.w]&&y<0) {return true} else {return false}}
  else {
    return false}}
Map.prototype.render = function () {
  tsize = this.tsize
  for (n=0;n<this.w*this.h;n++) {
    ctx.fillStyle = '#222288'
    ctx.strokeStyle = '#000000'
    if (this.mtx[n]) {ctx.fillRect(
                      cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
                      sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+(W-tsize)/2,
                     (cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+
                      sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2))/2+(H-tsize/3)/2,  tsize,tsize)}
    if (this.mtx[n]) {ctx.strokeRect(
                      cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
                      sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+(W-tsize)/2,
                     (cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+
                      sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2))/2+(H-tsize/3)/2,  tsize,tsize)}}}
Map.prototype.render2 = function () {
  rgrid = this.rgrid
  for (n=0;n<this.w*this.h;n++) {
    ctx.fillStyle = '#222288'
    ctx.strokeStyle = '#000000'
    z = floor(n/this.w)*this.w
    xshift = 0
    zshift = 0
    if (cam.spin<=1) {
      npos = n
    } else if (cam.spin<=1.5) {
      npos = map.mtx.length-2*z+n-this.w
      xshift = 7
      zshift = -6
    } else if (cam.spin<2) {
      npos = map.mtx.length-2*z+n
      xshift = 23
      zshift = 10
    } else if (cam.spin<3) {
      npos = map.mtx.length-n-1
      if (cam.spin%1==0.5) {
        xshift = 13} else {zshift = -8}
    } else if (cam.spin<4) {
      npos = z+this.w-(n-z)-1
      zshift = -8
      if (cam.spin%1==0.5) {
        xshift = 6
        zshift = 4}
    } else {npos = n}
    
    if (this.mtx[npos]) {
      if ((cam.spin*2)%2==0) {
        tsize = 24
        xsize = 24
        zsize = 16
        ctx.strokeStyle = '#ffffff'
        //ctx.strokeRect(
         //                 cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
         //       sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+(W-tsize)/2,
         //      (cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+
          // sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2))/2+(H-tsize/3)/2,  tsize,tsize)
        ctx.drawImage(
          partile,
          0,0,    //x,y on tiles
          33,33,  //w,h on tiles
                     cos(cam.spin*pi/2)*((npos%this.w)*tsize-(tsize*marble.x/rgrid)+tsize/2)+xshift-
           sin(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-(tsize*marble.z/rgrid)+tsize/2)+W/2-tsize/2-1,
          (cos(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-(tsize*marble.z/rgrid)+tsize/3)+zshift+
                     sin(cam.spin*pi/2)*((npos%this.w)*tsize-(tsize*marble.x/rgrid)+tsize/3))/2+H/2-tsize/4+2,    //x,y on canvas
          33,33)}
      else if ((cam.spin*2)%2==1) {
        tsize = 23
        xsize = 33
        zsize = 15
        ctx.drawImage(
          isotile,
          0,0,    //x,y on tiles
          33,33,  //w,h on tiles
                     cos(cam.spin*pi/2)*((npos%this.w)*tsize-(tsize*marble.x/rgrid)+xsize/2)+xshift-
           sin(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-(tsize*marble.z/rgrid)+zsize/2)+W/2-tsize, 
          (cos(cam.spin*pi/2)*(Math.floor(npos/this.w)*tsize-(tsize*marble.z/rgrid)+zsize/2)+zshift+
                     sin(cam.spin*pi/2)*((npos%this.w)*tsize-(tsize*marble.x/rgrid)+xsize/2))/2+H/2-tsize/3,    //x,y on canvas
          33,33)}
      if (n==goal.h+goal.v*map.w) {goal.render()}
      }
    
    //if (this.mtx[n]) {ctx.fillRect(
    //                  cos(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)-
    //                  sin(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+(W-tsize)/2,
    //                  cos(cam.spin*pi/2)*(Math.floor(n/this.w)*tsize-marble.z+tsize/2)+
    //                  sin(cam.spin*pi/2)*((n%this.w)*tsize-marble.x+tsize/2)+(H-tsize)/2,  tsize,tsize)}
    }
    //if (Math.floor(marble.x/rgrid)%this.w+
    //    Math.floor(marble.z/rgrid)*this.w ==n&&marble.y<0) {
      
    //}
    goal.render()
      if (marble.y>=-0.1) {marble.render2()}
  }





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

function Goal(h,v) {
  this.h = h
  this.v = v}
Goal.prototype.render = function() {
  rgrid = 64
  ctx.fillStyle = '#222288'
  ctx.strokeStyle = '#000000'
  y = floor(n/map.w)*map.w
  xshift = 0
  zshift = 0
  if (cam.spin<=1) {
  } else if (cam.spin<=1.5) {
    xshift = 7
    zshift = -6
  } else if (cam.spin<2) {
    xshift = 23
    zshift = 10
  } else if (cam.spin<3) {
    if (cam.spin%1==0.5) {
      xshift = 13} else {zshift = -8}
  } else if (cam.spin<4) {
    zshift = -8
    if (cam.spin%1==0.5) {
      xshift = 6
      zshift = 4}
  } else {npos = n}
  
  //if (1) {
    //ctx.fillRect(0,0,32,32)
  if ((cam.spin*2)%2==0) {
    tsize = 24
    xsize = 24
    zsize = 16
    ctx.strokeStyle = '#ffffff'
    ctx.drawImage(
      img_goal,
      (t%2)*33,0,    //x,y on tiles
      33,33,  //w,h on tiles
                 cos(cam.spin*pi/2)*((this.h)*tsize-(tsize*marble.x/rgrid)+tsize/2)-4+xshift-
       sin(cam.spin*pi/2)*(Math.floor(this.v)*tsize-(tsize*marble.z/rgrid)+tsize/2)+W/2-tsize/2-1,
      (cos(cam.spin*pi/2)*(Math.floor(this.v)*tsize-(tsize*marble.z/rgrid)+tsize/3)-4+zshift+
                 sin(cam.spin*pi/2)*((this.h)*tsize-(tsize*marble.x/rgrid)+tsize/3))/2+H/2-tsize/4+2,    //x,y on canvas
      33,33)}
  else if ((cam.spin*2)%2==1) {
    tsize = 23
    xsize = 33
    zsize = 15
      ctx.drawImage(
        img_goal,
        (t%2)*33,0,    //x,y on tiles
        33,33,  //w,h on tiles
                   cos(cam.spin*pi/2)*((this.h)*tsize-(tsize*marble.x/rgrid)+xsize/2)+xshift-
         sin(cam.spin*pi/2)*(Math.floor(this.v)*tsize-(tsize*marble.z/rgrid)+zsize/2)+W/2-tsize, 
        (cos(cam.spin*pi/2)*(Math.floor(this.v)*tsize-(tsize*marble.z/rgrid)+zsize/2)+zshift+
                   sin(cam.spin*pi/2)*((this.h)*tsize-(tsize*marble.x/rgrid)+xsize/2))/2+H/2-tsize/3,    //x,y on canvas
        33,33)
   
    }
    
    }

function Marble(x,z,inputs) {
  this.type = 'Marble'
  this.ctrl = inputs
  this.x = x//map.tsize*map.w-12
  this.z = z//map.tsize*map.h-12
  this.xsp = 0
  this.zsp = 0
  this.y = 10
  this.ysp = 0
  this.strike = 0
  this.health = 100}
Marble.prototype.update = function () {
  this.ctrl.update()
  this.xsp += (cos(cam.spin*pi/2)*this.ctrl.move[0] + sin(cam.spin*pi/2)*this.ctrl.move[1])*1.5
  this.zsp += (cos(cam.spin*pi/2)*this.ctrl.move[1] - sin(cam.spin*pi/2)*this.ctrl.move[0])*1.5
  
  if (map.check(this.x,this.y-1,this.z)&&!map.check(this.x,this.y,this.z)) {
    if (this.ctrl.jump) {this.ysp = 6}} // jump
  else { // fall
    this.ysp--} 
  this.xsp = this.xsp/1.1
  this.zsp = this.zsp/1.1

  this.xc=0; this.yc=0; this.zc=0//collision correction
  if (map.check(this.x+this.xsp,this.y+this.ysp,this.z+this.zsp)) {
    this.xc=this.xsp
    this.yc=this.ysp
    this.zc=this.zsp
    abs = sqrt(pow(this.xc,2)+pow(this.yc,2)+pow(this.zc,2))
    nrmx = this.xc/abs
    nrmy = this.yc/abs
    nrmz = this.zc/abs
    while (map.check(this.x+this.xc,this.y+this.yc,this.z+this.zc)) {
      this.xc-=nrmx
      this.yc-=nrmy
      this.zc-=nrmz}
    if (map.check(this.x+this.xsp,this.y,this.z)) {this.xsp=0}
    if (map.check(this.x,this.y+this.ysp,this.z)) {this.ysp=0}
    if (map.check(this.x,this.y,this.z+this.zsp)) {this.zsp=0}}
  this.x+=this.xc
  this.y+=this.yc
  this.z+=this.zc

  this.x += this.xsp
  this.y += this.ysp
  this.z += this.zsp

  // respawn after falling
  if (this.y<-100) {reload()}

  // next level at goal
  if (floor(this.x/64)==goal.h&&floor(this.z/64)==goal.v) {
    level++
    reload()}}
Marble.prototype.render = function () {
  ctx.fillStyle = '#8888ff'
  ctx.beginPath();
  ctx.arc(H/2,W/2-this.y-5,10,0,2*Math.PI);
  ctx.fill()
  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.arc(H/2,W/2-this.y-5,10+this.strike,0,2*Math.PI);
  ctx.stroke()}
Marble.prototype.render2 = function () {
  ctx.drawImage(
    balltile,
    0,0,    //x,y on tiles
    17,17,  //w,h on tiles
    W/2-9,H/2-14-this.y,    //x,y on canvas
    17,17)
  ctx.fillStyle = '#000000'}
  //ctx.fillRect(W/2-2,H/2-2-this.y,4,4)}



function Camera() {
  this.spin = 0.5
  this.x = 0}
function update_renderlist () {
  }



function reset() {
  console.log('xxxreset')
  cam = new Camera()
  map = new Map(16,16)
  objects = []  
  marble = new Marble(32,32,new Controller())  
  objects.push(marble)}

function reload() {
       if (level == 0) {level_0()} 
  else if (level == 1) {level_1()}
  else if (level == 2) {level_2()}
  else if (level == 3) {level_3()}
  else if (level == 4) {level_4()}
  else if (level == 5) {level_5()}
  else if (level == 6) {level_6()}
  else if (level == 7) {level_7()}
}

reset()
var t=0
var level = 0
var controller = new Controller()
var renderlist = []
var render_mode = 1
var map = new Map(8,8)
var cam = new Camera()
var marble = new Marble(32,32,controller)
var objects = []
objects.push(marble)

level_0()

function execute () {
  function loop () {
    ctx.lineCap = 'round';
    ctx.lineWidth = 2
    ctx.strokeStyle = '#332722'
    ctx.fillStyle = '#332722'
    ctx.clearRect(0,0,W,H)
    ctx.strokeRect(0,0,W,H)
    ctx.lineWidth = 2
    //ctx.beginPath()
    //ctx.moveTo(W/2,0)
    //ctx.lineTo(W/2,H)
    //ctx.stroke()
    //ctx.beginPath()
    //ctx.moveTo(0,H/2)
    //ctx.lineTo(W,H/2)
    //ctx.stroke()
    //ctx.fillStyle = '#ffffff'
    //ctx.fillText(marble.x.toString(),16,16)
    //ctx.fillText(marble.z.toString(),16,32)

    ctx.strokeStyle = '#665544'
    ctx.font = "12pt courier";
    for (o=0;o<objects.length;o++) {
      objects[o].update()}


    if (render_mode==0) {
      marble.render()
      map.render()
      if (marble.y>=0) {marble.render()}}
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
    //ctx.moveTo(W/2,0)
    //ctx.lineTo(W/2,H)
    //ctx.stroke()
    //ctx.beginPath()
    //ctx.moveTo(0,H/2)
    //ctx.lineTo(W,H/2)
    //ctx.stroke()
    ctx.fillStyle = '#ffffff'
    ctx.font = "12pt courier";
    ctx.fillText(marble.y,32,16)
    resetKeys()

    t++
    setTimeout(loop,30)}
  loop()
}
execute()
        