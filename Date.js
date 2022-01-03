  function date() {const date = new Date();
    return document.getElementById("date").innerHTML = date.getUTCDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "<br>" + ((date.getHours()<10?"0":"")+date.getHours()) + ":" + ((date.getMinutes()<10?"0":"")+date.getMinutes())
  }

  console.log(date())

