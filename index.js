// **** GLOBAL VARIABLES **** //
var setFunc = ()=>{};
var targetCel = undefined;

// **** Event listeners ****//
document.body.querySelector('.gridArea').addEventListener('click', execute);

// **** Click Options and setter functions ****//

function setFunction(selection)
{
  //console.log('selections' + selection)
  switch(selection){
    case 1:
      console.log('splitting vertically');
      setFunc = splitVert;
      break;
    case 2:
      console.log('splitting horizontally');
      setFunc = splitHoriz;
      break;
    case 3:
      //TODO: make the assign code thingy go here.
      break;
    default:
      console.log('selection out of bounds.')
      break;
  }
}

//function to do whatever it is that I have set.
function execute(event)
{
  console.log('execution entered ' + event.target);
  targetCel = event.target;
  setFunc();
}

//TODO: grab the x/y relative to the div so we can send percentages as well.
// stretch goals, have it draw a line where you click to the edges of the div so you know where you clicked and where it will split.

function splitVert()
{
  split("column",50);
}

function splitHoriz()
{
  split("row", 50)
}

//split the div with two new cells
function split(alignment, percentage)
{
  let buildString="";
  if(alignment=="row")
  {
    buildString += Cel(100,percentage);
    buildString += Cel(100,100-percentage);
  }
  else {
    buildString += Cel(percentage,100);
    buildString += Cel(100-percentage,100);
  }
  console.log('build string', buildString)
  targetCel.style['flex-direction'] = alignment;
  targetCel.innerHTML = buildString;
}

//cel creator helper function
function Cel(width, height)
{
  return '<div style= "background-color: ' + randomColor() + '; width: ' + width + '%; height: '+ height + '%;"></div>';
}



// **** Misc ****//
function randomColor()
{
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}


/*


//Have a text field you can fill out to add code bits
//have a display of all code bits.
//be able to select code bits
//

//idea scrapped with the flexbox drawing style selected
//have a canvas
//have a cell in the canvas
  //cells should be a recursive collection
function randomColor()
{
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
class Cel
{
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.child = [];
    this.color = randomColor();
    this.content = "";
    this.alignment="";
  }

  //create two new cells whenever needed
  split(percentage, alignment)
  {
    this.content="";
    this.alignment = alignment;
    if(alignment=="row")
    {
      this.child.push(new Cel(100,percentage));
      this.child.push(new Cel(100,100-percentage));
    }
    else
    {
      this.child.push(new Cel(percentage,100));
      this.child.push(new Cel(100-percentage,100));
    }
  }
  render()
  {
    var buildString = '';

    if(this.child.length>0)
    {
      buildString +='<div style="flex-direction:'+ this.alignment +
      '; background-color: '+this.color+'; width: '+this.width+'%; height: '+this.height+'%;">';
      buildString += this.content;
    }
    else {
      buildString +='<div style= "background-color: '+this.color+'; width: '+this.width+'%; height: '+this.height+'%;">';
    }
    this.child.forEach(x=>buildString +=x.render());
    buildString += '</div>'
    return buildString;
  }
}
function split2()
{
  targetCel.split()
}
//something else that grabs the target and gives a targetCel var
var gridDisp = document.querySelector('.gRight');
var test=new Cel(100,100);
test.color="red";
test.split(50,"row");
test.child[0].split(50,"row");
test.child[0].child[0].split(50,"row");
gridDisp.innerHTML = test.render();
console.log(test.render());

/*
var canvas = document.getElementById('canvas'),
    coord = document.getElementById('coord'),
    ctx = canvas.getContext('2d'), // get 2D context
    imgCat = new Image();

/*********** draw image *************/
/*
imgCat.src = 'http://c.wearehugh.com/dih5/openclipart.org_media_files_johnny_automatic_1360.png';
imgCat.onload = function() { // wait for image load
    ctx.drawImage(imgCat, 0, 0); // draw imgCat on (0, 0)
};

/*********** handle mouse events on canvas **************/
/*
var mousedown = false;
ctx.strokeStyle = '#0000FF';
ctx.lineWidth = 5;
canvas.onmousedown = function(e) {
    var pos = fixPosition(e, canvas);
    mousedown = true;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    return false;
};

canvas.onmousemove = function(e) {
    var pos = fixPosition(e, canvas);
    coord.innerHTML = '(' + pos.x + ',' + pos.y + ')';
    if (mousedown) {
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }
};

canvas.onmouseup = function(e) {
    mousedown = false;
};

/********** utils ******************/
// Thanks to http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/4430498#4430498
/*
function fixPosition(e, gCanvasElement) {
    var x;
    var y;
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    }
    else {
      x = e.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
    }
    x -= gCanvasElement.offsetLeft;
    y -= gCanvasElement.offsetTop;
    return {x: x, y:y};
}
*/
