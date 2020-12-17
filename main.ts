input.onButtonPressed(Button.A, function () {
    brightness += -10
})
input.onButtonPressed(Button.B, function () {
    brightness += 10
})
let hue = 0
let brightness = 0
let tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
let direction = 1
basic.forever(function () {
    hue += 1
    brightness = brightness + direction
    if (brightness >= 50) {
        direction = -1
    }
    if (brightness <= 0) {
        direction = 1
    }
    for (let index = 0; index <= 19; index++) {
        tree.setLevelColorAndBrightness(index, hue + 30 * index, brightness)
    }
    tree.update()
})
