/**
 * row - y = 108,92,76,60,44,28,12
 * 
 * column - x = 32,48,64,80
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    n = 3
    for (let index = 0; index < n; index++) {
        RoboDrawing.roboMoveForward()
    }
    if (n % 2 == 1) {
        RoboDrawing.roboTurn(RoboDrawing.TurnDirection.Right)
    } else {
        RoboDrawing.roboTurn(RoboDrawing.TurnDirection.Left)
    }
    n += 1
})
/**
 * The robo cannot travel where there is a blocked square.
 */
let n = 0
RoboDrawing.roboReset(0, 6, RoboDrawing.Direction.Up)
let stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(32, 12)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(32, 28)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(48, 28)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(48, 76)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(48, 92)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(64, 92)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(80, 44)
stop = sprites.create(assets.image`nogo`, SpriteKind.Enemy)
stop.setPosition(64, 44)
