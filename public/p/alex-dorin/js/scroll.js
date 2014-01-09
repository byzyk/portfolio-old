 var UA=window.navigator.userAgent;
 var Firefox = UA.match(/Firefox\/\w+\.\w+/i);
function addHandler(object, event, handler, useCapture) {
     if (object.addEventListener) {
         object.addEventListener(event, handler, useCapture ? useCapture : false);
     } else if (object.attachEvent) {
         object.attachEvent('on' + event, handler);
     } else alert("Add handler is not supported");
}

// Обработчик события
function wheel(event) {
     var delta; // Направление скролла
     // -1 - скролл вниз
     // 1  - скролл вверх
     event = event || window.event;
     // Opera и IE работают со свойством wheelDelta
     if (event.wheelDelta) {
         delta = event.wheelDelta / 120;
         // В Опере значение wheelDelta такое же, но с противоположным знаком
         //if (window.opera) delta = -delta;
          delta = -delta;
     // В реализации Gecko получим свойство detail
     } else if (event.detail) {
         delta = -event.detail / 3;
     }
     // Запрещаем обработку события браузером по умолчанию
     if (event.preventDefault)  event.preventDefault();
     delta = delta*20;
     event.returnValue = false;
     var ScrllBlk=$(".about-wrap");
     var Height=ScrllBlk.height();
     var Top = ScrllBlk.scrollTop();
     if(Firefox) delta = -delta;
     ScrllBlk.scrollTop(Top+delta);return delta;

}

function wheel2(event) {
     var delta; // Направление скролла
     // -1 - скролл вниз
     // 1  - скролл вверх
     event = event || window.event;
     // Opera и IE работают со свойством wheelDelta
     if (event.wheelDelta) {
         delta = event.wheelDelta / 120;
         // В Опере значение wheelDelta такое же, но с противоположным знаком
         //if (window.opera) delta = -delta;
          delta = -delta;
     // В реализации Gecko получим свойство detail
     } else if (event.detail) {
         delta = -event.detail / 3;
     }
     // Запрещаем обработку события браузером по умолчанию
     if (event.preventDefault)  event.preventDefault();
     delta = delta*20;
     event.returnValue = false;
     var ScrllBlk=$(".works-wrap");
     var Height=ScrllBlk.height();
     var Top = ScrllBlk.scrollTop();
     if(Firefox) delta = -delta;
     ScrllBlk.scrollTop(Top+delta);return delta;

}