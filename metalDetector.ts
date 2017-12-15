let graphMode = 0
let forceDifference = 0
let initialMagneticForce = 0
let newMagneticForce = 0
basic.forever(() => {
    newMagneticForce = input.magneticForce(Dimension.Strength)
    forceDifference = Math.abs(initialMagneticForce - newMagneticForce)
    if (graphMode == 1) {
        led.plotBarGraph(
        forceDifference,
        40
        )
        music.playTone(262 + forceDifference, music.beat(BeatFraction.Quarter))
        if (forceDifference < 13) {
            music.rest(music.beat(BeatFraction.Double))
        } else if (forceDifference < 26) {
            music.rest(music.beat(BeatFraction.Whole))
        } else if (forceDifference < 40) {
            music.rest(music.beat(BeatFraction.Half))
        } else if (forceDifference >= 40) {
            music.rest(music.beat(BeatFraction.Quarter))
        }
    } else {
        basic.showString("" + newMagneticForce)
    }
})
input.onButtonPressed(Button.AB, () => {
    if (graphMode == 1) {
        graphMode = 0
    } else {
        graphMode = 1
    }
})
input.onButtonPressed(Button.B, () => {
    initialMagneticForce += 1
})
input.onButtonPressed(Button.A, () => {
    initialMagneticForce += -1
})
initialMagneticForce = input.magneticForce(Dimension.Strength)
graphMode = 1
