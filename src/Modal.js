import React from 'react';
import ModalButton from './ModalButton'
import ModalContent from './ModalContent'

class Modal extends React.Component {
    state = { isOpen: false };
    onOpen = () => {
        this.setState({ isOpen: true });
    };
    onClose = () => {
        this.setState({ isOpen: false });
    };
    render() {
        const { isOpen } = this.state;
        const { triggerText } = this.props;
        return (
            <React.Fragment>
                <ModalButton  onOpen={this.onOpen} text={triggerText} />
                {isOpen &&
                <ModalContent onClose={this.onClose}/>
                }
            </React.Fragment>

        );
    }
}

export default Modal;