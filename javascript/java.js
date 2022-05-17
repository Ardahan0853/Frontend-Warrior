

$(document).ready(function(){


  $(".story").click(function(){
    $(".middle2").addClass("middle2-2")

    $(".middle2").animate({
        width: '400px',
        height:  "200px"
    }, 1000);
    $(".after-an").show().animate({opacity: 1}, 3000);


  });

});
$(".btn1").on("click",function(){
  $(".sword").removeClass("sword2")
});





for (let i = 0; i <= 8; i++) {

  let n = Math.random()*3
  console.log(n)
  $('p')[i].setAttribute("style", "color: transparent;text-align: center;animation: effect "+n+"s linear infinite; \ }@keyframes effect {0% {background: linear-gradient(  #947EC3, #EEF3D2);-webkit-background-clip: text;}100% {background: linear-gradient(#B689C0, #947EC3);-webkit-background-clip: text;}  }")
}
