const Chen = {HP: 650, attack: 48, counterAttack: 50, spawn: "../images/Chen_spawn.mp3"};
const CM = {HP: 524, attack: 44, counterAttack: 38, spawn: "../images/CM_spawn.mp3"};
const NS = {HP: 718, attack: 61, counterAttack: 65, spawn: "../images/NS_spawn.mp3"};
const VS = {HP: 525, attack: 39, counterAttack: 47, spawn: "../images/VS_spawn.mp3"};
var radiant = {};
var dire = {};
var attackCount = 0;
var selected;
var enemyCount = 4;

$(document).ready(function() {
    $("#Chen").data(Chen)
});

$(document).ready(function() {
    $("#heroes").on("click", ".hero", function() {
        if ($("#radiant").contents().length == 0) {
            $(this).appendTo(("#radiant"))
            radiant = this.data;
            //audio.Play(this.spawn);
        }


        else if ($("#dire").contents().length == 0) {
            $(this).appendTo(("#dire"))
            //audio.play(this.spawn);
    }
/*

        else {
            //audio.play("../images/fight.mp3")
        }
    });

    */
    })
});






$("#attack").on("click", function() {
    attackCount++;
    dire.hp = dire.hp - radiant.attack;
    if (dire.hp <= 0) {
        //delete dire hero or move and hide
        enemyCount--
    }
    else {
        radiant.hp = radiant.hp - dire.counterAttack
        if (radiant.hp <= 0) {
            alert("Game Over")
        }
    };

    if (enemyCount = 0) {
        alert ("You win!");
    }
});


//button on click, hero radiant <<attacks>>
//dire <<counterattacks>>

//if dire HP <= 0, status = hidden

//if radiant <= 0, game over