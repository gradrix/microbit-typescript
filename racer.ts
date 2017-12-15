let noOfAliensInLine = 0
let alienGrid: number[] = []
let index3 = 0
let playerLocation = 0
let spawnLocation = 0
let gameSpeed = 0
let spawnEnemy = 0
let reverseIndex = 0
let index = 0
let gameClock = 0
let alienStepCountdown = 0
let gameStatus = 0
function gameOver()  {
    gameStatus = 0
    basic.clearScreen()
    led.plotBrightness(2, 2, 255)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Double))
    basic.pause(500)
    led.plotBrightness(1, 2, 255)
    led.plotBrightness(3, 2, 255)
    led.plotBrightness(2, 1, 255)
    led.plotBrightness(2, 3, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(2, 0, 255)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(2, 0, 255)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(0, 2, 255)
    led.plotBrightness(4, 2, 255)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(3, 3, 255)
    led.plotBrightness(2, 4, 255)
    basic.pause(500)
    basic.clearScreen()
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(4, 0, 255)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(2, 2, 255)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(3, 3, 255)
    led.plotBrightness(0, 4, 255)
    led.plotBrightness(4, 4, 255)
    basic.pause(1000)
    initialize()
}
function doAlienStep()  {
    for (let index2 = 0; index2 <= 24; index2++) {
        reverseIndex = Math.abs(index2 - 24)
        if (alienGrid[reverseIndex] == 1) {
            if (reverseIndex < 20) {
                alienGrid[reverseIndex + 5] = 1
                if (reverseIndex / 5 + 1 == 4 && reverseIndex % 5 == playerLocation) {
                    gameOver()
                }
                led.plotBrightness(reverseIndex % 5, reverseIndex / 5 + 1, 100)
            }
            led.unplot(reverseIndex % 5, reverseIndex / 5)
            alienGrid[reverseIndex] = 0
        }
    }
    spawnEnemy = Math.random(11)
    if (spawnEnemy >= 5) {
        index3 = Math.random(5)
        alienGrid[index3] = 1
        led.plotBrightness(index3, 0, 145)
        noOfAliensInLine += 1
    }
    gameClock += 1
    advanceLevel()
}
function Game()  {
    alienStepCountdown = gameSpeed
    while (gameStatus > 0) {
        led.plotBrightness(playerLocation, 4, 255)
        if (alienGrid[20 + playerLocation] == 1) {
            gameOver()
        }
        if (alienStepCountdown < 0) {
            doAlienStep()
            alienStepCountdown = gameSpeed
            music.playTone(131, music.beat(BeatFraction.Sixteenth))
        }
        alienStepCountdown = alienStepCountdown - 1
        basic.pause(50)
    }
}
function advanceLevel()  {
    if (gameClock % 50 == 0) {
        if (gameSpeed > 1) {
            gameSpeed += -2
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
        }
    }
}
function initialize()  {
    gameClock = 1
    gameSpeed = 10
    spawnLocation = 0
    spawnEnemy = 0
    spawnLocation = 0
    gameStatus = 0
    playerLocation = 2
    alienGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
input.onButtonPressed(Button.B, () => {
    if (playerLocation < 4 && gameStatus > 0) {
        led.unplot(playerLocation, 4)
        playerLocation = playerLocation + 1
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Eighth))
    }
})
input.onButtonPressed(Button.A, () => {
    if (playerLocation > 0 && gameStatus > 0) {
        led.unplot(playerLocation, 4)
        playerLocation = playerLocation - 1
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Eighth))
    }
})
index = 0
initialize()
basic.forever(() => {
    if (gameStatus == 0) {
        basic.clearScreen()
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.showString("3")
        basic.pause(1000)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.showString("2")
        basic.pause(1000)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.showString("1")
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(1, 0, 255)
        led.plotBrightness(1, 1, 255)
        led.plotBrightness(2, 1, 255)
        led.plotBrightness(1, 2, 255)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(3, 2, 255)
        led.plotBrightness(1, 3, 255)
        led.plotBrightness(2, 3, 255)
        led.plotBrightness(1, 4, 255)
        music.playTone(784, music.beat(BeatFraction.Whole))
        basic.pause(1000)
        basic.clearScreen()
        gameStatus = 1
        Game()
    }
})
