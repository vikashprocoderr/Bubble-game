let timer = 60
let score = 0
let hitnm = 0

function scoreinc() {
  score += 10
  document.querySelector('.score').textContent = score
}

function makebubble() {
  let nothing = ''

  for (let i = 1; i < 99; i++) {
    let rn = Math.floor(Math.random() * 10)
    nothing += `<div id="bubble">${rn}</div>`
  }
  document.querySelector('#pnlbtm').innerHTML = nothing
}

function rntimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--
      document.querySelector('.tmr').textContent = timer
    } else {
      clearInterval(rntimer)
      document.querySelector('#pnlbtm').innerHTML = `<h1>Game Over!</h1>`
    }
  }, 1000)
}
function newhit() {
  hitnm = Math.floor(Math.random() * 10)
  document.querySelector('.hitnum').textContent = hitnm
}

document.querySelector('#pnlbtm').addEventListener('click', function (dets) {
  let clcknum = Number(dets.target.textContent)
  if (clcknum === hitnm) {
    scoreinc()
    makebubble()
    newhit()
  }
})

makebubble()
rntimer()
newhit()
