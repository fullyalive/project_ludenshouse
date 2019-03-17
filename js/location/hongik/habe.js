window.onload = function() {
              
            // 지도의 중심
            var position = new daum.maps.LatLng(37.554147, 126.927220);
            // 기본 지도 표시
            var map = new daum.maps.Map(document.getElementById('map'), {
                center: position,
                level: 4,
                mapTypeId: daum.maps.MapTypeId.ROADMAP });
          
            // 지도 콘트론 표시
            var zoomControl = new daum.maps.ZoomControl();
            map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
            var mapTypeControl = new daum.maps.MapTypeControl();
            map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
       
            // 다중 마커와 인포윈도우 표시

            //위치 정보와 인포윈도우에 표시할 정도
           var locations = [  //신촌 뷰티
                             [37.558180, 126.936736,'<a href="www.ludenshouse.com/ha_yohan.html">요한헤어(뷰티)</a>'],
                             [37.556165, 126.937055,'<a href="www.ludenshouse.com/ha_parkstudiosc.html">박승철헤어스투디오</br>신촌점(뷰티)</a>'],
                             [37.555715, 126.936280,'<a href="www.ludenshouse.com/ha_mins.html">민스헤어 신촌점(뷰티)</a>'],
                             //이대 뷰티
                             [37.558794, 126.943838,'<a href="www.ludenshouse.com/ha_junoewha2.html">준오헤어</br>이대2호점(뷰티)</a>'],
                             //서강대 뷰티
                             [37.553390, 126.937575,'<a href="www.ludenshouse.com/be_beautyfarm.html">뷰티팜(뷰티)</a>']];

            for(i = 0; i < locations.length; i++) {
                // 다중 마커
                var marker = new daum.maps.Marker({
                    position: new daum.maps.LatLng(locations[i][0], locations[i][1])
                });
                marker.setMap(map);
       
                //인포 윈도우
                daum.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        var infowindow = new daum.maps.InfoWindow({
                            content: '<p style="text-align:center; margin:15px 22px 15px 12px; font:12px/1.5 sans-serif">' + locations[i][2] + '</p>',
                            removable : true
                        });
                      infowindow.open(map, marker);
                    }
                })(marker, i));
            }
   
        };
  