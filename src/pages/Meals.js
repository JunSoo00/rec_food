import { useEffect, useState } from 'react'
import MealCard from '../component/MealCard';
import RecomCard from '../component/RecomCard';
import '../App.css'

const Meals = () => {
  const [all, setAll] = useState([]); //전체 데이터상태
  const [showAll , setShowAll] = useState(false); //더보기 버튼 클릭시 true

  useEffect(()=> {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
    .then(r=>r.json())//json 형태로 데이터 변환
    .then(data => setAll(data.meals || [])) //json에서 meals라는 데이터를 꺼내 저장
    .catch(console.error)
  }, []);

const visible = showAll ? all : all.slice(0,10);
const restCount = Math.max(all.length - 10, 0); //전체 데이터갯수 - 10 (위에서 10개 보여줘서) 나머지가 음수일땐 0으로 처리

  return (
    <div className="contents">
      <div className="title-area">
        <h2>음식 목록</h2>
        <small>총 {all.length}개 항목 중 처음 10개를 보여줍니다.</small>
      </div>

      <div className="meals-list">
        {visible.map((item) => (
          <RecomCard key={item.id} item={item} />
        ))}
      </div>

      {
        !showAll && restCount > 0 && (
          <div className='btn-area'>
            <button onClick={() => setShowAll(true)}>
              더보기({restCount})
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Meals