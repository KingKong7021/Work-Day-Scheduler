function timeBlocks() {
    var timeBlkDiv = ""
    for (let i = 8; i <= 18; i++) {
        var timeHour = ""
        if (i > 12) {
            timeHour = (i - 12) + "pm"
        } else if (i === 12) {
            timeHour = i + "pm"
        } else {
            timeHour = i + "am"
        }
        timeBlkDiv += `<div class="row m-1 p-1">
        <h4 class="hour text-center">${timeHour}</h4>
        <textarea id="${i}" row="2" cols="90" class="description"></textarea>
        <button class="saveBtn">Save</button>
        </div>`
    }
    $(".container").html(timeBlkDiv)

}

timeBlocks()
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))


$(".saveBtn").on("click", function () {
    console.log("click")
})