var mySwiper = new Swiper('.swiper-container', {
  prevButton: '.swiper-button-prev',
  nextButton: '.swiper-button-next',
});

/*
// banner 左侧导航
var navItems = document.querySelectorAll('.nav-item');
// 直播
var liveHeadItems = document.querySelectorAll('.live .head-item');
var liveContentItems = document.querySelectorAll('.live-content .content-item');
// 热门推荐
var hotHeadItems = document.querySelectorAll('.hot .head-item');
var hotContentDetails = document.querySelectorAll('.hot-content .content-detail');
/!*
headBox: 切换按钮盒子
isRemoveClass: 是否要移除active这个类
bodyBox: 需要切换的内容盒子
*!/
function tab(headBox, isRemoveClass, bodyBox) {
  headBox.forEach(function (ele, index) {
    ele.onmouseenter = function () {
      headBox.forEach(function (ele2) {
        ele2.classList.remove('active');
      })
      if(bodyBox){
        bodyBox.forEach(function (ele3) {
          ele3.classList.remove('active');
        });
        bodyBox[index].classList.add('active');
      }
      headBox[index].classList.add('active');
    }
    if(isRemoveClass){
      ele.onmouseleave = function () {
        headBox.forEach(function (ele4) {
          ele4.classList.remove('active')
        })
      }
    }
  })
}

tab(navItems, true, null); // banner 左侧导航
tab(liveHeadItems, false, liveContentItems); // 直播
tab(hotHeadItems, false, hotContentDetails); // 热门推荐
*/

$(function () {
  // banner 左侧导航
  $('.nav-item').each(function () {
    $(this).hover(function () {
      $(this).addClass('active');
    },function () {
      $(this).removeClass('active');
    });
  });

  /*
  headEle: 切换按钮元素
  contEle: 需要切换的内容元素
  className: 切换的类
  */
  function tabHandle(headEle, contEle, className) {
    $(headEle).each(function (index) {
      $(this).mouseenter(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(contEle)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }

  // 直播
  tabHandle('.live .head-item', '.live .content-item', 'active');
  // 热门推荐
  tabHandle('.hot .head-item', '.hot .content-detail', 'active');
});
