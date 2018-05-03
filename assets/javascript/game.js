var Chen = {Name: "Chen", HP: 650, attack: 13, counterAttack: 32, spawn: new Audio("./assets/images/Chen_spawn.mp3"), health: "ChenHP"};
var CM = {Name: "Crystal Maiden", HP: 524, attack: 16, counterAttack: 38, spawn: new Audio("./assets/images/CM_spawn.mp3"), health: "CMHP"};
var NS = {Name: "Night Stalker", HP: 614, attack: 14, counterAttack: 55, spawn: new Audio("./assets/images/NS_spawn.mp3"),health: "NSHP"};
var VS = {Name: "Vengeful Spirit", HP: 525, attack: 18, counterAttack: 70, spawn: new Audio("./assets/images/VS_spawn.mp3"), health: "VSHP"};
var fight = new Audio("./assets/images/fight.mp3")
var victory = {radiant: new Audio("./assets/images/RadiantVictory.mp3"), dire: new Audio("./assets/images/DireVictory.mp3")}
var radiant = {};
var pick = {begin: new Audio("./assets/images/Welcome.mp3"), radiant: new Audio("./assets/images/RadiantPick.mp3"), dire: new Audio("./assets/images/DirePick.mp3")}
var dire = {};
var attackCount = 0;
var enemyCount = 3;
var radiantHP
var direHP

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
            $("#radiantHealth").text("HP: "+radiant.HP);
            var element = document.getElementById(radiant.health);
            element.parentNode.removeChild(element);
        }
        else if ($("#dire").contents().length == 0) {
            $(this).appendTo(("#dire"))
            dire = $(this).data("data-stats");
            dire.spawn.play()
            $("#direHealth").text("HP: "+dire.HP);
            
            var infanticide = document.getElementById(dire.health);
            infanticide.parentNode.removeChild(infanticide);
            $(".health").hide();
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
            if (dire.HP > 0) {
                attackCount++;
                dire.HP = (dire.HP - (radiant.attack * attackCount));
                if (dire.HP <= 0) {
                    alert("You attacked "+dire.Name+" for "+(radiant.attack * attackCount)+ " damage, and "+dire.Name+" has been defeated")
                    $("#dire").contents().appendTo("#defeated")
                    //
                    $(".health").show();
                    enemyCount--
                }   
                else {
                    alert("You attacked "+dire.Name+" for "+(radiant.attack * attackCount)+ " damage, and now "+dire.Name+" has "+dire.HP+" HP remaining.");
                    $("#direHealth").text("HP: "+dire.HP);
                }
            };
            if (radiant.HP > 0 && $("#dire").contents().length !== 0) {
                radiant.HP = (radiant.HP - dire.counterAttack);
                if (radiant.HP <= 0) {
                    alert(dire.Name+" attacked back for "+dire.counterAttack+" damage, and has slain you.")
                    alert("Dire Victory")
                    victory.dire.play();
                    $("#New").show();
                    $("#radiant").contents().appendTo("#defeated");
                    $("#heroes").contents().appendTo("#defeated");
                }
                else {
                    alert(dire.Name+" attacked back for "+dire.counterAttack+" damage, you have "+radiant.HP+" HP remaining.")
                    $("#radiantHealth").text("HP: "+radiant.HP);
                }
            }
            else if (enemyCount == 0) {
                alert ("Radiant Victory!");
                victory.radiant.play();
                $("#New").show();
            }
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
        Chen = {Name: "Chen", HP: 650, attack: 13, counterAttack: 32, spawn: new Audio("./assets/images/Chen_spawn.mp3"), health: "ChenHP"};
        CM = {Name: "Crystal Maiden", HP: 524, attack: 16, counterAttack: 38, spawn: new Audio("./assets/images/CM_spawn.mp3"), health: "CMHP"};
        NS = {Name: "Night Stalker", HP: 614, attack: 14, counterAttack: 55, spawn: new Audio("./assets/images/NS_spawn.mp3"),health: "NSHP"};
        VS = {Name: "Vengeful Spirit", HP: 525, attack: 18, counterAttack: 70, spawn: new Audio("./assets/images/VS_spawn.mp3"), health: "VSHP"};
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

//to do: add juke option if time is available.