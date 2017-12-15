let rand = 0
let Stop = 0
let Speed = 0
input.onButtonPressed(Button.A, () => {
    if (Speed < 1000) {
        Speed += 50
    } else {
        Stop = 1
    }
})
input.onButtonPressed(Button.B, () => {
    if (Speed >= 50) {
        Speed += -50
        Stop = 0
    }
})
basic.forever(() => {
    if (Stop != 1) {
        rand = Math.random(25)
        led.toggle(rand / 5, rand % 5)
        basic.pause(Speed)
    }
})
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
Speed = 200
Stop = 0
