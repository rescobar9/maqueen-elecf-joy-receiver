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
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
