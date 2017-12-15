let currentPitch = 0
let direction = 0
let initialPitch = 0
initialPitch = 10
currentPitch = initialPitch
direction = 0
basic.forever(() => {
    if (currentPitch > 20000) {
        direction = 1
    } else if (currentPitch < initialPitch) {
        direction = 0
    }
    music.ringTone(currentPitch)
    if (direction == 0) {
        currentPitch += 5
    } else if (direction == 1) {
        currentPitch += -5
    }
})
