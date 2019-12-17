
(function($){
  const conBox = $('.conBox_02_subBox');
  const slideForm = conBox.find('.clearfix');
  let slideEach =slideForm.find('li');

  // 마지막 요소 복제 정리
  slideEach.eq(-1).clone(true).prependTo(slideForm); 
  slideEach = slideForm.children('li');
  let slideLen = slideEach.length;
  slideForm.css({width:750 * slideLen + 'px', left: '0px', marginLeft:'1150px'});
    //slideEach.css({width:100 / slideLen + '%'});


    // 좌우 버튼 클릭시 이동
    let n = 3;
    const conBtn = conBox.find('.subBox_btn').find('button');

    conBtn.on('click', function(e){
      e.preventDefault();
      let has = $(this).hasClass('next');
      if(has){
        n++;
        if(n >= slideLen/2){
          n=-2;
          slideForm.css({left:'1700px'});
        }
      }else{
        n--;
      }
      
      slideForm.animate({left:-850* n+'px'}),function(){
        if(n <= -1){
          n = slideLen-2;
          slideForm.css({left: -750 * n + 'px'});
        }
      

      indiLi.eq(n).siblings().removeClass('action');
      indiLi.eq(n).addClass('action');
      }
      /*
      if(n==-2){
        n=slideLen/2;
        slideForm.css({left: '0px'});
      }
      */
    })

    // product 

    const colBox = $('.colBox');
    const colLi = colBox.find('li');
    const colLink = colLi.children('a');
    const colText = colLink.children('span');
    
    colLink.on('mouseenter',function(e){
      e.preventDefault();
      colLink.css({backgroundColor:'transparent'});
      colText.fadeIn();
      $(this).css({'backgroundColor':'#fff'});
      colLink.removeClass('action');
      $(this).addClass('action');
      // $(this).children('span').fadeIn();
    });
    colLink.on('mouseleave',function(){
      colLink.css({backgroundColor:'transparent'});
      colText.fadeOut();
      colLink.removeClass('action');
    });






})(jQuery);