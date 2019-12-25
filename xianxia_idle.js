//asdf

var daoStages = ['Plebian',  'Amateur', 'Disciple', 'Master', 'King', 'Emperor', 'God', 'Immortal' ] //should add more levels
var spiritualPowerGain = [0, 3]

function startCultivation(){
    var cultivateButton = document.getElementById('cultivateButton')
    document.getElementById('cultivateButton').disabled = true
    cultivateButton.style.cursor = 'default'
   // document.getElementById('noCultivationsCount').style.display = 'block'
    
    var noCultivations = 0
    var width = 0;
    if (width == 0){
        var progressBar = document.getElementById('cultivationProgress')
        progressBar.style.display = 'block'
        var width = 1;
        var progressFunction = setInterval(progress, 50)
        var stopProgressBarFunction = setInterval(stopProgressBar,25000)
        function progress(){
            if (width == 100){
                width = 1
                progressBar.style.width = 0
                cultivateButton.style.cursor = 'pointer'
                cultivateSpiritualPower()
            } else {
                width ++
                progressBar.style.width = width + '%'
            }
        }
        function stopProgressBar(){
            document.getElementById('cultivateButton').disabled = false
            clearInterval(progressFunction)
            clearInterval(stopProgressBarFunction)
        }
    }
}

function cultivateSpiritualPower(){
    var spiritualPowerGainLower = Number(document.getElementById('spiritualPowerGainLower').innerHTML)
    var spiritualPowerGainUpper = Number(document.getElementById('spiritualPowerGainUpper').innerHTML)
    var spiritualPower = Number(document.getElementById('spiritualPower').innerHTML)
    var spiritualPowerNeeded = Number(document.getElementById('spiritualPowerNeeded').innerHTML)

    var spiritualPowerGained = getRndInteger(spiritualPowerGainLower, spiritualPowerGainUpper)

    spiritualPower += spiritualPowerGained
    document.getElementById('spiritualPower').innerHTML = spiritualPower

    if (spiritualPower >= spiritualPowerNeeded){
        levelUp(spiritualPowerNeeded)
    }
}

function levelUp(spiritualPowerNeeded){
    var spiritualPowerGainLower = spiritualPowerGain[0]                                                     //big brain code
    document.getElementById("spiritualPowerGainLower").innerHTML = spiritualPowerGain[0]
    var spiritualPowerGainUpper = spiritualPowerGain[1]
    document.getElementById("spiritualPowerGainUpper").innerHTML = spiritualPowerGain[1]
    var spiritualPowerNeeded = Number(document.getElementById('spiritualPowerNeeded').innerHTML)

    var level = Number(document.getElementById('daoLevel').innerHTML)
    level ++
    document.getElementById('daoLevel').innerHTML = level
    
    if(level == 10 ){
        breakThrough(spiritualPowerGainLower, spiritualPowerGainUpper)
    }
    
    if(level == 9 ){
        spiritualPowerNeeded += Math.pow(10, (daoStages.indexOf(document.getElementById('daoStage').innerText) + 2))
        spiritualPowerNeeded += Math.pow(10, (daoStages.indexOf(document.getElementById('daoStage').innerText) + 1)) * 2        
    }else{
        spiritualPowerNeeded += Math.pow(10, (daoStages.indexOf(document.getElementById('daoStage').innerText) + 1))
    }  
    document.getElementById('spiritualPowerNeeded').innerHTML = spiritualPowerNeeded

    if (level == 5){
        spiritualPowerGain[0] = spiritualPowerGainLower + 1
        document.getElementById("spiritualPowerGainLower").innerHTML  = spiritualPowerGain[0]
        spiritualPowerGain[1] = spiritualPowerGainUpper + 1
        document.getElementById("spiritualPowerGainUpper").innerHTML = spiritualPowerGain[1]
    }
}

function breakThrough(spiritualPowerGainLower, spiritualPowerGainUpper){
    var daoStage = document.getElementById('daoStage').innerText
    var daoStageIndex = daoStages.indexOf(daoStage)   
    daoStageIndex ++

    document.getElementById('daoStage').innerHTML = daoStages[daoStageIndex]
    document.getElementById('daoLevel').innerHTML = 1

    document.getElementById('spPerSecond').innerHTML = Math.pow(2, daoStageIndex)

    spiritualPowerGain[0] = spiritualPowerGainLower * 2
    document.getElementById("spiritualPowerGainLower").innerHTML  = spiritualPowerGain[0]
    spiritualPowerGain[1] = spiritualPowerGainUpper * 2
    document.getElementById("spiritualPowerGainUpper").innerHTML = spiritualPowerGain[1]



    if (document.getElementById('daoStage').innerHTML == 'Amateur'){
        document.getElementById('spTalismanOne').disabled = false
    }
}

function spTalismanOne(){
    var spTalismanOneAmount = Number(document.getElementById('spTalismanOneAmount').innerHTML)
    if (spTalismanOneAmount >= 1){
        document.getElementById('spTalismanOne').disabled = true
        spTalismanOneAmount --
        document.getElementById('spTalismanOneAmount').innerHTML = spTalismanOneAmount

        var spPerSecond = Number(document.getElementById('spPerSecond').innerHTML)
        spPerSecond += 5
        document.getElementById('spPerSecond').innerHTML = spPerSecond
        var originalLower = spiritualPowerGain[0]
        var originalUpper = spiritualPowerGain[1]

        for(var i = 0; i < spiritualPowerGain.length; i++) {                                                      //doubles spirit gain from cultivating    
            spiritualPowerGain[i] *= 2
        }
        document.getElementById("spiritualPowerGainLower").innerHTML  = spiritualPowerGain[0]
        document.getElementById("spiritualPowerGainUpper").innerHTML = spiritualPowerGain[1]

        var stopTalismanOne = setInterval(stopTalismanOneTimer, 10000)

        function stopTalismanOneTimer(){
            if (spTalismanOneAmount > 0){
                document.getElementById('spTalismanOne').disabled = false
            }
            document.getElementById('spPerSecond').innerHTML = spPerSecond - 5
            spiritualPowerGain[0] = originalLower
            spiritualPowerGain[1] = originalUpper
            document.getElementById("spiritualPowerGainLower").innerHTML  = spiritualPowerGain[0]
            document.getElementById("spiritualPowerGainUpper").innerHTML = spiritualPowerGain[1]

            clearInterval(stopTalismanOne)
        }
    }
}

function foundationPill(){
    var foundationPillAmount = document.getElementById('foundationPillAmount').innerHTML 
    var cultivateButton = document.getElementById('cultivateButton')
    if (foundationPillAmount > 0){        
        foundationPillAmount -- 
        document.getElementById('foundationPillAmount').innerHTML = foundationPillAmount
        cultivateButton.disabled = true
        cultivateButton.style.cursor = 'default'
        document.getElementById('foundationPill').disabled = true
        var foundationPillDebuff = setInterval(foundationPillDebuffTimer, 10000)
        for(var i = 0; i < spiritualPowerGain.length; i++) {                                                      //doubles spirit gain from cultivating    
            spiritualPowerGain[i] *= 2
        }
        document.getElementById("spiritualPowerGainLower").innerHTML  = spiritualPowerGain[0]
        document.getElementById("spiritualPowerGainUpper").innerHTML = spiritualPowerGain[1]
        
        function foundationPillDebuffTimer(){
            document.getElementById('cultivateButton').disabled = false
            cultivateButton.style.cursor = 'pointer'
            clearInterval(foundationPillDebuff)
        }
    }
}

function spPS(){
    var spiritualPower = Number(document.getElementById('spiritualPower').innerHTML)
    var spPerSecond = Number(document.getElementById('spPerSecond').innerHTML)
    var spiritualPowerNeeded = Number(document.getElementById('spiritualPowerNeeded').innerHTML)
    spiritualPower += spPerSecond
    document.getElementById('spiritualPower').innerHTML = spiritualPower 
    if (spiritualPower >= spiritualPowerNeeded){
        levelUp(spiritualPowerNeeded)
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

window.setInterval(function(){
    spPS()            
}, 1000); 