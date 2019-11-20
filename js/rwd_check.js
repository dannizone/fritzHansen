// rwd_check.js
(function($){
  const conBox = $('#conBox');
  // 각 디바이스별 크기 기준 설정
  const mobile=480, tablet=768,labtop=1366, pc=1600;
  // 기본 디바이스 명칭 설정
  const device = ['mobile','tablet','labtop','pc','pcfull'];

  let nowSize;
  // let winW = $(window).outerWidth(true); // 브라우저의 가로값 확인
  let beforeW = $(window).outerWidth(true); // 브라우저의 가로값 확인
  // 각 디바이스 상황에 맞는 data 처리
    // ----------------------------------------------------
    const DeviceDate = function(wid){
      switch(wid){
        case device[0]: 
          conBox.load('./temp/main_mob.html');
        break;
        case device[1]: 
          conBox.load('./temp/main_tab.html', function(){
            $('body').append('<script src="../js/tab.js"></script>');
          });
        break;
        case device[2]: 
        case device[3]: 
        case device[4]: 
          conBox.load('./temp/main_pc.html',function(){
            $('head').find('title').before('<link rel="stylesheet" href="../css/pc.css">');
            $('body').append('<script>console.log("pc");</script>');
          });
        break;
      }
    };
    // ----------------------------------------------------
  // 디바이스 크기 체크
  const DeviceSet = function(winW){  // 함수의 이름으로 첫글자를 대문자로 씀. 함수화해서 쓴다. 여러번 사용할수있음
  if(winW <= mobile){
    nowSize = device[0];
  }else if(winW > mobile && winW <= tablet){
    nowSize = device[1];
  }else if(winW > tablet && winW <= labtop){
    nowSize = device[2];
  }else if(winW > labtop && winW <= pc){
    nowSize = device[3];
  }else{nowSize = device[4];}
  return nowSize;
}
  let beforeDevice = DeviceSet(beforeW);
  // console.log(nowSize);
  DeviceDate(beforeDevice);

  // 파이어폭스인가 아닌가 판단하기 -----------------------------
  let browser = navigator.userAgent.toLowerCase();
  let nowb = null;
  if(browser.indexOf('firefox') !== -1){
    nowb = 'firefox';
  }else{
    nowb = 'other';
  }
  // console.log(nowb);
  // -------------------------------------------------------------

  // 브라우저 크기 변경시 새로고침
  $(window).on('resize', function(){
    let afterW = $(window).outerWidth(true);
    let afterDevice = DeviceSet(afterW);
    if(beforeDevice !== afterDevice){
      if(nowb == 'firefox'){
        window.location = window.location;
      }else{
        location.reload();
      }
    }
  }); 
  
  
  //$(window).on('resize') // $window의 사이즈가 변하면
  //$(window).on('resize', function(){
    //  location.reload(); // 새로고침해라
    // }); 


})(jQuery);