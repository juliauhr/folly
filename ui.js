var msg = document.querySelector('#message');
var folly = document.querySelector('#folly');
var spinning = false;
var blockHeights = [];
var blocks = [{y:0, mat:0, scale:.1, shape:0}];
var currentY = -1;
var boxCount = 0;
var currentScale = 1;
var materials=['#m_tile','#m_brick','#m_stone','#m_cement','#m_purple'];
var currentMaterial = 0;

function getLocation(){
  msg.innerHTML = "Getting location...";
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(setLocation);
  } else {
    msg.innerHTML = "Your browser doesn't support geolocation.";
  }
}

function setLocation(position){
  var loc = "latitude: " + position.coords.latitude + "; longitude: " + position.coords.longitude;
  msg.innerHTML = loc;
  document.querySelector('#loc').setAttribute('gps-entity-place',loc);
}

function hideStart(){
  document.querySelector('#startScreen').style.display="none";
}

function spin(){
  spinning = !spinning;
  if(spinning){
    folly.emit('resume');
  }else{
    folly.emit('pause');
  }
  msg="";
}

function showBlockMenu(){
  document.querySelector('#blockMenu').style.display='block';
  document.querySelector('#mainMenu').style.display='none';
}
function hideBlockMenu(){
  document.querySelector('#blockMenu').style.display='none';
  document.querySelector('#mainMenu').style.display='block';
}
function showMoveMenu(){
  document.querySelector('#moveMenu').style.display='block';
  document.querySelector('#mainMenu').style.display='none';
}
function hideMoveMenu(){
  document.querySelector('#moveMenu').style.display='none';
  document.querySelector('#mainMenu').style.display='block';
}


function addBox(num){
  var y = blocks[blocks.length-1].y+blocks[blocks.length-1].scale;
  blocks.push({y:y, mat:0, scale:1, shape:num});
  var newBlock = document.createElement('a-entity');
  var id = 'block'+(blocks.length-1).toString();
  newBlock.setAttribute('id',id);
  newBlock.setAttribute('scale','1 1 1');
  newBlock.setAttribute('position','0 '+(y+.5)+' 0');
  folly.appendChild(newBlock);
  if(num==0){shape0()}
  if(num==1){shape1()}
  if(num==2){shape2()}
  if(num==3){shape3()}
}



function removeBox(){
  if(blocks.length>1){
    var topBlock = document.querySelector('#block'+(blocks.length-1).toString());
    topBlock.parentNode.removeChild(topBlock);
    blocks.pop();
  }
}

function changeSize(){
  var topBlock = document.querySelector('#block'+(blocks.length-1).toString());
  var scale = blocks[blocks.length-1].scale;
  if(scale<3){
    scale++;
  }else{
    scale=1;
  }
  topBlock.setAttribute('scale', scale+' '+scale+' '+scale);
  var y = blocks[blocks.length-1].y;
  topBlock.setAttribute('position','0 '+(y+scale/2)+' 0');
  blocks[blocks.length-1].scale = scale;
}


function changeMaterial(){
  var block = document.querySelector('#block'+(blocks.length-1).toString());
  var kids = block.children;
  var newMat = currentMaterial;
  if(newMat<materials.length-1){
    newMat++;
  }else{
    newMat=0;
  }
  document.querySelector('#matButton').src = document.querySelector(materials[newMat]).src;
  for(var i=0; i<kids.length; i++){
    if(kids[i].getAttribute('defaultMat')=='true'){
      kids[i].setAttribute('src',materials[newMat]);
    }
  }
  currentMaterial=newMat;
}

function moveDown(){
  document.querySelector('#folly').object3D.position.y -= 1;
}

function moveUp(){
  document.querySelector('#folly').object3D.position.y += 1;
}

function moveLeft(){
  document.querySelector('#folly').object3D.position.x -= 1;
}

function moveRight(){
  document.querySelector('#folly').object3D.position.x += 1;
}
