import "./reset.css"
import "./app1.css"
import $ from "jquery"

const $button1 = $("#add")
const $button2 = $("#subtract")
const $button3 = $("#multiply")
const $button4 = $("#divide")
let number

const cal = {
    firstStep: () => {
        number = parseInt($("#num").text())
        return number
    },
    secondStep: () => {
        $("#num").text(number)
    },
    jia: () => {
        cal.firstStep()
        number++
        cal.secondStep()
    },
    jian: () => {
        cal.firstStep()
        number--
        cal.secondStep()
    },
    cheng: () => {
        cal.firstStep()
        number *= 2
        cal.secondStep()
    },
    chu: () => {
        cal.firstStep()
        number /= 2
        cal.secondStep()
    }
}

$button1.on("click", cal.jia())
$button2.on("click", cal.jian())
$button3.on("click", cal.cheng())
$button4.on("click", cal.chu())

