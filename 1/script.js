function spliter(timeString) {
    const splitedTime = timeString.split(" ");
    let [hour,minute] = splitedTime[0].split(":");

    if (splitedTime[1] == "p.m" && hour != "12") {
        hour = (+hour + 12).toString();
    } else if(splitedTime[1] == "a.m" && hour == "12") {
        hour = (+hour - 12).toString();
    }
    return [hour,minute];

}

function clacTime(mealTime,Timenow,meal) {
    let result = mealTime - Timenow;
    let hourNow = Math.floor(Math.floor(result/60000)/60);
    let minNow = Math.floor(Math.floor(result/60000)%60);
    if (hourNow > 0) {
        console.log(`${hourNow} hours and ${minNow} minutes until next ${meal}`)
    }else if (result == 0) {
        console.log(`Its Time For ${meal}!!`);
    } else {
        console.log(`${minNow} minutes until next ${meal}`)
    }
}

function toTimeStamp(item) {
    return new Date(1970,0,1,item[0],item[1]).getTime();
}

function nextMeal (time) {
    let result = 0;
    const breakfast = "7:00 a.m";
    const lunch = "12:00 p.m";
    const dinner = "7:00 p.m";

    const newTime = toTimeStamp(spliter(time));
    const breakFastTime = toTimeStamp(spliter(breakfast));
    const lunchTime = toTimeStamp(spliter(lunch));
    const dinnerTime = toTimeStamp(spliter(dinner));

    let nextBreakFast = spliter(breakfast);
    const nextDay = new Date(1970,0,2,nextBreakFast[0],nextBreakFast[1]).getTime();

    if (newTime < breakFastTime) {
        clacTime(breakFastTime,newTime,"breakfast")
    }else if (newTime < lunchTime) {
        clacTime(lunchTime,newTime,"lunch")
    }else if( newTime < dinnerTime) {
        clacTime(dinnerTime,newTime,"dinner")
    }else {
        clacTime(nextDay,newTime,"breakfast");
    }

}

nextMeal("10:20 a.m");
