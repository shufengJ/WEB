  function date() {const date = new Date();
    return document.getElementById("date").innerHTML = date.getUTCDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "<br>" + date.getHours() + ":" + date.getMinutes()
}

console.log(date())

