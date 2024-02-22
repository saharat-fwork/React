// import { Button, Modal } from "antd";
// import React, { useState } from "react";

// const InfoUserLine = ({pOpen}) => {
//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState("Content of the modal");

//   setOpen(pOpen);

//   console.log(">>>Info");

//   const handleOk = () => {
//     setModalText("The modal will be closed after two seconds");
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };
//   const handleCancel = () => {
//     console.log("Clicked cancel button");
//     setOpen(false);
//   };
//   return (
//     <>
//       <Modal
//         title="Title"
//         open={open}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//       >
//         <p>{modalText}</p>
//       </Modal>
//     </>
//   );
// };
// export default InfoUserLine;

import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const EditDetailsDialog = ({ onSave }) => {
  const [visible, setVisible] = useState(false);

  console.log("TEST");

  const handleShowDialog = () => {
    setVisible(true);
  };

  const handleSave = () => {
    // Save logic goes here
    // You can also pass the updated details to the parent component
    onSave(/* updated details */);

    // Close the dialog
    setVisible(false);
  };

  const handleCancel = () => {
    // Handle cancel action
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleShowDialog}>Edit Details</Button>
      <Modal
        title="Edit Details"
        visible={visible}
        onOk={handleSave}
        onCancel={handleCancel}
      >
        {/* Your form fields go here */}
        <Form>
          <Form.Item label="Name">
            <Input /* bind input value to state or props */ />
          </Form.Item>
          {/* Add more form fields as needed */}
        </Form>
      </Modal>
    </div>
  );
};

export default EditDetailsDialog;
