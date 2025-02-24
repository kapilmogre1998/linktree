import { useEffect, useRef } from 'react'
import useOutsideClick from '../../Hooks/useOutSideClick';

import './Modal.scss'

const Modal = ({ children, closeModal, contentWidth = 400 }) => {
    const modalRef = useRef(null);

    useOutsideClick(modalRef, closeModal)

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if(e.key === "Escape") closeModal();
        });

        return () => {
            document.removeEventListener('keydown', (e) => {
                if(e.key === "Escape") closeModal();
            })
        };
    },[])

    return (
        <div  className='modal-container'>
            <div ref={modalRef} className='modal-content' style={{ width: contentWidth + 'px' }} >
                {children}
            </div>
        </div>
    )
}

export default Modal