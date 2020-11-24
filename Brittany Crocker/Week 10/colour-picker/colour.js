$(document).ready( function () {

const logMouseMove = function (e) {
  // console.log("event", e)
  // if (e.clientX > 200 && e.clientX < 500) {
    $('div').css("background-color", `rgba(${parseInt($(this).css("background-color")[4].concat(parseInt($(this).css("background-color")[5]))) + 10},
    ${parseInt($(this).css("background-color")[4].concat(parseInt($(this).css("background-color")[5]))) + 10},
    ${parseInt($(this).css("background-color")[13].concat(parseInt($(this).css("background-color")[14])))})`)

  let a = (parseInt($(this).css("background-color")[4].concat(parseInt($(this).css("background-color")[5]))) + 10)
  let b = $(this).css("background-color")
  console.log('a', a)
    console.log($(this).css("background-color"))
  // } if (e.clientX < 200 ) {
    $('div').addClass("green")
    console.log('here')
  // }
}
// window.onmousemove = logMouseMove
$(".colour").on("mousemove", logMouseMove)
console.log('hello')
}
)
