radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
    } else if (receivedString == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 120)
    } else if (receivedString == "L") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "R") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
    } else if (receivedString == "S") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (receivedString == "LEDR") {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (receivedString == "LEDL") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (receivedString == "LEDO") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
