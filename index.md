<script type="text/javascript" src="xianxia_idle.js"></script>
<style>
    header{
        border-style: solid;
        text-align: center;
        font-size: 500%;
    }

    button.cultivateButton{
        font-size: 200%;
        width:20%;
        height: 10%;
        cursor:pointer;
        background-color: rgb(30, 131, 199);
        border-color: black;
        border-radius: 20px;
        border-width: 3px;
        outline: none;
    }

    button.cultivateButton.onClick{
        color: red
    }   

    div.cultivation{
        display: flex;
        justify-content: center;
    }
    
    div.cultivationProgressBar{
        width: 30%;
        background-color: rgb(207, 204, 204);
        margin:auto;
        height: 20px;
        border-radius: 10px;
        text-align: center;
        font-size: 85%;
    }

    div.cultivationProgress{
        width: 3%;
        background-color: red;
        height: 20px;
        border-radius: 10px;
        display: none;
    }

    div.spiritualPower{
        margin: auto;
        text-align: center;
        font-size: 300%;
    }

    div.daolevel{
        margin: auto;
        text-align: center;
        font-size: 150%;
    }

    div.spPerSecond{
        margin: auto;
        text-align: center;
        font-size: 200%;
    }

    div.daoStage{
        margin: auto;
        text-align: center;
        font-size: 250%;
    }

    div.items{
        width: 30%;
        margin-bottom: auto;
        height: 50%;
        border: 2px solid black;
        font-size: 125%;
    }

    div.itemsTitle{
        text-align: center;
        font-size: 150%;
        font-weight: bolder;
    }

    span.spiritualPowerGain{
        font-size: 60%;
    }

</style>

<header>
    Xianxia Idle
</header>

<body>
    <div class = 'spiritualPower'>
        You have <span id = 'spiritualPower'>1</span> / <span id = 'spiritualPowerNeeded'>10</span> spiritual power.
    </div>
    <br>
    <div class = 'daoStage' id = 'daoStage'>
        Plebian
    </div>
    <div class = 'daoLevel'>
        (<span id = 'daoLevel'>1</span>)<button onClick = 'levelUp()'>Level + 1</button>
    </div>
    <br>
    <div class = 'spPerSecond'>
        Passively gaining <span id = 'spPerSecond'>0</span> SP per second.
    </div>
    <br>
    <div class = 'cultivation'>
        <button id = 'cultivateButton' class = 'cultivateButton' onClick = 'startCultivation()'>
            Cultivate <br> <span class = 'spiritualPowerGain'>(<span id = 'spiritualPowerGainLower'>0</span>-<span id = 'spiritualPowerGainUpper'>3</span> SP) X 5</span>
        </button>
    </div>
    <br>
    <div id = 'cultivationProgressBar' class = 'cultivationProgressBar'>
        

        <div id = 'cultivationProgress' class = 'cultivationProgress'>
                    
        </div>
    </div>

    <div class = 'items'>
        <div class = 'itemsTitle'>
            Items
        </div>
        <br>       
        <div title = 'Passively gain 5 SP per second for 5 minutes. Also doubles the amount of spiritual power you get from cultivating. Only useable after reaching the stage of Amateur. Does not stack.'> 
            Level One Gem of Spiritual Power (<span id = 'spTalismanOneAmount'>5</span>): <button onClick = 'spTalismanOne()' id = 'spTalismanOne' disabled>Use</button>
        </div>
        <div title = 'You are unable to cultivate for 2 minutes, but all subsequent cultivation after is doubled. Can only be used in Plebian Stage.'>
            Foundation Pill (<span id = 'foundationPillAmount'>1</span>): <button onClick = 'foundationPill()' id = 'foundationPill'>Use</button>
        </div> 
    </div>
</body>
