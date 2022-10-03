function reminder(name){
    return "Watch your step" + ", " + name;
}

function reminding(warn, name, message){
    console.log(`${warn(name)} ${message}`);
}

reminding(reminder, "Tomu.", " Cheers!");