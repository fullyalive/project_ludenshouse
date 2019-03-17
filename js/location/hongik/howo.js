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
           var locations = [ //신촌 운동
                             [37.558878, 126.942135,'<a href="www.ludenshouse.com/wo_teamyoonsc.html">팀윤GYM</br>신촌점(운동)</a>'],
                             [37.555865, 126.940392,'<a href="www.ludenshouse.com/wo_hongsc.html">아놀드홍GYM(운동)</a>'],
                             [37.556720, 126.934260,'<a href="www.ludenshouse.com/wo_steampunksc.html">크로스핏 스팀펑크</br>신촌점(운동)</a>'],
                             [37.556610, 126.933473,'<a href="www.ludenshouse.com/wo_gaon.html">가온 태권도(운동)</a>'],
                             [37.553817, 126.935487,'<a href="www.ludenshouse.com/wo_inghotyoga.html">ING 핫요가(운동)</a>'],
                             [37.555313, 126.933023,'<a href="www.ludenshouse.com/wo_floorx.html">플로어엑스</br>아크로바틱(운동)'],
                             [37.555365, 126.934236,'<a href="www.ludenshouse.com/wo_kudo.html">쿠도(운동)</a>'],
                             //신촌 취미
                             [37.558848, 126.939624,'<a href="www.ludenshouse.com/ho_gnijazz.html">지니재즈댄스스투디오(취미)'],
                             [37.556352, 126.935212,'<a href="www.ludenshouse.com/ho_drummers.html">북치는 사람들(취미)'],
                             [37.554563, 126.937284,'<a href="www.ludenshouse.com/ho_newmusic.html">뉴실용음악학원(취미)'],
                             [37.557885, 126.936743,'<a href="www.ludenshouse.com/ho_ringclub.html">반지만들기 클럽(취미)'],
                             //서강대 운동
                             [37.552832, 126.937442,'<a href="www.ludenshouse.com/wo_spinning.html">S 스피닝(운동)</a>'],
                             [37.554796, 126.937833,'<a href="www.ludenshouse.com/wo_hapkido.html">오승 합기도(운동)</a>'],
                             
                              //이대 운동
                             [37.559231, 126.944173,'<a href="www.ludenshouse.com/wo_teamyoonewha.html">팀윤GYM 이대점(운동)</a>'],
                             [37.556601, 126.947452,'<a href="www.ludenshouse.com/wo_soonyun.html">수년복싱(운동)</a>'],
                             [37.559027, 126.944301,'<a href="www.ludenshouse.com/wo_yogalooksewha.html">요가룩스 이대점(운동)</a>'],
                             [37.557971, 126.945961,'<a herf="www.ludenshouse.com/wo_jeyadeepewha.html">제야딥요가스쿨</br>이대점(운동)'],
                             
                             //홍대 운동
                             [37.557012, 126.917473,'<a href="www.ludenshouse.com/wo_muzenza.html">무젠자</br>까뽀에이라(운동)'],
                             [37.545270, 126.932170,'<a href="www.ludenshouse.com/wo_yogalookskh.html">요가룩스</br>광흥창점(운동)</a>'],
                             //홍대 취미
                             [37.560054, 126.924692,'<a href="www.ludenshouse.com/ho_healingfeeling.html">힐링필링</br>금속공예(취미)</a>'],
                             [37.548539, 126.925401,'<a href="www.ludenshouse.com/ho_mrj.html">MRJ</br>가죽공예(취미)<a>'],
                             [37.553434, 126.932233,'<a href="www.ludenshouse.com/ho_akkisa.html">어쩌다 마주친 악기사(취미)</a>']];
                             

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
  