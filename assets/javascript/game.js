var Chen = {HP: 650, attack: 48, counterAttack: 50, spawn: "../images/Chen_spawn.mp3"};
var CM = {HP: 524, attack: 44, counterAttack: 38, spawn: "../images/CM_spawn.mp3"};
var NS = {HP: 718, attack: 61, counterAttack: 65, spawn: "../images/NS_spawn.mp3"};
var VS = {HP: 525, attack: 39, counterAttack: 47, spawn: "../images/VS_spawn.mp3"};
var attackCount = 0;
var selected

$(document).ready(function() {
    $("#heroes").on("click", ".hero", function() {
        if ($("#radiant").contents().length == 0) {
            $(this).appendTo(("#radiant"))
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



/*

    //if no hero, put into radiant. play sound.
    //else put into  dire, play sound.

    // if hero in radiant && no hero in dire
    //on click, add hero to dire

$("#attack").on("click", function() {
    ($(""))
});
//button on click, hero radiant <<attacks>>
//dire <<counterattacks>>

//if dire HP <= 0, status = hidden

//if radiant <= 0, game over

*/