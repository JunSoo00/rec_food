import React from 'react'
import { useNavigate } from 'react-router-dom';


const MealCard = ({item}) => { 
    const naviate = useNavigate() ;
  return (
    <div className="meals-card" onClick={()=> {naviate(`/meals/${item.id}`)}}>
        <figure>
            <img src={item.image} alt={item.title} />
        </figure>
        <div className="meals-text">
            <h3>{item.title}</h3>
            <p className='meals-text'>
                <span className="tag">{item.tags.join(".")}</span>
            </p>
            <p className="desc">{item.description}</p>
            <p className="recom">{item.recommended && <span className='badge'>추천</span>}</p>
        </div>
    </div>
  )
}

export default MealCard