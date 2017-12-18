let maxFreq = 0
let direction = 0
let currentPitch = 0
let currentSpeed = 0
let initialPitch = 0
input.onButtonPressed(Button.A, () => {
    if (currentSpeed > 0) {
        currentSpeed += -1
    }
})
input.onButtonPressed(Button.B, () => {
    if (currentSpeed < 100) {
        currentSpeed += 1
    }
})
initialPitch = 10
currentPitch = initialPitch
direction = 0
maxFreq = 19000
currentSpeed = 8
basic.forever(() => {
    if (currentPitch > maxFreq) {
        direction = 1
    } else if (currentPitch < initialPitch) {
        direction = 0
    }
    music.ringTone(currentPitch)
    led.plotBarGraph(
    currentPitch,
    maxFreq
    )
    if (direction == 0) {
        currentPitch += currentSpeed
    } else if (direction == 1) {
        currentPitch += -1 * currentSpeed
    }
})
