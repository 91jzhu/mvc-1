import "./app2.css"
import $ from "jquery"

const $nav = $("#app2 .nav")
const $content = $("#app2 .content")

$nav.on("click", "li", (e) => {
    let $li = $(e.currentTarget)
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")
    const index = $li.index()
    $content
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active")
})

$nav.children().eq(0).trigger("click")