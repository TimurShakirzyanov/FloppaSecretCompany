let arrowRight = document.getElementById("sliderRight")
let containSlider = document.getElementsByClassName("slider")[0]
let arrowLeft = document.getElementById("sliderLeft")
let dist = 0
let speculation = document.getElementById("Speculation")
arrowRight.onclick = function(){
    console.log("Я ЖДУ ТРЕТИЙ СЕЗОН ТЕЛЕПУЗИКОВ УЖЕ СТО ТЫСЯЧ ЛЕТ ПОМОЛГИТЕ ВЙЫУЦМ ВГЦ АПОР ПСКТАДЖ");
    dist = dist - 100
    if (dist == -300) {
        dist = 0
    }
    containSlider.style.transform = "translateX("+dist+"%)";
}
arrowLeft.onclick = function(){
    console.log("Я ЖДУ ТРЕТИЙ СЕЗОН ТЕЛЕПУЗИКОВ УЖЕ СТО ТЫСЯЧ ЛЕТ ПОМОЛГИТЕ ВЙЫУЦМ ВГЦ АПОР ПСКТАДЖ");
    dist = dist + 100
    console.log(dist)
    if (dist == 100) {
        dist = -200
    }
    containSlider.style.transform = "translateX("+dist+"%)";}