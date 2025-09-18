function compareDateTime(timeString1,timeString2){
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    if(dateTime2>dateTime1){
        return true;
    } 
    return false;
}

module.exports = {compareDateTime};