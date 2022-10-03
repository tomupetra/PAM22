function notify(){
    return "Watch your step"
}

function reminder(warn, name){
    console.log(warn() + ", " + name)
}

reminder(notify, "Tomu")