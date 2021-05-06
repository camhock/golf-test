namespace SpriteKind {
    export const bar = SpriteKind.create()
    export const helper = SpriteKind.create()
}
function callairswing () {
    animation.runImageAnimation(
    golfer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a . . . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 . . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . a . . . . . . . . . . . . 
        . . . . b b . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 . . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . a b b 2 . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . 5 . 5 5 . . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 e e e . . . . . 
        . . . . . . 5 5 e e e . . . . . 
        . . . . . 2 5 . e e e . . . . . 
        . . . . . b . 5 5 5 . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . . . a . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e e e . . . . . 
        . . . . . . . . e e e 5 . . . . 
        . . . . . . . . e e e 5 . . . . 
        . . . . . . . . 5 5 . 5 . . . . 
        . . . . . . . . 5 5 5 . . . . . 
        . . . . . . . . . . 2 b b a . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . a . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . 5 5 5 . b . . . . . 
        . . . . . e e e . 5 2 . . . . . 
        . . . . . e e e 5 5 . . . . . . 
        . . . . . e e e 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . a . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . 5 . e e e . 5 2 . . . . . 
        . . . 5 . e e e 5 5 . . . . . . 
        . . . . 5 5 e 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 9 . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . a . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . 5 . e e e . 5 2 . . . . . 
        . . . 5 . e e e 5 5 . . . . . . 
        . . . . 5 5 e 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 9 . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . a . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . 5 . e e e . 5 2 . . . . . 
        . . . 5 . e e e 5 5 . . . . . . 
        . . . . 5 5 e 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 9 . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . a . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . . . . . . . . b . . . . . 
        . . . 5 . e e e . 5 2 . . . . . 
        . . . 5 . e e e 5 5 . . . . . . 
        . . . . 5 5 e 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 8 . 8 . . . . . . . . 
        . . . . . 9 . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    400,
    false
    )
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    callbackSwing()
})
function calldownSwing () {
    animation.runImageAnimation(
    golfer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 2 . . . . . . . . 
        . . . . . 5 5 5 b . . . . . . . 
        . . . . . e e e 5 b . . . . . . 
        . . . . . e e e 5 5 b . . . . . 
        . . . . . e e e . . a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 2 . . . . . . . . . 
        . . . . . 5 5 b b a . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b a . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . 2 b 5 . . . . . . . . 
        . . . . 5 5 . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . 2 5 5 . . . . . . . . 
        . . . . 5 . . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 a . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 b e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (clubstate == "rest") {
        clubhead.setVelocity(-50, 0)
        clubstate = "backswing"
        callbackSwing()
    } else if (clubstate == "backswing" && clubhead.x > 4) {
        swingpower = (clubhead.x - 116) * -1
        clubhead.say(swingpower)
        clubhead.setVelocity(swingpower, 0)
        clubstate = "downswing"
        calldownSwing()
    } else if (clubstate == "backswing" && clubhead.x <= 4) {
        clubstate = "airswing"
        callairswing()
    } else if (clubstate == "downswing") {
        clubhead.setVelocity(0, 0)
        accuracy = clubhead.x - 135
        if (accuracy <= -4) {
            adjustedaccuracy = -4
        } else if (accuracy <= -3) {
            adjustedaccuracy = -2
        } else if (accuracy <= -2) {
            adjustedaccuracy = -1
        } else if (accuracy <= -1) {
            adjustedaccuracy = -0.1
        } else if (accuracy <= 0.5) {
            adjustedaccuracy = 0
        } else if (accuracy > 0.5) {
            adjustedaccuracy = -0.1
        } else if (accuracy > 1) {
            adjustedaccuracy = -2
        } else if (accuracy > 2) {
            adjustedaccuracy = 3
        } else if (accuracy > 3) {
            adjustedaccuracy = 4
        } else if (accuracy < -6 || accuracy > 6) {
            clubstate = "airswing"
            callairswing()
        } else if (false) {
        	
        } else {
        	
        }
        clubhead.say(accuracy)
        caddie.say(adjustedaccuracy)
        clubstate = "shot"
        callFollowandball()
        ball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        ball.setPosition(132, 26)
        landing_zone = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 1 2 2 2 . . . . . . 
            . . . . 2 . . . . 2 . . . . . . 
            . . . . 2 . . . . 2 . . . . . . 
            . . . . 2 2 . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.helper)
        landing_zone.setPosition(132 - swingpower, 26 + adjustedaccuracy * -4)
        for (let index = 0; index < 30; index++) {
            ball.follow(landing_zone, swingpower)
            swingpower = swingpower - 1
        }
        ball.follow(landing_zone, swingpower)
        ball.fx = 20
        clubstate = "endshot"
    }
})
function callFollowandball () {
    animation.runImageAnimation(
    golfer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a . . . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . . . b . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 . . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a . . . . . . . . . . . . 
        . . . . b b . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 . . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . a b b 2 . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . 5 . 5 5 . . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 2 5 5 5 . . . . . . . . 
        . . b . 5 5 5 5 . . . . . . . . 
        . a . . 5 e e e . . . . . . . . 
        . . . . 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 2 5 5 5 . . . . . . . . 
        . . . b 5 5 5 5 . . . . . . . . 
        . . . b 5 e e e . . . . . . . . 
        . . . a 5 e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . b 2 5 5 5 . . . . . . . . 
        . . . b 5 e e e . . . . . . . . 
        . . . b 5 e e e . . . . . . . . 
        . . . a 5 e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    400,
    false
    )
}
function callbackSwing () {
    animation.runImageAnimation(
    golfer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 a . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 b e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 a . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 . . . 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . 2 5 5 . . . . . . . . 
        . . . . 5 . . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b a . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . 2 b 5 . . . . . . . . 
        . . . . 5 5 . 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 2 . . . . . . . . . 
        . . . . . 5 5 b b a . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 2 . . . . . . . . 
        . . . . . 5 5 5 b . . . . . . . 
        . . . . . e e e 5 b . . . . . . 
        . . . . . e e e 5 5 b . . . . . 
        . . . . . e e e . . a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 2 . . . . . . . . 
        . . . . . 5 5 5 b . . . . . . . 
        . . . . . e e e 5 b . . . . . . 
        . . . . . e e e 5 5 b . . . . . 
        . . . . . e e e . . a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 2 . . . . . . . . 
        . . . . . 5 5 5 b . . . . . . . 
        . . . . . e e e 5 b . . . . . . 
        . . . . . e e e 5 5 b . . . . . 
        . . . . . e e e . . a . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    400,
    false
    )
}
function resetGolfer () {
    game.showLongText("Last shot info", DialogLayout.Bottom)
    clubhead.setPosition(116, 89)
    golfer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 a . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . b . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 5 . 5 . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 e e e 5 . . . . . . . 
        . . . . 5 b e e 5 . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    clubstate = "rest"
}
let landing_zone: Sprite = null
let adjustedaccuracy = 0
let accuracy = 0
let swingpower = 0
let clubstate = ""
let ball: Sprite = null
let golfer: Sprite = null
let clubhead: Sprite = null
let caddie: Sprite = null
caddie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b d b . . . . . . . 
    . . . . 9 9 b b b 9 9 . . . . . 
    . . . . 9 9 d b b 9 9 . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.helper)
caddie.setPosition(129, 0)
clubhead = sprites.create(img`
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    6 6 
    `, SpriteKind.Player)
let powermeter = sprites.create(img`
    116....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    116....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    116....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    116....55555555558666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    116....55555555558666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555558666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555558666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    111....55555555556666666688888888886666666666888888888866666666668888888888666666666688888888886666666666888888888811122222224444444777777744444442222222.......
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.bar)
golfer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 a . . . . . . . . . 
    . . . . . . b . . . . . . . . . 
    . . . . . . b . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . 5 . 5 . . . . . . . . 
    . . . . 5 . . . 5 . . . . . . . 
    . . . . 5 e e e 5 . . . . . . . 
    . . . . 5 e e e 5 . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.bar)
ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.bar)
clubhead.setPosition(116, 89)
powermeter.setPosition(80, 94)
golfer.setPosition(132, 27)
clubstate = "rest"
game.onUpdate(function () {
    caddie.say(clubstate)
    if (clubstate == "endshot") {
        resetGolfer()
    } else if (clubstate == "airswing") {
    	
    } else {
    	
    }
})
