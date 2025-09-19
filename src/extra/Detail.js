import React, { useEffect, useState } from 'react'
import DetailPlus from './DetailPlus';
import Modal from './component/Modal';
import Toast from './component/Toast';
import './shoes.css'

const Detail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [toast, setToast] = useState(null);

    const openImage = () => setIsModalOpen(true);
    const closeImage = () => setIsModalOpen(false);

    const addCart = () => {
        setCartCount((prev) => prev + 1)
        setToast({message : '장바구니에 담았습니다'})
    }

    //토스트 자동 닫힘
    useEffect(()=> {
        if (!toast) return; //toast가 처리할 게 없으면 그냥 종료
        const t = setTimeout(() => setToast(null), 1800);
        return () => clearTimeout(t);
    }, [toast]);

    //esc 모달 닫기
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setIsModalOpen(false)
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey)
    }, [])

  return (
    <div className='shoes-wrap'>
        <header>
            <h1>Shoes NARA</h1>
            <div className="cart">
                🛒
            </div>
        </header>

        <main>
            <DetailPlus onAddCart={addCart} openImage = {openImage} />
        </main>
        {/* 모달 열림 상태일 때만 렌더링 */}
        {
            isModalOpen && (
                <Modal onclose={closeImage}>
                    <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTlBJUI0JUVCJThGJTk5JUVEJTk5JTk0fGVufDB8fDB8fHww" alt="운동화" className='modal-image' />
                </Modal>
            )
        }
        {toast && <Toast>{toast.message}</Toast>}
    </div>
  )
}

export default Detail