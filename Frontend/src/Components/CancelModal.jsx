
import Modal from 'react-bootstrap/Modal';

export default function CancelModal(props) {
    { console.log(props.cancelid) }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton closeVariant="white" style={{ backgroundColor: '#5861AE', borderRadius: "0" }}>
                <h3 style={{ color: "white" }}>
                    Alert
                </h3>
            </Modal.Header>
            <Modal.Body style={{ borderRadius: "0", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", padding: "10px" }}>
                    <div style={{ marginRight: "80px" }}>
                        <img src={require("../Assets/alert.png")} alt="" />
                    </div>
                    <div style={{ textAlign: "center", marginRight: "120px" }}>
                        Are You Sure You Want To Cancel Order No : <span style={{ color: '#5861AE', fontWeight: "bold" }}>ORID000{props.cancelid && props.cancelid[1]}</span>
                    </div>
                </div>
                <button className='btn' onClick={() => {
                    props.handleCancel(props.cancelid && props?.cancelid[0])
                    props.setmodalShow(false)
                }} style={{ margin: "0 auto", backgroundColor: '#5861AE', color: "white" }}>Cancel</button>
            </Modal.Body>
        </Modal>
    );
}


