function init(){bigMap=new ymaps.Map("map_canvas",{center:[59.875813,30.365302],zoom:15,controls:[]},{minZoom:5}),bigMap.behaviors.disable("scrollZoom"),myPoints=[{coords:[59.874598,30.344309],name:"Санкт-Петербург",text:'<b>Головной офис в Санкт-Петербурге</b><br><br>195279, Санкт-Петербург, Благодатная улица, д.69<br>Тел.: +7 (812) 386-33-22<br><a href="mailto:zakaz@roste.ru">Email: zakaz@roste.ru</a><br><br>',type:"extra"},{coords:[59.937076,30.38158],type:"extra"}];for(var e=0,a=myPoints.length;a>e;e++){var o=myPoints[e];"extra"==o.type?(img_src="../images/map-marker-big.png",image_size=[46,68],image_offset=[-15,-50]):(img_src="../images/map-marker-big.png",image_size=[27,32],image_offset=[-13,-28]),bigMap.geoObjects.add(new ymaps.Placemark(o.coords,{balloonContentHeader:o.name,balloonContentBody:o.text},{iconLayout:"default#image",iconImageHref:img_src,iconImageSize:image_size,iconImageOffset:image_offset,iconShape:{type:"Circle",coordinates:[0,-15],radius:20}}))}$("#map-search-form").submit(function(e){e.preventDefault();var a=$("#map-search-query").val().toLowerCase(),o=0;bigMap.geoObjects.each(function(e){return e.properties.get("balloonContentHeader").toLowerCase()==a?(e.balloon.open(),bigMap.setCenter([57,50.5]),o=1,!1):void 0}),$("html, body").animate({scrollTop:$("#map-wrapper").offset().top-85},1e3),0==o&&alert("На данной территории заводов нет...")})}var bigMap,smallMap;ymaps.ready(init);