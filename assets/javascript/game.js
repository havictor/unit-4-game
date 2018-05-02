var Chen = {Name: "Chen", HP: 650, attack: 48, counterAttack: 50, spawn: new Audio("./assets/images/Chen_spawn.mp3")};
var CM = {Name: "Crystal Maiden", HP: 524, attack: 44, counterAttack: 38, spawn: new Audio("./assets/images/CM_spawn.mp3")};
var NS = {Name: "Night Stalker", HP: 718, attack: 61, counterAttack: 65, spawn: new Audio("./assets/images/NS_spawn.mp3")};
var VS = {Name: "Vengeful Spirit", HP: 525, attack: 39, counterAttack: 4700, spawn: new Audio("./assets/images/VS_spawn.mp3")};
var fight = new Audio("./assets/images/fight.mp3")
var victory = {radiant: new Audio("./assets/images/RadiantVictory.mp3"), dire: new Audio("./assets/images/DireVictory.mp3")}
var radiant = {};
var pick = {begin: new Audio("./assets/images/Welcome.mp3"), radiant: new Audio("./assets/images/RadiantPick.mp3"), dire: new Audio("./assets/images/DirePick.mp3")}
var dire = {};
var attackCount = 0;
var enemyCount = 3;

$(document).ready(function() {
    $("#New").hide();
    pick.begin.play();
    $("#Chen").data("data-stats", Chen);
    $("#CM").data("data-stats", CM);
    $("#NS").data("data-stats", NS);
    $("#VS").data("data-stats", VS);
});

$(document).ready(function() {
    $("#heroes").on("click", ".hero", function() {      
        if ($("#radiant").contents().length == 0) {
            $(this).appendTo(("#radiant"))
            radiant = $(this).data("data-stats");
            radiant.spawn.play();
        }

         else if ($("#dire").contents().length == 0) {
            $(this).appendTo(("#dire"))
            dire = $(this).data("data-stats");
            dire.spawn.play()
    }


        else {
            fight.play()
        }
    });
});

$(document).ready(function() {
    $("#attack").click(function() {
        if ($("#radiant").contents().length == 0) {
            alert("Choose Your Hero");
            pick.radiant.play();
    }
        else if ($("#dire").contents().length == 0) {
            alert("Choose Your Enemy");
            pick.dire.play();
    }
        else {
            attackCount++;
            dire.HP = (dire.HP - (radiant.attack * attackCount));
            if (dire.HP > 0) {
                alert("You attacked "+dire.Name+" for "+(radiant.attack * attackCount)+ " damage, and now "+dire.Name+" has "+dire.HP+" health remaining.");
                $("")
            }
            else if (dire.HP <= 0) {
                alert("You attacked "+dire.Name+" for "+(radiant.attack * attackCount)+ " damage, and has been defeated")
                $("#dire").contents().appendTo("#defeated")
                enemyCount--
            };
            radiant.HP = (radiant.HP - dire.counterAttack);
            if (radiant.HP > 0 && $("#dire").contents().length !== 0) {
                alert(dire.Name+" attacked back for "+dire.counterAttack+", you have "+radiant.HP+" remaining.")
            };
            if (enemyCount == 0) {
                alert ("Radiant Victory!");
                victory.radiant.play();
                $("#New").show();
            }
            else if (radiant.HP <= 0) {
                alert(dire.Name+" attacked back for "+dire.counterAttack+", and has slain you.")
                alert("Dire Victory")
                victory.dire.play();
                $("#New").show();
                $("#radiant").contents().appendTo("#defeated");
                $("#heroes").contents().appendTo("#defeated");
            };
        }
    });
});

$(document).ready(function() {
    $("#New").click(function() {
        $("#defeated").contents().appendTo("#heroes");
        $("#dire").contents().appendTo("#heroes");
        $("#radiant").contents().appendTo("#heroes");
        $("#New").hide();
        pick.begin.play();
        Chen = {Name: "Chen", HP: 650, attack: 48, counterAttack: 50, spawn: new Audio("./assets/images/Chen_spawn.mp3")};
        CM = {Name: "Crystal Maiden", HP: 524, attack: 44, counterAttack: 38, spawn: new Audio("./assets/images/CM_spawn.mp3")};
        NS = {Name: "Night Stalker", HP: 718, attack: 61, counterAttack: 65, spawn: new Audio("./assets/images/NS_spawn.mp3")};
        VS = {Name: "Vengeful Spirit", HP: 525, attack: 39, counterAttack: 4700, spawn: new Audio("./assets/images/VS_spawn.mp3")};
        $("#Chen").data("data-stats", Chen);
        $("#CM").data("data-stats", CM);
        $("#NS").data("data-stats", NS);
        $("#VS").data("data-stats", VS);
        radiant = {};
        dire = {};
        attackCount = 0;
        enemyCount = 3;
    })
});

//to do: dynamic numbers of hp
//to do: balance stats of heroes
//to do: add juke option if time is available.