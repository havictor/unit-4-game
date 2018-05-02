var Chen = {HP: 650, attack: 48, counterAttack: 50, spawn: "../images/Chen_spawn.mp3"};
var CM = {HP: 524, attack: 44, counterAttack: 38, spawn: "../images/CM_spawn.mp3"};
var NS = {HP: 718, attack: 61, counterAttack: 65, spawn: "../images/NS_spawn.mp3"};
var VS = {HP: 525, attack: 39, counterAttack: 47, spawn: "../images/VS_spawn.mp3"};
var radiant = {};
var dire = {};
var attackCount = 0;
var selected;
var enemyCount = 4;

$(document).ready(function() {
    $("#Chen").data("data-stats", Chen)
    $("#CM").data("data-stats", CM)
    $("#NS").data("data-stats", NS)
    $("#VS").data("data-stats", VS)
});

$(document).ready(function() {
    $("#heroes").on("click", ".hero", function() {      
        if ($("#radiant").contents().length == 0) {
            $(this).appendTo(("#radiant"))
            radiant = $(this).data("data-stats");
            //audio.Play(this.spawn);
        }

         else if ($("#dire").contents().length == 0) {
            $(this).appendTo(("#dire"))
            dire = $(this).data("data-stats");
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


$(document).ready(function() {
    $("#attack").click(function() {
        if ($("#radiant").contents().length == 0) {
            alert("Choose Your Hero");
    }
        else if ($("#dire").contents().length == 0) {
            alert("Choose Your Enemy")
    }
        else {
            attackCount++;
            dire.HP = (dire.HP - (radiant.attack * attackCount));
            if (dire.HP <= 0) {
                //delete dire hero or move and hide
                enemyCount--
            }
            else {
                radiant.HP = radiant.HP - dire.counterAttack
                if (radiant.HP <= 0) {
                    alert("Game Over")
                }
            };

        if (enemyCount = 0) {
            alert ("You win!");
        }
        }
    });
});


//button on click, hero radiant <<attacks>>
//dire <<counterattacks>>

//if dire HP <= 0, status = hidden

//if radiant <= 0, game over