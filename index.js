let firstAnswer  = window.prompt('Welcome to Hogwarts where you have been sorted into Slytherin House! Upon exploring the grounds you come across a path that forks two ways. Do you go LEFT or RIGHT?');

console.log(firstAnswer);

if(firstAnswer === 'left') {
    console.log("You entered left!");

    let secondAnswer = window.prompt(`You are heading to the forbidden forest! Go THROUGH or AROUND?`);
    console.log(secondAnswer);

    if (secondAnswer === 'through') {
        console.log('You wenth through the forest!');

        let thirdAnswer = window.prompt('You entered the forbidden forest and you are approached by the Dark Lord Voldemort! He asks you to become a death eater and join the Dark Army. Do you ACCEPT or REFUSE his invitation?');
        console.log('thirdAnswer');

    } else if (secondAnswer === 'around') {
        console.log('You went around!');

        let thirdAnswer = window.prompt('You went around the forest and ran into Bellatrix Lestrange! Bellatrix, the infamous death eater, uses the crucio curse on you and forces you to join the Dark Army.. do you work as a DOUBLE AGENT and tell the good guys all the Dark Armys plans? Or do you faithfully SERVE the Dark Army?');
        console.log('thirdAnswer');
    }



} else if(firstAnswer === 'right') {
    console.log("You entered right!");

    let secondAnswer = window.prompt(`You are heading to the Whomping Willow! A sentient and violent magical tree that attacks everything in its way! Do you try to go AROUND or go UNDER into a small tunnel?`);
    console.log(secondAnswer);

    if (secondAnswer === 'under') {
        console.log('You went under the whomping willow into the tunnel!');

        let thirdAnswer = window.prompt('You went through the tunnel under the whomping willow and it leads you inside the Shrieking Shack. ');
        console.log('thirdAnswer');

    } else if (secondAnswer === 'around') {
        console.log('You went around!');

        let thirdAnswer = window.prompt('You went around the whomping willow and realize that it is dark and a full moon tonight. Before you hear it, a werewolf jumps in front of you! Do you use STUPEFY, the stunning spell to render the werewolf temporarily unconscious? or AVADA KEDAVRA, the killing curse?');
        console.log('thirdAnswer');
    }


} else {
    console.log('You did not enter a valid response..to the Dungeon!')
}