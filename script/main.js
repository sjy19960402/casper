$(document).ready(function(){
    
    // 헤더영역에 오버하면 .on, .h_on 클래스 적용, 마우스 아웃시 제거

    $('header').hover(function(){ //오버시
        $(this).find('i.fas').addClass('on');
        $(this).find('.gnb a').addClass('on');
        //로고 이미지 변경
        $(this).find('h1 img').attr('src','./img/logo_black.png');
        $('header').addClass('h_on');

    },function(){ //아웃시
        $('header i.fas').removeClass('on');
        $('.gnb a').removeClass('on');
        $('h1 img').attr('src','./img/logo_white.png');
        $('header').removeClass('h_on');
    });

    // 스크롤 이벤트, 일정영역 이상 내려가면 위 서식 적용
    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        console.log(sPos);
        if(sPos>=953){
            // 헤더에 마우스를 오버해도 서식이 사라지지 않도록
            
            $('header').find('i.fas').addClass('on');
            $('header').find('.gnb a').addClass('on');
            //로고 이미지 변경
            $('header').find('h1 img').attr('src','./img/logo_black.png');
            $('header').addClass('h_on');

            $('header').mouseleave(function(){
                $(this).find('i.fas').addClass('on');
                $(this).find('.gnb a').addClass('on');
                //로고 이미지 변경
                $('header').find('h1 img').attr('src','./img/logo_black.png');
                $('header').addClass('h_on');
            });

        }else{
        $('header i.fas').removeClass('on');
        $('.gnb a').removeClass('on');
        $('h1 img').attr('src','./img/logo_white.png');
        $('header').removeClass('h_on');

        $('header').mouseleave(function(){
            $(this).find('i.fas').removeClass('on');
            $(this).find('.gnb a').removeClass('on');
            //로고 이미지 변경
            $('header').find('h1 img').attr('src','./img/logo_white.png');
            $('header').removeClass('h_on');
        });
        }
    });
});