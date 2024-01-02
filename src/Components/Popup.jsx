import React from "react";
import Modal from "react-bootstrap/Modal";
import coder from "../assets/images/Vector.png";

const Popup = (props) => {
  // const [close, setClose] = useState(true);
  return (
    <>
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* <button type="button" aria-label="Close" data-mdb-dismiss="modal">
                close
              </button> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="model_popup">
              <div className="attendance_view">
                <div className="tag_content">
                  <p className="tag_data">Attendance : 04/12/2023</p>
                </div>
                <p className="highlight_head">👋 Hello, John</p>
                <p className="sub_text">
                  Scan QR code from your phone to mark attendance.
                </p>
                <div className="step_text">
                  <p className="list_head">Steps to mark attendance</p>
                  <ul>
                    <li className="list_text">Open sportslete application</li>
                    <li className="list_text">Tap on attendance tab</li>
                    <li className="list_text">
                      Scan QR code to mark attendance
                    </li>
                  </ul>
                </div>
              </div>

              <div className="qr_container">
                <div className="attendance_view">
                  <img src={coder} width="180px" />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Popup;
