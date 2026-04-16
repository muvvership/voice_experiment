function generateNewEquation() {
    
    answerinput = 0
    num1 = randint(1, 6)
    num2 = randint(1, 12 - num1)
    answerstored = num1 + num2
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    generateNewEquation()
    displayEquation()
})
function checkvoice() {
    
    if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
        answerinput = 1
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W6)) {
        answerinput = 2
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W7)) {
        answerinput = 3
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W8)) {
        answerinput = 4
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W9)) {
        answerinput = 5
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W10)) {
        answerinput = 6
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W11)) {
        answerinput = 7
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W12)) {
        answerinput = 8
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W13)) {
        answerinput = 9
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W14)) {
        answerinput = 10
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W15)) {
        answerinput = 11
    } else if (cmd == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W16)) {
        answerinput = 12
    }
    
}

function displayEquation() {
    basic.clearScreen()
    basic.showNumber(num1)
    basic.pause(500)
    basic.showString("+")
    basic.pause(500)
    basic.showNumber(num2)
    basic.pause(500)
    basic.showString("=")
}

let lastcmd = 0
let cmd = 0
let answerstored = 0
let num2 = 0
let num1 = 0
let answerinput = 0
voiceRecognition.init()
voiceRecognition.setVolume(30)
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
voiceRecognition.setWakeTime(255)
basic.showIcon(IconNames.Yes)
basic.forever(function on_forever() {
    
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        cmd = voiceRecognition.readCMDID()
        if (cmd != lastcmd && cmd != 0) {
            lastcmd = cmd
            if (cmd == 128) {
                basic.showIcon(IconNames.Fabulous)
            } else if (cmd == 22) {
                generateNewEquation()
                displayEquation()
            } else if (cmd == 72) {
                basic.showArrow(ArrowNames.North)
                basic.pause(80)
                basic.showArrow(ArrowNames.NorthEast)
                basic.pause(80)
                basic.showArrow(ArrowNames.East)
                basic.pause(80)
                basic.showArrow(ArrowNames.SouthEast)
                basic.pause(80)
                basic.showArrow(ArrowNames.South)
                basic.pause(80)
                basic.showArrow(ArrowNames.SouthWest)
                basic.pause(80)
                basic.showArrow(ArrowNames.West)
                basic.pause(80)
                basic.showArrow(ArrowNames.NorthWest)
                basic.pause(80)
                basic.showArrow(ArrowNames.North)
                basic.pause(80)
                basic.showArrow(ArrowNames.NorthEast)
                basic.pause(80)
                basic.showArrow(ArrowNames.East)
                basic.pause(80)
                basic.showArrow(ArrowNames.SouthEast)
                basic.pause(80)
                basic.showArrow(ArrowNames.South)
                basic.pause(80)
                basic.showArrow(ArrowNames.SouthWest)
                basic.pause(80)
                basic.showArrow(ArrowNames.West)
                basic.pause(80)
                basic.showArrow(ArrowNames.NorthWest)
                basic.pause(80)
                basic.showIcon(IconNames.Confused)
            } else {
                checkvoice()
                if (answerinput != 0) {
                    basic.showNumber(answerinput)
                    basic.pause(800)
                    if (answerinput == answerstored) {
                        basic.showIcon(IconNames.Happy)
                    } else {
                        basic.showIcon(IconNames.No)
                    }
                    
                    answerinput = 0
                }
                
            }
            
        }
        
    } else {
        lastcmd = 0
    }
    
})
