input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    basic.showString("GRR")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . # . #
        `)
    basic.pause(5000)
    for (let index = 0; index < 4; index++) {
        music.playTone(950, music.beat(BeatFraction.Whole))
        music.playTone(700, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
	
})
