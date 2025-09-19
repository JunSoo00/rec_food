import React, { useState } from 'react'
import './shoes.css'

const DetailPlus = ({onAddCart, openImage}) => {
    const [tab, setTab] = useState('detail'); //detail | review | qna
    const handleAddCart = onAddCart || (() => { })
    const handleOpenImage = openImage || (() => { })
    return (
        <div>
            <figure className="shoes-cont">
                <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTlBJUI0JUVCJThGJTk5JUVEJTk5JTk0fGVufDB8fDB8fHww" alt="" onClick={handleOpenImage} title='클릭시 확대' />
            </figure>
            <div className="shoes-info">
                <h2>나이키 운동화</h2>
                <p className='price'>1,500,000원</p>
                <div className="action">
                    <button type="button" onClick={handleAddCart} className="btn btnPrimary">장바구니</button>
                    <button type="button" className="btn" onClick={handleOpenImage}>이미지 확대</button>
                </div>
                {/*         //tab */}
                <div className="tabs" role="tablist" aria-label="상품 정보 탭">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'detail'}
                        className={`tab ${tab === 'detail' ? 'active' : ''}`}
                        onClick={() => setTab('detail')}
                    >
                        상세
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'review'}
                        className={`tab ${tab === 'review' ? 'active' : ''}`}
                        onClick={() => setTab('review')}
                    >
                        리뷰
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'qna'}
                        className={`tab ${tab === 'qna' ? 'active' : ''}`}
                        onClick={() => setTab('qna')}
                    >
                        문의
                    </button>
                </div>

                {/* 탭 콘텐츠 */}
                <div className="tab-panel">
                    {tab === 'detail' && (
                        <ul className="bullets">
                            <li>가벼운 쿠셔닝으로 장시간 러닝에 적합</li>
                            <li>통기성 좋은 매쉬 소재</li>
                            <li>초보 러너에게 추천</li>
                        </ul>
                    )}

                    {tab === 'review' && (
                        <div>
                            <p>⭐️⭐️⭐️⭐️☆ 4.3/5 (128개)</p>
                            <p>“발볼 넓은데 편해요!”</p>
                        </div>
                    )}

                    {tab === 'qna' && (
                        <div>
                            <p>Q. 방수되나요?</p>
                            <p>A. 생활방수 정도는 가능합니다.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailPlus