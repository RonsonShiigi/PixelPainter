




var canvas = (function(){
    
    
const pixelPainter = document.getElementById('pixelPainter')

//Buttons
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

//Save
let save = document.createElement('button');
save.id='save';
save.className='topButtons'
save.innerHTML='Save';
buttonRow.appendChild(save);



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
let palette = gridMe(3,7);
palette.id='palette';
gridRow.appendChild(palette)

//paint grid
let paint = gridMe(30,30);
paint.id='paint'
gridRow.appendChild(paint)

//color selector
let select = document.createElement('div');
select.id='select';
gridRow.appendChild(select);

//setting classNames
let pix = document.getElementsByClassName('pix');

console.log(pix)
// for(var i=0;i<pix.length;i++){
//     if(i<=21){
//         pix[i].className+='dab'
//     }
// }





})();
