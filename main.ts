input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    A = 1
})
let A = 0
let x = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (x == 5) {
            y += 1
            x = 0
        }
        if (y == 5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            x = 0
            y = 0
        }
        led.plot(x, y)
        x += 1
        A = 0
    }
})
