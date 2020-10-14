const { Engine, Render, Runner, World, Bodies, Body } = Matter;

const cells = 10;
const width = 600;
const height = 600;
const unitLength=width/cells;
const engine = Engine.create();
// gravity control
engine.world.gravity.y=0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
];
World.add(world, walls);

// Maze generation

const shuffle=(arr)=>{
    let counter=arr.length;
    while(counter>0){
        const index=Math.floor(Math.random()*counter);
        counter--;
        
        const temp=arr[counter];
        arr[counter]=arr[index];
        arr[index]=temp;
    }
    return arr;
}

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  // If i have visted the cell at [row, column], then return
  if (grid[row][column]) {
    return;
  }

  // Mark this cell as being visited
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  const neighbours=shuffle([
      [row-1,column, 'up'],
      [row, column+1, 'right'],
      [row+1,column, 'down'],
      [row,column-1, 'left']
  ]);
  console.log(neighbours);
  // For each neighbor....
  for(let neighbor of neighbours){
    const [nextRow,nextColumn, direction]=neighbor;
  // See if that neighbor is out of bounds
    if(nextRow<0||nextRow>=cells||nextColumn<0||nextColumn>=cells)
        continue;
  // If we have visited that neighbor, continue to next neighbor
    if(grid[nextRow][nextColumn])
        continue;
  // Remove a wall from either horizontals or verticals
    if(direction==='left')
    verticals[row][column-1]=true;
    else if(direction==='right')
    verticals[row][column]=true;
    else if(direction==='up')
    horizontals[row-1][column]=true;
    else if(direction==='down')
    horizontals[row][column]=true;

    stepThroughCell(nextRow,nextColumn);
  }
  // Visit that next cell
};
// stepThroughCell(1, 1);
stepThroughCell(startRow, startColumn);
// console.log(grid);
horizontals.forEach((row, rowIndex)=>{
    row.forEach((open,columnIndex)=>{
        if(open){
            return;
        }
        const wall=Bodies.rectangle(
            columnIndex*unitLength+unitLength/2,
            rowIndex*unitLength+unitLength,
            unitLength,
            2,
            {
                isStatic:true
            }
        );
        World.add(world, wall);
    })
})
verticals.forEach((row, rowIndex)=>{
    row.forEach((open, columnIndex)=>{
        if(open)
            return;
        const wall=Bodies.rectangle(
            unitLength*columnIndex+unitLength,
            unitLength*rowIndex+unitLength/2,
            2,
            unitLength,
            {
                isStatic:true
            }
        );

        World.add(world, wall);
    });
});

const goal=Bodies.circle(
    width-unitLength/2,
    height-unitLength/2,
    unitLength* .35,
    {
        isStatic:false
    }
);
World.add(world, goal);
const ball=Bodies.circle( unitLength/2, unitLength/2, unitLength/3);
World.add(world, ball);

document.addEventListener('keydown', event=>{
    const {x, y} =ball.velocity;
    
    if(event.key==='w'){
        Body.setVelocity(ball, {x, y: y-3})
    }
    if(event.key==='a'){
        Body.setVelocity(ball, {x:x-3, y})
    }
    if(event.key==='s'){
        Body.setVelocity(ball, {x, y: y+3})
    }
    if(event.key==='d'){
        Body.setVelocity(ball, {x:x+3, y})
    }
})
// ___________________________________________________________________________________________
//COPY OF DEMO OF MATTER JS
// const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse}=Matter;

// const engine=Engine.create();
// const { world } = engine;
// const width=800;
// const height=600;
// const render=Render.create({
//     element:document.body,
//     engine:engine,
//     options:{
//         wireframes:false,
//         width:width,
//         height:height
//     }
// });
// Render.run(render);
// Runner.run(Runner.create(), engine);

// World.add(world, MouseConstraint.create(engine, {
//     mouse:Mouse.create(render.canvas)
// }));

// const shape=Bodies.rectangle(200, 200, 50, 50, {
//     // isStatic:true
// });
// World.add(world, shape);

// //walls
// const walls=[
//     Bodies.rectangle(400, 0, 800, 40, {isStatic:true}),
//     Bodies.rectangle(400,600 , 800, 40, {isStatic:true}),
//     Bodies.rectangle(0, 300, 40, 600, {isStatic:true}),
//     Bodies.rectangle(800, 300, 40, 600, {isStatic:true})
// ];
// World.add(world, walls);
// for(i=0;i<20;i++){
//     if(Math.random()>0.5){
//         World.add(world, Bodies.rectangle(Math.random()*width, Math.random()*height, 50, 50))
//     }
//     else{
//         World.add(world, Bodies.circle(Math.random()*width, Math.random()*height, 25, {
//             render:{
//                 fillStyle:'green'
//             }
//         }))
//     }
// }