import "./app1.css"
import $ from "jquery"

const Num = localStorage.getItem("number")
$("#num").text(Num || 100)

const cal = {
    number: undefined,
    firstStep: () => {
        number = parseInt($("#num").text())
        return number
    },
    secondStep: () => {
        $("#num").text(number)
    },
    cache: () => {
        localStorage.setItem("number", number)
    },
    jia: () => {
        cal.firstStep()
        number++
        cal.cache()
        cal.secondStep()
    },
    jian: () => {
        cal.firstStep()
        number--
        cal.cache()
        cal.secondStep()
    },
    cheng: () => {
        cal.firstStep()
        number *= 2
        cal.cache()
        cal.secondStep()
    },
    chu: () => {
        cal.firstStep()
        number /= 2
        cal.cache()
        cal.secondStep()
    }
}

$("#add").on("click", cal.jia)
$("#subtract").on("click", cal.jian)
$("#multiply").on("click", cal.cheng)
$("#divide").on("click", cal.chu)
