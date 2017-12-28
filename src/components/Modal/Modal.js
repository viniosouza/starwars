import React from "react";
import "./styles/Modal.css";
class Modal extends React.Component {
  render() {
    // const coverClass = this.state.modalOpened
    //   ? "modal-cover modal-cover-active"
    //   : "modal-cover";
    // const containerClass = this.state.modalOpened
    //   ? "modal-container modal-container-active"
    //   : "modal-container";
    return (
      <div>
        {/* <div className={containerClass}>
          <div className="modal-header" />
          <div className="modal-body" />
          <div className="modal-footer" />
        </div>

        <div className={coverClass} onClick={this.state.modalToggle} /> */}
      </div>
    );
  }
}

export default Modal;
