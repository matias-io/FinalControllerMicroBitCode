def Left():
    basic.show_leds("""
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        """)
    radio.send_string("Left")

def on_received_number(receivedNumber):
    if receivedNumber == 0:
        pass
    elif receivedNumber == 1:
        pass
    else:
        pass
radio.on_received_number(on_received_number)

def Forward():
    basic.show_leds("""
        . . # . .
        . # . # .
        # . # . #
        . . # . .
        . . # . .
        """)
    radio.send_string("Forward")

def on_button_pressed_a():
    global Allow_Reset
    radio.send_string("StandBy")
    basic.show_string("Control")
    Allow_Reset = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Allow_Reset
    radio.send_string("StandBy")
    basic.show_string("Autonamous")
    Allow_Reset = False
input.on_button_pressed(Button.B, on_button_pressed_b)

def Right():
    basic.show_leds("""
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        """)
    radio.send_string("Right")
def StandBy():
    basic.show_leds("""
        # . . . #
        . . # . .
        . # . # .
        . . # . .
        # . . . #
        """)
    radio.send_string("StandBy")
def Backward():
    basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # . # .
        . . # . .
        """)
    radio.send_string("Backward")
roll = 0
pitch = 0
Allow_Reset = False
radio.set_group(66)
Allow_Reset = True

def on_forever():
    global pitch, roll
    if Allow_Reset:
        pitch = input.rotation(Rotation.PITCH)
        roll = input.rotation(Rotation.ROLL)
        if -15 <= pitch and pitch <= 15 and -15 <= roll and roll <= 15:
            StandBy()
        elif pitch < -15:
            Forward()
        elif pitch > 15:
            Backward()
        elif roll > 15:
            Right()
        elif roll < -15:
            Left()
        else:
            pass
basic.forever(on_forever)
