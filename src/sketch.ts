import p5 from 'p5'

const sketch = function (p: p5) {
  p.setup = () => {
    p.createCanvas(400, 400)
  }

  p.draw = () => {
    p.background(200)
  }
}

new p5(sketch)
