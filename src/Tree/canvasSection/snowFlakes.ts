
export function generateSnowFlake():HTMLCanvasElement{
  const maxLevel=5
  const brunches = 4
  const sides=Math.floor(Math.random()*10+3)
  const spread = (Math.random()*48)+0.51
  const canvas = document.createElement('canvas')
  canvas.width=500
  canvas.height=500
  const ctx=canvas.getContext('2d')
  ctx.translate(canvas.width/2,canvas.height/2)
  const drawLine=getLineGenerator(ctx,maxLevel,brunches,sides,spread)
  drawLine()
  return canvas
}

function getLineGenerator(ctx:CanvasRenderingContext2D,
                          maxLevel:number,
                          brunches:number,
                          sides:number,
                          spread:number){
  const angle=Math.PI*2*spread
  const generate=(level:number)=>{
    if(level>maxLevel)return
    ctx.strokeStyle='#000'
    ctx.lineWidth=2
    ctx.beginPath()
    ctx.moveTo(0,0),
      ctx.lineTo(200,0)
    ctx.stroke()
    for(let i=1;i<brunches+1;i++){
      ctx.save()
      ctx.translate(200*i/(brunches+1),0)
      ctx.scale(0.5,0.5)
      ctx.save()

      ctx.rotate(angle)
      generate(level+1)
      ctx.restore()
      ctx.save()
      ctx.rotate(-angle)
      generate(level+1)
      ctx.restore()
      ctx.restore()
    }
  }
  const generateFlake=()=>{
    for(let i=0;i<sides;i++){
     generate(0)
      ctx.rotate(Math.PI*2/sides)
    }
  }
  return generateFlake
}

