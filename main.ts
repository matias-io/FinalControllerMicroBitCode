function Left () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
    radio.sendString("Left")
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
    	
    } else if (receivedNumber == 1) {
    	
    } else {
    	
    }
})
function Forward () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendString("Forward")
}
input.onButtonPressed(Button.A, function () {
    StandBy()
    basic.pause(200)
    basic.showString("Remote")
    Allow_Reset = true
    radio.sendString("StopAutonamous")
})
input.onButtonPressed(Button.B, function () {
    Allow_Reset = false
    StandBy()
    basic.pause(200)
    basic.showString("Autonamous")
    radio.sendString("Autonamous")
})
function Right () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
    radio.sendString("Right")
}
function StandBy () {
    basic.showLeds(`
        # . . . #
        . . # . .
        . # . # .
        . . # . .
        # . . . #
        `)
    radio.sendString("StandBy")
}
function Backward () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # . # .
        . . # . .
        `)
    radio.sendString("Backward")
}
let roll = 0
let pitch = 0
let Allow_Reset = false
radio.setGroup(66)
Allow_Reset = true
basic.forever(function () {
    if (Allow_Reset) {
        pitch = input.rotation(Rotation.Pitch)
        roll = input.rotation(Rotation.Roll)
        if (-15 <= pitch && pitch <= 15 && -15 <= roll && roll <= 15) {
            StandBy()
        } else if (pitch < -15) {
            Forward()
        } else if (pitch > 15) {
            Backward()
        } else if (roll > 15) {
            Right()
        } else if (roll < -15) {
            Left()
        } else {
        	
        }
    }
})
