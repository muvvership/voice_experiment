function generateNewEquation () {
    answerinput = 0
    basic.clearScreen()
    num1 = randint(1, 8)
    num2 = randint(1, 9 - num1)
    answerstored = num1 + num2
    basic.showNumber(num1)
    basic.pause(500)
    basic.showString("+")
    basic.pause(500)
    basic.showNumber(num2)
    basic.pause(500)
    basic.showString("=")
}
input.onButtonPressed(Button.A, function () {
    generateNewEquation()
})
function checkvoice () {
    if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
        answerinput = 1
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W6)) {
        answerinput = 2
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W7)) {
        answerinput = 3
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W8)) {
        answerinput = 4
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W9)) {
        answerinput = 5
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W10)) {
        answerinput = 6
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W11)) {
        answerinput = 7
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W12)) {
        answerinput = 8
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W13)) {
        answerinput = 9
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W14)) {
        answerinput = 10
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W15)) {
        answerinput = 11
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W16)) {
        answerinput = 12
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W17)) {
        answerinput = 13
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W18)) {
        answerinput = 14
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W19)) {
        answerinput = 15
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W20)) {
        answerinput = 16
    } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W21)) {
        answerinput = 17
    }
}
let num2 = 0
let num1 = 0
let answerstored = 0
let answerinput = 0
voiceRecognition.init()
voiceRecognition.setVolume(5)
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
voiceRecognition.setWakeTime(30)
basic.showIcon(IconNames.Yes)
answerinput = 0
answerstored = 1
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        checkvoice()
    }
    if (answerinput == answerstored) {
        basic.showIcon(IconNames.Happy)
    }
})
