
const pixelPainter = document.getElementById('pixelPainter');



var canvas = (function(height,width){
console.log('hi')
//button row stuff
let buttonRow = document.createElement('div');
buttonRow.id='buttonRow';
pixelPainter.appendChild(buttonRow);
//eraser
let eraser = document.createElement('button');
eraser.id='eraser';
eraser.innerHTML='Eraser';
buttonRow.appendChild(eraser);
//clear
let clear = document.createElement('button');
clear.id='clear';
clear.innerHTML='Clear';
buttonRow.appendChild(clear);
//save
let save = document.createElement('button');
save.id='save';
save.innerHTML='Save';
buttonRow.appendChild(save);


//paint grid stuff
let grid = document.createElement('div');
grid.id='grid';
pixelPainter.appendChild(grid);


for(var i=0;i<2000;i++){
let box = document.createElement('div');
box.className='box';
grid.appendChild(box)
}




//palette
let palette = document.createElement('div');
palette.id='palette';
pixelPainter.appendChild(palette);
//color boxes
for(var i=0;i<21;i++){
    let colors = document.createElement('div');
    colors.className='colors';
    palette.appendChild(colors);
}

//setting a box to show what color is selected
let select = document.createElement('div');
select.id='select';
pixelPainter.appendChild(select);


})();
