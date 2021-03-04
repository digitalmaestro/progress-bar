input.onButtonPressed(Button.A, function () {
    while (Total > 0) {
        if (Total == units * 5) {
            led.plot(0, 2)
        }
        if (Total == units * 4) {
            led.plot(1, 2)
        }
        if (Total == units * 3) {
            led.plot(2, 2)
        }
        if (Total == units * 2) {
            led.plot(3, 2)
        }
        if (Total == units * 1) {
            led.plot(4, 2)
        }
        basic.pause(100)
        Total += -1
    }
})
let units = 0
let Total = 0
Total = 80
units = Total / 5
basic.forever(function () {
	
})
