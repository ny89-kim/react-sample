### next 장점
    1. 기존 웹팩에서 사용햇던 hot-loader같은것들도 한번에 적용가능
    2. react-router를 사용하지 않아도 기본적인 router 시스템이 적용됨
    3. 주체계를 만들어 주어서 파일 구조안 "page"란 폴더를 만들고 그 안에 파일을 만들어 주면 자동적으로 
       주소체계가 잡힘
        ex)
            pages/about.js or pages/user/create.js를 각각 만들어 주면 실제 주소에서도
                - /about -> page/about.js가 실행되고 
                - user/create -> pages/user/create.js가 실행
    
    4. react code 상단에 import React from 'react'를 하지 않아도 알아서  처리해줌
    5. 그외에도 SSR뿐만 아니라 code spolt까지 도와줘서 SSR을 적용하기 아주 좋은 모듈
    