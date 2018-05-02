var Chen = {Name: "Chen", HP: 650, attack: 48, counterAttack: 50, spawn: "../images/Chen_spawn.mp3"};
var CM = {Name: "Crystal Maiden", HP: 524, attack: 44, counterAttack: 38, spawn: "../images/CM_spawn.mp3"};
var NS = {Name: "Night Stalker", HP: 718, attack: 61, counterAttack: 65, spawn: "../images/NS_spawn.mp3"};
var VS = {Name: "Vengeful Spirit", HP: 525, attack: 39, counterAttack: 47, spawn: "../images/VS_spawn.mp3"};
var radiant = {};
var dire = {};
var attackCount = 0;
var selected;
var enemyCount = 3;

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
            //audio.Play(radiant.spawn);
        }

         else if ($("#dire").contents().length == 0) {
            $(this).appendTo(("#dire"))
            dire = $(this).data("data-stats");
            //audio.play(dire.spawn);
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
            alert("Choose Your Enemy");
    }
        else {
            attackCount++;
            dire.HP = (dire.HP - (radiant.attack * attackCount));
            if (dire.HP > 0) {
                alert("You attacked "+dire.Name+" for "+(radiant.attack * attackCount)+ " damage, and now "+dire.Name+" has "+dire.HP+" health remaining.")
            }
            else if (dire.HP <= 0) {
                alert("You attacked "+dire.Name+" for "+(radiant.attack * attackCount)+ " damage, and has been defeated")
                $("#dire").contents().appendTo("#defeated") //dire hero to variable, to appendTo on new game creation
                enemyCount--
            }
            radiant.HP = (radiant.HP - dire.counterAttack);
            if (radiant.HP > 0 && ("#dire").contents().length == 0) {
                alert(dire.Name+" attacked back for "+dire.counterAttack+", you have "+radiant.HP+" remaining.")
            }
            if (enemyCount == 0) {
                alert ("Radiant Victory!");
            }
            else {
                alert(dire.Name+" attacked back for "+dire.counterAttack+", and has slain you.")
                alert("Dire Victory")
                $("#radiant").contents().appendTo("#defeated");
                $("#heroes").contents().appendTo("#defeated");
            };
        }
    });
});

function newGame() {
    $("defeated").contents().appendTo("#heroes");
}

//to do: newGame function for resetting
//to do: add juke option if time is available.