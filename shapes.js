//columns square
function shape0(){
  var lastBlock = document.querySelector('#block'+(blocks.length-1).toString());
  var col1 = document.createElement('a-cylinder');
  col1.setAttribute('scale','.1 1 .1');
  col1.setAttribute('position','-.4, 0 -.4');
  col1.setAttribute('rotation','0 90 0');
  col1.setAttribute('src', materials[currentMaterial]);
  col1.setAttribute('defaultMat','true');
  var col2 = document.createElement('a-cylinder');
  col2.setAttribute('scale','.1 1 .1');
  col2.setAttribute('position','.4, 0 -.4');
  col2.setAttribute('rotation','0 90 0');
  col2.setAttribute('src', materials[currentMaterial]);
  col2.setAttribute('defaultMat','true');
  var col3 = document.createElement('a-cylinder');
  col3.setAttribute('scale','.1 1 .1');
  col3.setAttribute('position','-.4, 0 .4');
  col3.setAttribute('rotation','0 90 0');
  col3.setAttribute('src', materials[currentMaterial]);
  col3.setAttribute('defaultMat','true');
  var col4 = document.createElement('a-cylinder');
  col4.setAttribute('scale','.1 1 .1');
  col4.setAttribute('position','.4, 0 .4');
  col4.setAttribute('rotation','0 90 0');
  col4.setAttribute('src', materials[currentMaterial]);
  col4.setAttribute('defaultMat','true');
  var top = document.createElement('a-box');
  top.setAttribute('scale','1 .1 1');
  top.setAttribute('position','0 .5 0');
  top.setAttribute('src', materials[currentMaterial]);
  top.setAttribute('defaultMat','true');
  lastBlock.appendChild(col1);
  lastBlock.appendChild(col2);
  lastBlock.appendChild(col3);
  lastBlock.appendChild(col4);
  lastBlock.appendChild(top);
}

//cylinder with window
function shape1(){
  var lastBlock = document.querySelector('#block'+(blocks.length-1).toString());
  var cyl = document.createElement('a-cylinder');
  cyl.setAttribute('scale','.5 1 .5');
  cyl.setAttribute('src',materials[currentMaterial]);
  cyl.setAttribute('material','repeat:2 1');
  cyl.setAttribute('rotation','0 90 0');
  cyl.setAttribute('defaultMat','true');
  var win = document.createElement('a-box');
  win.setAttribute('scale','.3 .6 .2');
  win.setAttribute('material','src:#m_window');
  win.setAttribute('position','0 0 .5');
  lastBlock.appendChild(win);
  lastBlock.appendChild(cyl);
}

//stairs
function shape2(){
  var lastBlock = document.querySelector('#block'+(blocks.length-1).toString());
  var cyl = document.createElement('a-cylinder');
  cyl.setAttribute('scale','.05 1 .05');
  cyl.setAttribute('src',materials[currentMaterial]);
  cyl.setAttribute('rotation','0 90 0');
  cyl.setAttribute('defaultMat','true');
  for(var i=0; i<10; i++){
    var stair = document.createElement('a-box');
    stair.setAttribute('scale','.8 .01 .2');
    stair.setAttribute('position','0 '+(i*.1-.5)+' 0');
    stair.setAttribute('rotation','0 '+i*36+' 0');
    stair.setAttribute('opacity','0');
    var str = document.createElement('a-box');
    str.setAttribute('src','#m_wood');
    str.setAttribute('scale','.5 1 .8');
    str.setAttribute('position','.25 0 0');
    stair.appendChild(str);
    lastBlock.appendChild(stair);
  }
  lastBlock.appendChild(cyl);
}

function shape3(){
  var lastBlock = document.querySelector('#block'+(blocks.length-1).toString());
  var dom = document.createElement('a-sphere');
  dom.setAttribute('scale','.5 .5 1');
  dom.setAttribute('src',materials[currentMaterial]);
  dom.setAttribute('defaultMat','true');
  dom.setAttribute('phi-length','180');
  dom.setAttribute('rotation','-90 90 0');
  dom.setAttribute('position','0 -.5 0');
  lastBlock.appendChild(dom);
}
