window.onload = function() {
              
            // 지도의 중심
            var position = new daum.maps.LatLng(37.555825, 126.946106);
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
            var locations = [ 
                             [37.555825, 126.946106,'<a href="http://www.ludenshouse.com/c_thepuzzle.html">카페더퍼즐(카페)</a>']];


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
  