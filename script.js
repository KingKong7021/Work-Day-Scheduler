function timeBlocks() {
    var timeBlkDiv = ""
    var currentHour = moment().hour()
    for (let i = 8; i <= 18; i++) {
        var timeHour = ""
        var savedEntry = localStorage.getItem(i) || ""
        if (i > 12) {
            timeHour = (i - 12) + "pm"
        } else if (i === 12) {
            timeHour = i + "pm"
        } else {
            timeHour = i + "am"
        }
        var currentColor = ""
        if( i === currentHour){
            currentColor = "present"
        }else if(i < currentHour){
            currentColor = "past"
        }else{
            currentColor = "future"
        }
        timeBlkDiv += `<div class="row m-1 p-1">
        <h4 class="hour text-center">${timeHour}</h4>
        <textarea id="${i}" value=${savedEntry} placeholder=${savedEntry} row="2" cols="90" class="description ${currentColor}"></textarea>
        <button class="saveBtn">Save</button>
        </div>`
    }
    $(".container").html(timeBlkDiv)

}

timeBlocks()
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))


$(".saveBtn").on("click", function () {
    var textEntry = $(this).siblings(".description").val()
    var time = $(this).siblings(".description").attr("id")
    console.log("click",textEntry,time)
    localStorage.setItem(time,textEntry)
})