import React from 'react';
import './modal.css';
import ReactDOM from 'react-dom';

const ModalContent = ({
                          onClose
                      } ) => {

    return ReactDOM.createPortal(
        <aside className="c-modal-cover">
            <div className="c-modal">
                <button  aria-label="Close Modal"  onClick={onClose}>
                    Close this Modal
                </button>
                <div className="c-modal__body">
                    CONTENT WILL GO HERE
                </div>
            </div>
        </aside>,
        document.body
    );
}
export default ModalContent