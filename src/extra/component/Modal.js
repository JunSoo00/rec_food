import React, { useEffect } from 'react'
import '../shoes.css'

const Modal = ({onclose, children}) => {

    const handleClose = onclose || (() => {})

    //배경에 스크롤 제거
    useEffect(() => {
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [])
    return (
        <div className="modal-bg" onClick={handleClose} role='dialog' aria-modal='true'>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
                <button type='button' onClick={handleClose}>✖</button>
                {children}
            </div>
        </div>
    )
}

export default Modal