import React, { useState, useEffect } from 'react';

import { Button } from '@mui/material';
import { css } from 'styled-system/css';
import Image from 'next/image';

const images = ['/assets/images/home/tubakuro.png']; // 他の画像パスも追加

function HomeView() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000); // 画像を5秒ごとに切り替える

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  const homeviewStyle = css({
    position: 'relative',
    height: '100vh',
    overflow: 'hidden', // 画像がhomeviewをはみ出さないようにする
  });

  const overlayStyle = css({
    background: 'rgba(24, 75, 101, 0.89)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1, // 画像の上に配置する
  });

  const buttonStyle = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2, // 画像とオーバーレイの上に配置する
  });

  return (
    <div className={homeviewStyle}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          layout="fill" // homeviewをいっぱいに広げる
          objectFit="cover" // 画像がhomeviewをカバーするように設定
          quality={100} // 画像の品質を最大に設定
          style={{ position: 'absolute', display: index === currentImageIndex ? 'block' : 'none' }}
        />
      ))}
      <div className={overlayStyle} />
      {/* //svgを追加 */}
      <Image
        className={css({
          position: 'absolute',
          top: '34%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        })}
        alt="500"
        src="/assets/home/title.svg"
        width={200}
        height={75}
      />

      <Image
        className={css({
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        })}
        alt="500"
        src="/assets/home/sub-title.svg"
        width={350}
        height={75}
      />
      <Button className={buttonStyle}>Click me</Button>
    </div>
  );
}

export default HomeView;
