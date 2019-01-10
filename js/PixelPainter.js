




var canvas = (function(){

const pixelPainter = document.getElementById('pixelPainter')



//Buttons Row
let buttonRow= document.createElement('div');
buttonRow.id='buttonRow';
pixelPainter.appendChild(buttonRow);

//Clear Color Button
let clear = document.createElement('button');
clear.id='clear';
clear.className='topButtons';
clear.innerHTML='Clear Color';
buttonRow.appendChild(clear);
clear.addEventListener('click',clearColor);
let aw = document.createElement('audio');
aw.src='aw.wav'

function clearColor(){
    aw.play();
    for(var i=15;i<pix.length;i++){
        if(pix[i].style.backgroundColor === select.style.backgroundColor){
            pix[i].style.backgroundColor='white'
        }
    }
}




//Restart
let restart = document.createElement('button');
restart.id='restart';
restart.className='topButtons';
restart.innerHTML='Restart';
buttonRow.appendChild(restart);
restart.addEventListener('click',restartFunc);
let crumple = document.createElement('audio');
crumple.src='Crumple.wav';
crumple.id='crumple';

function restartFunc(){
    crumple.play();
for(var i=15;i<pix.length;i++){
     pix[i].style.backgroundColor='white';
 }
}

//Save
let save = document.createElement('button');
save.id='save';
save.className='topButtons'
save.innerHTML='Save';
save.addEventListener('click',saveIt);
buttonRow.appendChild(save);
let chaching = document.createElement('audio');
chaching.src ='Chaching.wav';

let recall = [];

function saveIt(){
    chaching.play();
    recall = [];
    for(var i=15;i<pix.length;i++){
        recall.push(pix[i].style.backgroundColor);
    }return recall;
}

//Go to last saved button
let back = document.createElement('button');
back.id='back';
back.className='topButtons';
back.innerHTML='Rewind';
back.addEventListener('click',goBack);
buttonRow.appendChild(back);
let rewind = document.createElement('audio');
rewind.id='rewind';
rewind.src='Rewind.wav'
function goBack(){
    rewind.play();
    for(var i=15;i<pix.length;i++){
        pix[i].style.backgroundColor=recall[i-15]
    }
}

//grid function
function gridMe(height,width){
    let grid = document.createElement('div');
    grid.className='grid';

    for(var i=0;i<height;i++){
        let column = document.createElement('div');
        column.className='column';
        for(var j=0;j<width;j++){
            let pix = document.createElement('div');
            pix.className='pix';
            column.appendChild(pix);


        }
        grid.appendChild(column)
    }
    return grid;
}

//Row for Palette,Grid,And Selector Box
let gridRow = document.createElement('div');
gridRow.id='gridRow';
pixelPainter.appendChild(gridRow);

//tool bar flexbox
let paletteFlex=document.createElement('div');
paletteFlex.id='paletteFlex';
gridRow.appendChild(paletteFlex);
let tools = document.createElement('div');
tools.id='tools';
paletteFlex.appendChild(tools);



//eraser
let eraser = document.createElement('button');
eraser.id='eraser';
let eraserPic = document.createElement('img')
eraserPic.src = "https://purepng.com/public/uploads/large/purepng.com-erasereraserstationeryremovingwritingrubberyshapescolourspencil-eraser-142152650468306m0z.png";
eraserPic.id='eraserPic';
tools.appendChild(eraser);
eraser.appendChild(eraserPic);
eraser.addEventListener('click',eraserMode);
let miniEraser = document.createElement('img');
miniEraser.src='https://purepng.com/public/uploads/large/purepng.com-erasereraserstationeryremovingwritingrubberyshapescolourspencil-eraser-142152650468306m0z.png';
miniEraser.id='miniEraser';
miniEraser.style.display='none';
let eraserCursor=document.createElement('img');
eraserCursor.id='ec';
eraserCursor.src='https://purepng.com/public/uploads/large/purepng.com-erasereraserstationeryremovingwritingrubberyshapescolourspencil-eraser-142152650468306m0z.png';


function eraserMode(){
    select.style.backgroundColor='white';
    if(miniEraser.style.display==='none'){
       miniEraser.style.display='block'
    }
    
}

//color swatch stuff
let swatch = document.createElement('input');
swatch.type = 'color';
swatch.id='swatch';
swatch.addEventListener('input',update);
tools.appendChild(swatch);

function update(){
    select.style.backgroundColor=swatch.value
    if(miniEraser.style.display==='block'){
        miniEraser.style.display='none';
    }
}


//color palette
let palette = gridMe(3,5);
palette.id='palette';
paletteFlex.appendChild(palette);

//color selector
let select = document.createElement('div');
select.id='select';
let selectFlex = document.createElement('div');
selectFlex.id='selectFlex';

// gridRow.appendChild(selectFlex);
paletteFlex.appendChild(select);
select.appendChild(miniEraser);

//paint grid(canvas)
let paint = gridMe(370,140);
paint.id='paint'
gridRow.appendChild(paint);

//Setting palette up
let pix = document.getElementsByClassName('pix');

for(var i=0;i<pix.length;i++){
    if(i<=14){
        pix[i].style.height = '30px';
        pix[i].style.width='30px';
        pix[i].style.border = '1px solid black'
    }
}

//palette colors
let colors = ['red','brown','rgb(255, 0, 216)','gray',  'black','rgb(255, 97, 0)','rgb(130, 76, 1)','blue','rgb(86, 114, 255)','rgb(19, 126, 130)','rgb(255, 204, 0)','rgb(249, 249, 0)','rgb(0, 249, 236) ','rgb(0, 255, 131)','rgb(32, 242, 29)'];

//checking to see if mouse is clicked or not
let mouse = false;
let down = document.body.addEventListener('mousedown',downIt);
let up = document.body.addEventListener('mouseup',upIt);

function downIt(){
    mouse = true;
}

function upIt(){
    mouse = false;
}

//Adding the event listeners to the toolbox

for(var i=0;i<colors.length;i++){
    pix[i].style.backgroundColor=colors[i];
    pix[i].addEventListener('click',pow)
};


function pow(){
    select.style.backgroundColor=this.style.backgroundColor;
    if(miniEraser.style.display==='block'){
        miniEraser.style.display='none';
    }
}

//Adding event listeners to canvas

for(var i=15;i<pix.length;i++){
    pix[i].addEventListener('mouseover',wow);
    pix[i].addEventListener('click',startPaint)
}



function startPaint(){
    this.style.backgroundColor=select.style.backgroundColor;
    console.log(pix)

    
}

function wow(){
    if(mouse===true){   this.style.backgroundColor=select.style.backgroundColor;
    }
   
}




})();
