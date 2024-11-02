import React, { useState } from 'react';
import './main.css';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Video4 from '../../video/blackcar.mp4';
import Video3 from '../../video/dealer.mp4';
import Video1 from '../../video/graycar.mp4';
import Video2 from '../../video/redcar.mp4';
import Eximage from '../../images/genesis.png';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const videos = [Video1, Video2, Video3, Video4];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookmarked, setBookmarked] = useState([false, false, false]);

  // 다음 슬라이드로 이동
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
  };

  // 이전 슬라이드로 이동
  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + videos.length) % videos.length
    );
  };

  // 특정 슬라이드로 이동
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // 비디오가 끝났을 때 다음 슬라이드로 이동
  const handleVideoEnded = () => {
    handleNext();
  };

  // 북마크 아이콘 클릭 핸들러
  const handleBookmarkClick = (index) => {
    const updatedBookmarks = [...bookmarked];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarked(updatedBookmarks);

    if (updatedBookmarks[index]) {
      toast.success('저장되었습니다.', { autoClose: 1000 });
    } else {
      toast.error('삭제되었습니다.', { autoClose: 1000 });
    }
  };

  return (
    <div className="main-container">
      <ToastContainer />
      {/* video slider section */}
      <section className="video-section">
        <div className="main-video-slider">
          {videos.map((video, index) => (
            <video
              key={index}
              className={`background-video ${
                index === currentSlide ? 'active' : ''
              }`}
              autoPlay
              loop={
                false
              } /* 비디오가 끝나면 onEnded 호출을 위해 loop를 false로 설정 */
              muted
              onEnded={
                handleVideoEnded
              } /* 비디오가 끝나면 다음 슬라이드로 이동 */
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          <button className="prev-button" onClick={handlePrev}>
            <IoIosArrowBack />
          </button>
          <button className="next-button" onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        </div>

        {/* Dot navigation */}
        <div className="dot-navigation">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>

      {/* best-car section */}
      <section className="best-car">
        <p className="bestcar-text">BEST CAR</p>
        <div className="main-car-container">
          {[Eximage, Eximage, Eximage].map((image, index) => (
            <div key={index} className="main-card">
              <img src={image} alt="차량 이미지" />
              <div className="main-info">
                {/* 텍스트와 아이콘을 한 줄에 배치 */}
                <div className="main-model-info">
                  <p>모델명: 차량 모델 {index + 1}</p>
                  <span
                    onClick={() => handleBookmarkClick(index)}
                    className="main-bookmark-icon"
                  >
                    {bookmarked[index] ? <FaBookmark /> : <FaRegBookmark />}
                  </span>
                </div>
                <Link to="/CarInfo" className="main-links">
                  <button className="main-info-button">자세히 보기</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* car-select section */}
      <div className="main-select-button">
        <Link to="/CarSelect" className="main-links">
          <button>차량 조회</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
