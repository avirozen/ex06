led.enable(true)
basic.forever(function () {
    led.plot(0, 0)
    led.plot(3, 1)
    led.plot(3, 3)
})
