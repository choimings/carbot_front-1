import React, { useState } from 'react';
// import Callbot from './modal/callbotallbot';
import './callbotIcon.css';
import Callbot from './modal/callbot';
import botImage from './callbot_img.png';

const CallbotIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* 우측 하단에 고정된 아이콘 */}
      <div className="callbot-icon" onClick={openModal}>
        <img src={botImage} alt="Callbot Icon" className="bot-image" />
      </div>

      {/* 모달 창 */}
      {isModalOpen && <Callbot onClose={closeModal} />}
    </div>
  );
};

export default CallbotIcon;
