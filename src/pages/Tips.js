import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'
import RecomCard from '../component/RecomCard';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';

const Tips = () => {

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
    
                    const firstFour = onlyRecommended.slice(0, 1);
    
                    setRecs(firstFour);
                })
                .catch((err) => {
                    console.log('db.json 로드 실패', err)
                })
        }, []) // : [] 처음 실행 했을 때 한번만 실행토록

    return (
        <div className='contents'>
            <h2>음식 선택</h2>
            <Tabs>
                <TabList>
                    <Tab>🍝양식</Tab>
                    <Tab>🍜중식</Tab>
                    <Tab>🍱한식</Tab>
                </TabList>

                <TabPanel>
                    <h2>오늘의 양식</h2>
                    <div className="recom-card">
                    {
                        recs.map((item) => (
                            <RecomCard key={item.id} item={item}/>
                        ))
                    }
                </div>
                </TabPanel>
                <TabPanel>
                    <h2>오늘의 중식</h2>
                    <div className="recom-card">
                    {
                        recs.map((item) => (
                            <RecomCard key={item.id} item={item}/>
                        ))
                    }
                </div>
                </TabPanel>
                <TabPanel>
                    <h2>오늘의 한식</h2>
                    <div className="recom-card">
                    {
                        recs.map((item) => (
                            <RecomCard key={item.id} item={item}/>
                        ))
                    }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Tips