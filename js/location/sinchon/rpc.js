window.onload = function() {
              
            // 지도의 중심
            var position = new daum.maps.LatLng(37.555699, 126.936993);
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
             var locations = [ //신촌 밥집
                             [37.557733, 126.937073,'<a href="http://www.ludenshouse.com/r_parmi.html">파르미 이탈리아노</br>(밥집)</a>'],
                             [37.556538, 126.935434,'<a href="http://www.ludenshouse.com/r_darkrestaurant.html">눈탱이 감탱이(밥집)</a>'],
                             [37.557235, 126.936357,'<a href="http://www.ludenshouse.com/r_choonchundak.html">춘천집 닭갈비(밥집)</a>'],
                             [37.557999, 126.937725,'<a href="http://www.ludenshouse.com/r_kyochonsc.html">교촌치킨 신촌점(밥집)</a>'],
                             [37.556286, 126.936434,'<a href="http://www.ludenshouse.com/r_donghae.html">동해해물탕(밥집)</a>'],
                             [37.556457, 126.936333,'<a href="http://www.ludenshouse.com/r_goowolsan.html">구월산(밥집)</a>'],
                             [37.557532, 126.937760,'<a href="http://www.ludenshouse.com/r_kitchenstar.html">키친스별(밥집)</a>'],
                             [37.559037, 126.938327,'<a href="http://www.ludenshouse.com/r_nanntandor.html">난탄두르(밥집)</a>'],
                             [37.557506, 126.937154,'<a href="http://www.ludenshouse.com/r_thedaksc.html">더닭(밥집)</a>'],
                             [37.558117, 126.934672,'<a href="http://www.ludenshouse.com/r_yabai.html">야바이(밥집)</a>'],
                             //신촌 술집
                             [37.557733, 126.935157,'<a href="http://www.ludenshouse.com/p_petalpocha.html">꽃잎포차(술집)</a>'],
                             [37.555993, 126.937147,'<a href="http://www.ludenshouse.com/p_scgogijip.html">신촌 고깃집(술집)'],
                             [37.557826, 126.934849,'<a href="http://www.ludenshouse.com/p_somunnanjip.html">소문난집(술집)'],
                             [37.558408, 126.936223,'<a href="http://www.ludenshouse.com/p_barpro.html">바프로(술집)</a>'],
                             [37.557433, 126.935324,'<a href="http://www.ludenshouse.com/p_900pub.html">900펍(술집)</a>'],
                             [37.558842, 126.935316,'<a href="http://www.ludenshouse.com/p_ggongsul.html">꽁술(술집)</a>'],
                             //신촌 카페
                             [37.556053, 126.939047,'<a href="http://www.ludenshouse.com/c_mrhealingsc.html">미스터힐링</br>신촌점(카페)</a>'],
                             
                             //이대 밥집
                             [37.559051, 126.946250,'<a href="http://www.ludenshouse.com/r_giros.html">기로스(밥집)</a>'],
                             [37.559038, 126.944942,'<a href="http://www.ludenshouse.com/r_ssambab.html">볶음쌈밥(밥집)</a>'],
                             [37.558420, 126.945625,'<a href="http://www.ludenshouse.com/r_arirang.html">아리랑노점(밥집)</a>'],
                             //이대 카페
                             [37.555825, 126.946106,'<a href="http://www.ludenshouse.com/c_thepuzzle.html">카페더퍼즐(카페)</a>'],
                             [37.559000, 126.944342,'<a href="http://www.ludenshouse.com/c_healingatewha.html">힐링앳티파니스</br>이대점(카페)'],
                            
                             //서강대 밥집
                             [37.554055, 126.937825,'<a href="http://www.ludenshouse.com/r_ggobugi.html">거북이의주방(밥집)</a>'],
                             [37.552993, 126.936452,'<a href="http://www.ludenshouse.com/r_saembat.html">샘밭골(밥집)</a>'],
                             [37.553644, 126.937893,'<a href="http://www.ludenshouse.com/r_balibistro.html">발리비스트로(밥집)</a>'],
                             [37.548907, 126.939132,'<a href="http://www.ludenshouse.com/r_gogimani1.html">고기마니밥마니 </br>1호점(밥집)</a>'],
                             [37.551355, 126.937184,'<a href="http://www.ludenshouse.com/r_gogimani2.html">고기마니밥마니 </br>2호점(밥집)</a>'],
                             [37.549088, 126.938203,'<a href="http://www.ludenshouse.com/r_manimani.html">마니마니톡톡(밥집)</a>'],
                            
                             //서강대 술집
                             [37.553499, 126.937835,'<a href="http://www.ludenshouse.com/p_kura.html">쿠라(술집)</a>'],
                             [37.547324, 126.943441,'<a href="http://www.ludenshouse.com/p_palgongsan.html">팔공산막걸리(술집)</a>'],
                             [37.548453, 126.940980,'<a href="http://www.ludenshouse.com/p_ggamaeng.html">까맹이네(술집)</a>'],
                             [37.548581, 126.938733,'<a href="http://www.ludenshouse.com/p_gojupa.html">고주파(술집)</a>'],
                             [37.549291, 126.938173,'<a href="http://www.ludenshouse.com/p_jjaktae.html">짝태와문어(술집)</a>'], 
                             [37.548736, 126.938668,'<a href="http://www.ludenshouse.com/p_jinsung.html">진성(밥집)</a>'],
                             //서강대 카페                            
                             [37.549682, 126.936952,'<a href="http://www.ludenshouse.com/c_bstcoffee.html">보스턴커피(카페)</a>'],
                             [37.549385, 126.937994,'<a href="http://www.ludenshouse.com/c_atkoom.html">인문카페 엣꿈(카페)</a>'],
                             [37.552609, 126.937065,'<a href="http://www.ludenshouse.com/c_triptea.html">트립티(카페)</a>'],
                             [37.552832, 126.937442,'<a href="http://www.ludenshouse.com/c_studycafes.html">스터디카페S(카페)</a>'],
                             [37.553870, 126.937608,'<a href="http://www.ludenshouse.com/c_athen.html">아테네(카페)</a>'],
                             [37.554528, 126.937879,'<a href="http://www.ludenshouse.com/c_alles.html">알레스(카페)</a>'],
                             [37.554636, 126.938318,'<a href="http://www.ludenshouse.com/c_gowoon.html">고운 라오상하이(카페)</a>'],
                             [37.549401, 126.945539,'<a href="http://www.ludenshouse.com/c_treeshadow.html">카페나무그늘(카페)</a>'],
                             [37.548373, 126.941199,'<a href="http://www.ludenshouse.com/c_take5.html">Take5&edin(카페)</a>'],
                            
                             //홍대 밥집
                             [37.559342, 126.921200,'<a href="http://www.ludenshouse.com/r_donko.html">돈코보쌈(밥집)</a>'],
                             [37.552142, 126.920961,'<a href="http://www.ludenshouse.com/r_nangpoong1.html">낭풍 김치찌개</br>홍대 1호점(밥집)'],
                             [37.549332, 126.921741,'<a href="http://www.ludenshouse.com/r_nangpoong2.html">낭풍 김치찌개</br>홍대 2호점(밥집)'],
                             [37.553010, 126.921563,'<a href="http://www.ludenshouse.com/r_yooganehd2.html">유가네 닭갈비</br>홍대 2호점(밥집)'],
                             [37.552059, 126.921150,'<a href="http://www.ludenshouse.com/r_minarihd.html">미나리식당</br>홍대점(밥집)</a>'],
                             [37.561429, 126.926447,'<a href="http://www.ludenshouse.com/r_minariyn.html">미나리식당</br>연남점(밥집)</a>'],
                             //홍대 술집
                             [37.552012, 126.922660,'<a href="http://www.ludenshouse.com/p_chija.html">치화자(술집)</a>'],
                             [37.554272, 126.927195,'<a href="http://www.ludenshouse.com/p_modak1.html">모닭모닭</br>홍대 1호점(술집)'],
                             [37.555514, 126.924459,'<a href="http://www.ludenshouse.com/p_modak2.html">모닭모닭</br>홍대 2호점(술집)'],
                             //홍대 카페
                             [37.551336, 126.923119,'<a href="http://www.ludenshouse.com/c_mrhealinghd.html">미스터힐링</br>홍대점(카페)</a>'],
                             [37.555314, 126.922707,'<a href="http://www.ludenshouse.com/c_mrhealinghds.html">미스터힐링</br>홍대역점(카페)'],
                             [37.553259, 126.923979,'<a href="http://www.ludenshouse.com/c_healingathd.html">힐링앳티파니스</br>홍대점(카페)'],
                             [37.553711, 126.923636,'<a href="http://www.ludenshouse.com/c_supercoffeehd.html">슈퍼커피</br>홍대점(카페)'],
                             [37.559834, 126.921075,'<a href="http://www.ludenshouse.com/c_lennanon.html">르낫농(카페)']];
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
  