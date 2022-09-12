import React from 'react';
import { useState } from "react";

const createArr=(n)=>{
    const iArr= new Array(n);
    for(var i=0; i<n; i++) iArr[i]=i+1;
    return iArr;
}

const App2 = ({maxPage=6, pageLimit=3}) => {
    const data =[
        {
          "id": 1,
          "imgUrl": "https://images.chosun.com/resizer/5p6S_R2L18eruTUybX5Z8ykFOo8=/700x685/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/KVN4EOBHHWBWBTM54TGN64NR7Y.jpg",
          "title": "쌀밥",
          "content": "1공기(210g)",
          "rating":3,
          "createdAt": 1625340973562,
          "updatedAt": 1625340973562,
          "calorie": 300
        },
        {
          "id": 2,
          "imgUrl": "https://hobbyen.co.kr/news/data/20191127/p179555408699785_667.png",
          "title": "삶은 달걀",
          "content": "1개(50g)",
          "rating":3,
          "createdAt": 1625184428289,
          "updatedAt": 1625184428289,
          "calorie": 68
        },
        {
          "id": 3,
          "imgUrl": "http://www.newsa.co.kr/news/photo/201812/199710_153425_2825.jpg",
          "title": "방울토마토",
          "content": "1개(13g)",
          "rating": 1,
          "createdAt": 1625330203116,
          "updatedAt": 1625330203116,
          "calorie": 2
        },
        {
          "id": 4,
          "imgUrl": "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201510/29/htm_20151029192940894855.jpg",
          "title": "계란프라이",
          "content": "1개(46g)",
          "rating":2,
          "createdAt": 1625028045602,
          "updatedAt": 1625028045602,
          "calorie": 89
        },
        {
          "id": 5,
          "imgUrl": "https://cdn.mindgil.com/news/photo/202006/69432_3588_1441.jpg",
          "title": "수박",
          "content": "1회(100g)",
          "rating":3,
          "createdAt": 1625308116667,
          "updatedAt": 1625308116667,
          "calorie": 36
        },
        {
          "id": 6,
          "imgUrl": "https://imgnn.seoul.co.kr/img//upload/2019/05/07/SSI_20190507131858_V.jpg",
          "title": "바나나",
          "content": "1개(100g)",
          "rating":5,
          "createdAt": 1624613250969,
          "updatedAt": 1624613250969,
          "calorie": 93
        },
        {
          "id": 7,
          "imgUrl": "https://www.fsnews.co.kr/news/photo/202010/40047_33380_628.jpg",
          "title": "배추김치",
          "content": "1소접시(100g)",
          "rating":2,
          "createdAt": 1624889538305,
          "updatedAt": 1624889538305,
          "calorie": 25
        },
        {
          "id": 8,
          "imgUrl": "https://health.chosun.com/site/data/img_dir/2022/02/15/2022021501429_0.jpg",
          "title": "잡곡밥",
          "content": "1공기(200g)",
          "rating":5,
          "createdAt": 1625233200164,
          "updatedAt": 1625233200164,
          "calorie": 292.6
        },
        {
          "id": 9,
          "imgUrl": "https://hobbyen.co.kr/news/data/20190914/p179510934748353_891.jpg",
          "title": "현미밥",
          "content": "1공기(210g)",
          "rating":4,
          "createdAt": 1624998701293,
          "updatedAt": 1624998701293,
          "calorie": 321
        },
        {
          "id": 10,
          "imgUrl": "https://cdn.kormedi.com/wp-content/uploads/2020/09/gettyimages-1251667609-580x418.jpg",
          "title": "사과",
          "content": "1회(100g)",
          "rating":3,
          "createdAt": 1624685150667,
          "updatedAt": 1624685150667,
          "calorie": 57
        },
        {
          "id": 11,
          "imgUrl": "https://pds.joins.com/news/component/htmlphoto_mmdata/201410/29/htm_2014102918812c010c011.jpg",
          "title": "아몬드",
          "content": "1개(1g)",
          "rating":3,
          "createdAt": 1625334567466,
          "updatedAt": 1625334567466,
          "calorie": 7
        },
        {
          "id": 12,
          "imgUrl": "http://www.dongohseed.co.kr/wp/wp-content/uploads/2019/11/main_seed_2.jpg",
          "title": "토마토 (중간크기)",
          "content": "1개(100g)",
          "rating":4,
          "createdAt": 1624725579386,
          "updatedAt": 1624725579386,
          "calorie": 14
        },
        {
          "id": 13,
          "imgUrl": "https://img.danawa.com/prod_img/500000/976/566/img/7566976_1.jpg?shrink=330:330&_v=20210610163129",
          "title": "아메리카노",
          "content": "1잔(240ml)",
          "rating":5,
          "createdAt": 1625138235656,
          "updatedAt": 1625138235656,
          "calorie": 4
        },
        {
          "id": 14,
          "imgUrl": "data:image/jpeg;base64,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",
          "title": "오이",
          "content": "1개(210g)",
          "rating":3,
          "createdAt": 1624881277160,
          "updatedAt": 1624881277160,
          "calorie": 19
        },
        {
          "id": 15,
          "imgUrl": "http://www.newsgs.co.kr/news/photo/201609/2689_2294_1731.jpg",
          "title": "자두",
          "content": "1회(100g)",
          "rating":3,
          "createdAt": 1625433571061,
          "updatedAt": 1625433571061,
          "calorie": 25
        },
        {
          "id": 16,
          "imgUrl": "https://cdn.kormedi.com/wp-content/uploads/2021/03/20160804000623_01-580x389.jpg",
          "title": "참외",
          "content": "1개(200g)",
          "rating":4,
          "createdAt": 1624602034639,
          "updatedAt": 1624602034639,
          "calorie": 62
        },
        {
          "id": 17,
          "imgUrl": "https://health.chosun.com/site/data/img_dir/2016/09/20/2016092000948_0.jpg",
          "title": "상추",
          "content": "1회분(100g)",
          "rating":3,
          "createdAt": 1625171694068,
          "updatedAt": 1625171694068,
          "calorie": 18
        },
        {
          "id": 18,
          "imgUrl": "http://ojsfile.ohmynews.com/down/images/1/kgh17_93326_342[330324].jpg",
          "title": "찐감자",
          "content": "1개(130g)",
          "rating":2,
          "createdAt": 1625254300792,
          "updatedAt": 1625254300792,
          "calorie": 110
        },
        {
          "id": 19,
          "imgUrl": "https://marketgg-eco.co.kr/data/goods/1/2022/04/_temp_16510477696211view.png",
          "title": "대추방울토마토",
          "content": "1개(15g)",
          "rating":5,
          "createdAt": 1625353806439,
          "updatedAt": 1625353806439,
          "calorie": 2
        },
        {
          "id": 20,
          "imgUrl": "https://img.hankyung.com/photo/202109/99.27512977.1.jpg",
          "title": "우유",
          "content": "1컵(100ml)",
          "rating":3,
          "createdAt": 1625339704914,
          "updatedAt": 1625339704914,
          "calorie": 65
        },
        {
          "id": 21,
          "imgUrl": "https://cdn.mindgil.com/news/photo/202007/69545_3802_1558.jpg",
          "title": "블루베리",
          "content": "1작은컵(28g)",
          "rating":5,
          "createdAt": 1625072423713,
          "updatedAt": 1625072423713,
          "calorie": 16
        },
        {
          "id": 22,
          "imgUrl": "https://image.edaily.co.kr/images/photo/files/NP/S/2020/05/PS20051800801.jpg",
          "title": "찐고구마",
          "content": "1회(100g)",
          "rating":3,
          "createdAt": 1625161267846,
          "updatedAt": 1625161267846,
          "calorie": 130
        },
        {
          "id": 23,
          "imgUrl": "https://www.newiki.net/w/images/thumb/8/82/Pork_belly_korean_bbq.jpg/450px-Pork_belly_korean_bbq.jpg",
          "title": "돼지고기 삼겹살(구운것)",
          "content": "1인분(100g)",
          "rating":5,
          "createdAt": 1625202075416,
          "updatedAt": 1625202075416,
          "calorie": 460
        },
        {
          "id": 24,
          "imgUrl": "https://post-phinf.pstatic.net/MjAyMTAzMjVfNTMg/MDAxNjE2NjQ4OTU1ODIy.uziAaKNiDDq_AQPWBJ4LsnP-vKRWx1X-auUoyzrXf8wg.OeJ54u11pQStQJ3HQO12AA08nCtoSawTGFNemQvtrKkg.JPEG/IM_food02.jpg?type=w1200",
          "title": "두부",
          "content": "1회(100g)",
          "rating":4,
          "createdAt": 1625117462332,
          "updatedAt": 1625117462332,
          "calorie": 88
        },
        {
          "id": 25,
          "imgUrl": "http://33success100.co.kr/wp-content/uploads/2021/03/%E1%84%80%E1%85%AE%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AF%E1%84%84%E1%85%A5%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B5.png",
          "title": "떡볶이",
          "content": "1인분(200g)",
          "rating":5,
          "createdAt": 1624838482426,
          "updatedAt": 1624838482426,
          "calorie": 303.53
        },
        {
          "id": 26,
          "imgUrl": "https://file.mk.co.kr/meet/neds/2015/04/image_readtop_2015_386378_14297293841886734.jpg",
          "title": "야채샐러드 (드레싱 포함)",
          "content": "1인분(150g)",
          "rating":3,
          "createdAt": 1624931493912,
          "updatedAt": 1624931493912,
          "calorie": 100
        },
        {
          "id": 27,
          "imgUrl": "https://www.korea.kr/newsWeb/resources/temp/images/000183/560_01_4.jpg",
          "title": "양배추",
          "content": "1회(100g)",
          "rating":3,
          "createdAt": 1624964777264,
          "updatedAt": 1624964777264,
          "calorie": 24
        },
        {
          "id": 28,
          "imgUrl": "https://img.hankyung.com/photo/202206/99.30245044.1.jpg",
          "title": "양상추",
          "content": "1인분(100g)",
          "rating":3,
          "createdAt": 1624961602964,
          "updatedAt": 1624961602964,
          "calorie": 11
        },
        {
          "id": 29,
          "imgUrl": "https://cdn.mkhealth.co.kr/news/photo/202106/53426_54835_622.jpg",
          "title": "양파",
          "content": "1인분(100g)",
          "rating":4,
          "createdAt": 1624901451829,
          "updatedAt": 1624901451829,
          "calorie": 35
        },
        {
          "id": 30,
          "imgUrl": "https://media.istockphoto.com/id/485546290/ko/%EC%82%AC%EC%A7%84/%ED%81%AC%EB%9F%B0%EC%B9%98-%ED%83%80%EC%BD%94-%EB%A9%95%EC%8B%9C%EC%BD%94-%ED%94%8C%EB%9E%98%ED%84%B0.webp?s=612x612&w=is&k=20&c=srqM_R2cnWB37ooaf-IweoOQyrJj3sFjj8RxzLiY06E=",
          "title": "크런치 타코",
          "content": "1개",
          "rating":1,
          "createdAt": 1624775536229,
          "updatedAt": 1624775536229,
          "calorie": 170
        }
      ]
     //data를 한페이지에 5개씩 총 6페이지 
    const [blockNum, setBlockNum] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    const v = Number(blockNum * pageLimit);
    const iArr = createArr(Number(maxPage));
    let pArr = iArr.slice(v, Number(pageLimit)+v);

    const firstPage =()=>{
        setBlockNum(0);
        setCurrPage(1);
    }

    const lastPage =()=>{
        setBlockNum(Math.ceil(maxPage/pageLimit)-1);
        setCurrPage(maxPage);
    }

    const prevPage= ()=>{
        if(currPage <= 1)
            return;
        if((currPage -1) <= pageLimit * blockNum){
            setBlockNum(n=>n-1);
        }
        setCurrPage(n=> n-1);
    }


    const nextPage= ()=>{
        if(currPage >= maxPage)
            return;
        if(pageLimit* Number(blockNum +1) < Number(currPage+1)){
            setBlockNum(n=>n+1);
        }
        setCurrPage(n=>n+1);
    }

    return (
        <>
            <h1>currPage : {currPage}</h1>
            <h1>blockNum : {blockNum}</h1>
           
                <button onClick={firstPage}>&lt;&lt;</button>
                <button onClick={prevPage}>&lt;</button>
            
           
        
                {
                    pArr.map(n=>(
                        <button>{n}</button>
                    ))
                }
             
          
                <button onClick={nextPage}>&gt;</button>
                <button onClick={lastPage}>&gt;&gt;</button>
            
        </>
    );
};

export default App2;