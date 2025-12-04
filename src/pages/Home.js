import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import '../App.css'
import RecomCard from '../component/RecomCard';


const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/db.json`)
            .then((r) => r.json()) //요청한 데이터를 json형태로 바꿔줘
            .then((data) => {
                /* console.log(data) */
                const meals = data.meals || []; //data.meal이 있으면 그 값 그대로 보여주고 없으면 빈 배열로 처리 -> meals 데이터가 항상 배열로 처리되도록 해주는 구문
                console.log(meals)

                //db.json에서 recommended라는 값이 true 이면 따로 모아서 새 별롣
                const onlyRecommended = meals.filter((m) => m.recommended)

                const firstFour = onlyRecommended.slice(0, 4);

                setRecs(firstFour);
            })
            .catch((err) => {
                console.log('db.json 로드 실패', err)
            })
    }, []) // : [] 처음 실행 했을 때 한번만 실행토록
    return (
        <div className="contents">
            <Carousel responsive={responsive} swipeable={true} autoPlay={true} autoPlaySpeed={3000} className='hero-slide'>
                <div>
                    <img src="https://images.unsplash.com/photo-1591325418441-ff678baf78ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8fDA%3D" alt="라멘" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1743419612786-19d116bb8c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVFQyVBNyVBQyVFQiVCRCU5NXxlbnwwfHwwfHx8MA%3D%3D" alt="짬뽕" />
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RlYWt8ZW58MHx8MHx8fDA%3D" alt="스테이크" />
                </div>
            </Carousel>
            <div className="intro-text">
                <h2>
                    <span>MenuRoulette</span>
                    클릭 한 번으로 오늘의 메뉴 결정
                </h2>
                <div className="text-area">
                    <p>메뉴 고민 그만! 룰렛을 돌려보세요 🍔🍣🍜 <br />
                        랜덤하게, 가볍게, 즐겁게 오늘의 한 끼를 정해드립니다.</p>
                </div>
            </div>

            <div className="recomendArea">
                <h2>오늘의 추천</h2>
                <div className="recom-card">
                    {
                        recs.map((item) => (
                            <RecomCard key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home