function traffic(signal){
    switch(signal){
        case 'green':
            console.log("Cross the road");
            break;
        case 'yellow':
            console.log("Stop");
            break;
        case 'red':
            console.log("You will be in danger, do not cross the road");
            break;
        default:
            console.log("invalid color!!");
    }
}

traffic('green');