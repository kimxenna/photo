let a = $(window).width()
let header = true;
abc(a)



// 휠 이벤트
window.addEventListener('load',function(){
    this.setTimeout(function(){
        this.scrollTo(0, 0)
    },10)
    })
    let num=0;
    let state=1;
    function scrolling(e) {
        if ( e.wheelDelta < 0 &&state==1 ) {
            state=0;
            num++;
            if(num >11){
                num=11;
                state=1;
    
            }else{
            $("html, body").stop()
                        .animate({ scrollTop: $('section:eq('+ num +')')
                        .position().top },2000,'easeInOutQuint',function(){
                            state=1
                        });
                    }
    
        }
        else if ( e.wheelDelta > 0 &&state==1 ){
            state=0;
            num--;
            if(num <0){
                num=0;
                state=1;
    
            }else{
            $("html, body").stop()
                        .animate({ scrollTop: $('section:eq('+ num +')')
                        .position().top },1000,'easeInOutQuint',function(){
                            state=1
                        });
                    }
                    
        }
        $("#gnb li").removeClass('on');
        $("#gnb li:eq("+ num +")").addClass('on');
    }
    
    document.addEventListener('wheel', function(e){
        e.preventDefault();
        scrolling(e);
    }, { passive: false})

    // 내비 클릭 이벤트
    $("#gnb li").on('click', function() {
        num=$(this).index();
        $("#gnb li").removeClass('on');
        $(this).addClass('on');
        let idName = $(this).children("a").attr('href');
        let pos = $(idName).position().top;
        $("html, body").stop().animate({ scrollTop: pos },1000);
    });
    // 글씨 나타나기
    $(".photos>div").on('mouseover',function(e){
      $(".photo_description",this).css("opacity","1")
    })
    // 글씨 사라지기
    $(".photos>div").on('mouseleave',function(e){
      $(".photo_description",this).css("opacity","0")
    })
  
    // 클릭이벤트
  $(".photos>div").on("click",function(){
    let index = $(this).index()+1
    alert(`${index}번째 우리의 추억! 눌러주셔서 감사합니다 :)`);
  })
 

  // 네비게이션이 900이하일때 사라지게
 
$(window).on("resize",function(e){
  let window = $(this).width()
  abc(window);
}) 
function abc(window){
  if(window <= 900 && header==true){
    header = false;
    $("header").hide();
    $("#menu").show();
  // 네비게이션 900이상일때 나타나게
  }else if(window >900){
    header = true;
    $("header").show();
    $("#menu").hide();
  }
} 
// 
$('#menu').on('click', function(e){
  $('#header').slideToggle();
})



