




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

//Restart
let restart = document.createElement('button');
restart.id='restart';
restart.className='topButtons';
restart.innerHTML='Restart';
buttonRow.appendChild(restart);
restart.addEventListener('click',restartFunc);
function restartFunc(){
for(var i=16;i<pix.length;i++){
     pix[i].style.backgroundColor='white';
 }
}

//Save
let save = document.createElement('button');
save.id='save';
save.className='topButtons'
save.innerHTML='Save';
buttonRow.appendChild(save);

//Go to last saved button
let back = document.createElement('button');
back.id='back';
back.className='topButtons';
back.innerHTML='Rewind';
buttonRow.appendChild(back);


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

//palette stuff
let palette = gridMe(3,5);
palette.id='palette';
let paletteFlex=document.createElement('div');
paletteFlex.id='paletteFlex';
gridRow.appendChild(paletteFlex);
paletteFlex.appendChild(palette);

//paint grid
let paint = gridMe(40,40);
paint.id='paint'
gridRow.appendChild(paint)

//color selector
let select = document.createElement('div');
select.id='select';
let selectFlex = document.createElement('div');
selectFlex.id='selectFlex';
gridRow.appendChild(selectFlex);
selectFlex.appendChild(select)


//Setting palette up
let pix = document.getElementsByClassName('pix');

for(var i=0;i<pix.length;i++){
    if(i<=14){
        pix[i].style.height = '30px';
        pix[i].style.width='30px';
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
    console.log(mouse);
}

function upIt(){
    mouse = false;
    console.log(mouse)
}





for(var i=0;i<colors.length;i++){
    pix[i].style.backgroundColor=colors[i];
    pix[i].addEventListener('click',pow)
};


function pow(){
    select.style.backgroundColor=this.style.backgroundColor;
}

for(var i=16;i<pix.length;i++){
    pix[i].addEventListener('mouseover',wow);
    pix[i].addEventListener('click',startPaint)
}
function startPaint(){
    this.style.backgroundColor=select.style.backgroundColor;
}
function wow(){
    if(mouse===true){   this.style.backgroundColor=select.style.backgroundColor;
    console.log('hi')
    }
   
}




})();
