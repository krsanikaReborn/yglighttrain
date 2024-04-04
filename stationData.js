let stationData = [
    {
        id : 1,
        nameKo : "기흥",
        descriptionKo : "백남준아트센터",
        nameEn : "GIHEUNG-NJP ART CENTER",
        address : "기흥구 중부대로 468",
        trait : "용인에버라인 시점역(랜드마크 역사)\n분당선연장선과의 환승으로 용인~ 서울•수도권 연계가능\n각종 이용객 편의시설 배치(Bus Bay, Kiss&Ride, 자전거보관소 등)",
        trans : "분당선 기흥역 환승",
        exits : [
            {id : 8, spots : ["백남준아트센터","기흥구청","강남병원","경기도박물관","신갈우체국","신갈고등학교"]}
        ],
        times : {
            first : [
                {hour : "-", min : "-", minHoliday : "-"},
                {hour : "05", min : "30", minHoliday : "30"}
            ],
            last : [
                {hour : "23", min : "30", minHoliday : "30"},
                {hour : "23", min : "30", minHoliday : "30"}
            ]
        }
    },
    {
        id : 2,
        nameKo : "강남대",
        descriptionKo : "",
        nameEn : "KANGNAM UNIV.",
        address : "기흥구 중부대로 578",
        trait : "1인 역사운영을 고려한 역무기능 집중 및 시설물자동화\n장애인 이동편의를 고려한 편의시설(엘리베이터) 설치\n구갈레스피아 공원 진출입 연결",
        trans : "",
        exits : [
            {id : 1, spots : ["강남대학교","구갈동주민센터","성지중학교","성지초등학교"]},
            {id : 2, spots : ["구갈3지구/강남마을","구갈희망누리도서관", "성지고등학교", "갈곡초등학교"]},
            {id : 3, spots : ["구갈자연생태공원", "구갈레스피아"]},
        ],
        times : {
            first : [
                {hour : "05", min : "37", minHoliday : "37"},
                {hour : "05", min : "31", minHoliday : "31"}
            ],
            last : [
                {hour : "23", min : "57", minHoliday : "57"},
                {hour : "23", min : "31", minHoliday : "31"}
            ]
        }   
    },
    {
        id : 3,
        nameKo: "지석",
        descriptionKo : "",
        nameEn : "JISEOK",
        address : "기흥구 어정로 28 지석초교 부근",
        trait : "승객편의를 고려한 엘리베이터, 에스컬레이터 설치\n보행자의 안전한 이동을 고려한 시도5호선 횡단 보행육교 설치",
        trans : "",
        exits : [
            {id : 1, spots : ["구갈3지구, 갈곡초등학교, 성지고등학교, 구갈자연생태공원"]},
            {id : 2, spots : ["구갈3지구/강남마을"]},
            {id : 3, spots : ["상하동주민센터", "갈천마을" ]},
            {id : 4, spots : ["상하동", "오산천산책로", "임광APT."]},            
        ],
        times : {
            first : [
                {hour : "05", min : "35", minHoliday : "35"},
                {hour : "05", min : "33", minHoliday : "33"}
            ],
            last : [
                // {hour : "23", min : "55", minHoliday : "55"},
                {hour : "23", min : "55", minHoliday : "55"},
                {hour : "23", min : "33", minHoliday : "33"}
            ]
        }        
    },
    {
        id : 4,
        nameKo : "어정",
        descriptionKo : "",
        nameEn : "EOJEONG",
        address : "기흥구 어정로 128 어정교 옆",
        trait : "관련분야 시스템 인터페이스 반영\n장스팬 무기둥 공간화로 원활한 승객동선 유도\nTop Light 설치로 밝고 쾌적한 승강장",
        trans : "",
        exits : [
            {id : 1, spots : ["상하동 주민센터", "어정초등학교","어정가구단지"]},
            {id : 2, spots : ["동백호수공원", "동백동 주민센터","국민연금공단 (용인지사)"]},
            {id : 3, spots : ["초록마을 풍림 APT.", "산책로",]},
        ],
        times : {
            first : [
                {hour : "05", min : "34", minHoliday : "34"},
                {hour : "05", min : "35", minHoliday : "35"}
            ],
            last : [
                {hour : "23", min : "53", minHoliday : "53"},
                {hour : "23", min : "35", minHoliday : "35"}
            ]
        }           
    },
    {
        id : 5,
        nameKo : "동백",
        descriptionKo : "", 
        nameEn : "DONGBAEK",
        address : "기흥구 동백죽전대로 314 동백지구 내",
        trait : "승객편의를 고려한 엘리베이터, 에스컬레이터 설치\n역사 주변의 공원, 분수대 등 녹지조성하여 쾌락한 환경조성",
        trans : "",
        exits : [
            {id : 1, spots : ["동백동 주민센터", "국민연금공단(용인지사)", "동백호수공원", "성산마을"]},
            {id : 2, spots : ["어은목마을", "석성초등학교", "초당중학교"]},
            {id : 3, spots : ["참솔마을", "용인세브란스병원"]},
        ],
        times : {
            first : [
                {hour : "05", min : "32", minHoliday : "32"},
                {hour : "05", min : "37", minHoliday : "37"}
            ],
            last : [
                {hour : "23", min : "51", minHoliday : "51"},
                {hour : "23", min : "37", minHoliday : "37"}
            ]
        }   
    },
    {
        id : 6,
        nameKo : "초당",
        descriptionKo : "", 
        nameEn : "CHODANG",
        address : "기흥구 동백죽전대로 204 동백지구 내",
        trait : "발전하는 용인시의 역동성을 상징하는 외관 디자인\n역사주변의 공원, 산책로 등 녹지조성하여 쾌락한 환경조성",
        trans : "",
        exits : [
            {id : 1, spots : ["초당마을", "초당고등학교", "초당초등학교", "초당중학교", "한국지역난방공사"]},
            {id : 2, spots : ["웨스트민스터신학대학원대학교", "화운사", "한국수출입은행인재개발원", "멱조현고개"]},
        ],
        times : {
            first : [
                {hour : "05", min : "30", minHoliday : "30"},
                {hour : "05", min : "30", minHoliday : "30"}
            ],
            last : [
                {hour : "23", min : "49", minHoliday : "49"},
                {hour : "23", min : "39", minHoliday : "39"}
            ]
        }           
    },
    {
        id : 7,
        nameKo : "삼가",
        descriptionKo : "",
        nameEn : "SAMGA",
        address : "처인구 중부대로 1098",
        trait : "신시가지 및 구도심을 고려한 역사설계\n각종 이용객 편의시설 설치(Bus Bay, Kiss&Ride, 자전거보관소 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["용인에버라인차량기지", "삼가삼거리"]},
            {id : 2, spots : ["역삼동", "로데오거리", "우남 APT."]},
            {id : 3, spots : ["삼가초등학교", "진우 APT.", "늘푸른 APT."]},
        ],
        times : {
            first : [
                {hour : "05", min : "36", minHoliday : "36"},
                {hour : "05", min : "33", minHoliday : "33"}
            ],
            last : [
                {hour : "23", min : "45", minHoliday : "45"},
                {hour : "23", min : "42", minHoliday : "42"}
            ]
        }           
    },
    {
        id : 8,
        nameKo : "시청·용인대",
        descriptionKo : "",
        nameEn : "CITYHALL, YONGIN UNIV.",
        address : "처인구 중부대로 1199-1 시청앞",
        trait : "각종 이용객 편의시설 설치(E/V,E/S,자전거보관소 등)\n주변경관을 고려한 조형물 설치(용연문)",
        trans : "",
        exits : [
            {id : 1, spots : ["용인시청", "용인시의회", "용인동부경찰서", "용인우체국", "용인시보건소", "용인시문화예술원", "용인시청소년수련관", "노인복지회관", "경기도 용인교육지원청", "용인세무서", "용인대학교"]},
        ],
        times : {
            first : [
                {hour : "05", min : "35", minHoliday : "35"},
                {hour : "05", min : "35", minHoliday : "35"}
            ],
            last : [
                {hour : "23", min : "44", minHoliday : "44"},
                {hour : "23", min : "44", minHoliday : "44"}
            ]
        }           
    },
    {
        id : 9,
        nameKo : "명지대",
        descriptionKo : "",
        nameEn : "MYONGJI UNIV.",
        address : "처인구 금학로 241",
        trait : "구도심을 고려한 역사위치선정\n각종 이용객 편의시설 배치(Bus Bay, 자전거보관소 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["용인시법원", "용인등기소", "서룡초등학교", "명지대학교"]},
            {id : 2, spots : ["용인고등학교", "역북소공원", "신성교"]},
        ],
        times : {
            first : [
                {hour : "05", min : "33", minHoliday : "33"},
                {hour : "05", min : "36", minHoliday : "36"}
            ],
            last : [
                {hour : "23", min : "42", minHoliday : "42"},
                {hour : "23", min : "46", minHoliday : "46"}
            ]
        }         
    },
    {
        id : 10,
        nameKo : "김량장",
        descriptionKo : "",
        nameEn : "GIMNYANG JANG",
        address : "처인구 금학로 315",
        trait : "구도심을 고려한 역사위치 선정\nTop Light 설치로 밝고 쾌적한 승강장\n각종 이용객 편의시설 배치(Bus Bay, 자전거보관소 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["한국전기안전공사", "용인문예회관", "통일공원", "용인시립도서관", "용인고등학교"]},
            {id : 2, spots : ["처인구청", "용인중학교", "용인초등학교"]},
        ],
        times : {
            first : [
                {hour : "05", min : "31", minHoliday : "31"},
                {hour : "05", min : "38", minHoliday : "38"}
            ],
            last : [
                {hour : "23", min : "40", minHoliday : "40"},
                {hour : "23", min : "47", minHoliday : "47"}
            ]
        }           
    },
    {
        id : 11,
        nameKo : "운동장·송담대",
        descriptionKo : "",
        nameEn : "STADIUM, SONGDAM UNIV.",
        address : "처인구 금학로 409",
        trait : "도심을 고려한 역사위치선정\n대규모 체육시설 이용객을 고려한 동선배치 및 교통환승시설을 위한 시설배치(Bus Bay등)",
        trans : "",
        exits : [
            {id : 1, spots : ["용인공용버스터미널", "용인송담대학교", "중앙시장(전통시장)", "중앙동주민센터", "용인초등학교"]},
            {id : 2, spots : ["용인시종합운동장", "용인시실내체육관", "용마초등학교", "용인서울병원"]},
        ],
        times : {
            first : [
                {hour : "05", min : "30", minHoliday : "30"},
                {hour : "05", min : "30", minHoliday : "30"}
            ],
            last : [
                {hour : "23", min : "39", minHoliday : "39"},
                {hour : "23", min : "49", minHoliday : "49"}
            ]
        }           
    },
    {
        id : 12,
        nameKo : "고진",
        descriptionKo :  "",
        nameEn : "GOJIN",
        address : "처인구 경안천로 141",
        trait : "주변경관 특성 및 발전하는 용인시의 역동성을 상징하는 역사외관설계\n각종 이용객 편의시설 배치(Bus Bay, Kiss&Ride, 자전거보관소 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["용인정보산업고등학교", "고림중학교", "용인서울병원"]},
        ],
        times : {
            first : [
                {hour : "05", min : "37", minHoliday : "37"},
                {hour : "05", min : "31", minHoliday : "31"}
            ],
            last : [
                {hour : "23", min : "37", minHoliday : "37"},
                {hour : "23", min : "51", minHoliday : "51"}
            ]
        }
    },
    {
        id : 13,
        nameKo : "보평",
        descriptionKo : "",
        nameEn : "BOPYEONG",
        address : "처인구 경안천로 313",
        trait : "신시가지, 구도심, 교외전원형 지역 등 역세권 특성 고려한 역사설계\n각종 이용객 편의시설 배치(Bus Bay, Kiss&Ride, 자전거보관소 등)\n경안천 횡단이용객을 고려한 접근로(교량)설치\n장애인종합복지관 안내등 장애인을 위한 편의시설 설치 (E/V, 유도블럭 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["용인성산초등학교", "유림어린이집", "강촌빌라"]},
            {id : 2, spots : ["위생처리장", "용인시장애인종합복지관"]},
        ],
        times : {
            first : [
                {hour : "05", min : "35", minHoliday : "35"},
                {hour : "05", min : "34", minHoliday : "34"}
            ],
            last : [
                {hour : "23", min : "35", minHoliday : "35"},
                {hour : "23", min : "53", minHoliday : "53"}
            ]
        }           
    },
    {
        id : 14,
        nameKo : "둔전",
        descriptionKo : "",
        nameEn : "DUNJEON",
        address : "포곡읍 포곡로 70",
        trait : "신시가지, 구도심, 교외전원형 지역 등 역세권 특성 고려한 역사설계\n각종 이용객 편의시설 배치(Bus Bay, Kiss&Ride, 자전거보관소 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["국풍빌라"]},
            {id : 2, spots : ["인정프린스 APT.", "둔전 12리 마을회관", "선경타운"]},
        ],
        times : {
            first : [
                {hour : "05", min : "33", minHoliday : "33"},
                {hour : "05", min : "35", minHoliday : "35"}
            ],
            last : [
                {hour : "23", min : "33", minHoliday : "33"},
                {hour : "23", min : "55", minHoliday : "55"}
            ]
        }           
    },
    {
        id : 15,
        nameKo : "전대·에버랜드",
        descriptionKo : "",
        nameEn : "JEONDAE, EVERLAND",
        address : "포곡읍 에버랜드로 143",
        trait : "용인에버라인 종점역\n대규모 위락시설을 고려한 역사위치선정\n주변경관 및 용인시의 역동성을 상징하는 역사외관설계\n각종 이용객 편의시설 설치 (Bus Bay, T&R, 자전거 보관소, 보행육교 등)",
        trans : "",
        exits : [
            {id : 1, spots : ["포곡초등학교"]},
            {id : 2, spots : ["장미 APT.", "포곡어린이집", "전대리새마을회관"]},
            {id : 3, spots : ["에버랜드/캐리비안베이", "에버랜드 주차장", "에버랜드 순환버스 승차장"]},
            {id : 4, spots : ["항공 APT."]},
        ],
        times : {
            first : [
                {hour : "05", min : "30", minHoliday : "30"},
                {hour : "-", min : "-", minHoliday : "-"}
            ],
            last : [
                {hour : "23", min : "30", minHoliday : "30"},
                {hour : "-", min : "-", minHoliday : "-"}
            ]
        }
    },

]


