import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const FrameSequenceAnimation = ({ 
  images, 
  baseImage, 
  speed = 0.08, // Скорость переключения кадров (в секундах на кадр)
  className = "",
  imageClassName = ""
}) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const currentFrameRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const directionRef = useRef(null); // 'forward' или 'reverse'
  const [isMobile, setIsMobile] = useState(false);

  // Определяем, является ли устройство мобильным или планшетом
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || images.length === 0) return;

    const imageElements = imagesRef.current.filter(Boolean);

    if (imageElements.length === 0) return;

    // На мобильных и планшетах показываем только последний кадр статично
    if (isMobile) {
      const lastFrameIndex = imageElements.length - 1;
      imageElements.forEach((img, index) => {
        if (img) {
          if (index === lastFrameIndex) {
            gsap.set(img, {
              opacity: 1,
              display: "block",
              pointerEvents: "none",
              zIndex: 1
            });
          } else {
            gsap.set(img, {
              opacity: 0,
              display: "none",
              pointerEvents: "none"
            });
          }
        }
      });
      currentFrameRef.current = lastFrameIndex;
    } else {
      // На десктопе - все кадры скрыты изначально
      imageElements.forEach((img) => {
        if (img) {
          gsap.set(img, {
            opacity: 0,
            display: "none",
            pointerEvents: "none"
          });
        }
      });
      currentFrameRef.current = 0;
    }

    return () => {
      // Очистка при размонтировании
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      imageElements.forEach((img) => {
        if (img) {
          gsap.killTweensOf(img);
        }
      });
    };
  }, [images, isMobile]);

  const showFrame = (frameIndex, duration = 0.15) => {
    const imageElements = imagesRef.current.filter(Boolean);
    const totalFrames = imageElements.length;
    const targetFrame = Math.max(0, Math.min(frameIndex, totalFrames - 1));

    // Плавный crossfade между кадрами
    imageElements.forEach((img, index) => {
      if (img) {
        if (index === targetFrame) {
          // Показываем целевой кадр с плавным появлением
          gsap.to(img, {
            opacity: 1,
            display: "block",
            duration: duration,
            ease: "power2.out",
            zIndex: 1
          });
        } else {
          // Скрываем остальные кадры с плавным исчезновением
          gsap.to(img, {
            opacity: 0,
            duration: duration,
            ease: "power2.in",
            onComplete: () => {
              if (img.style.opacity === "0") {
                gsap.set(img, { display: "none" });
              }
            },
            zIndex: 0
          });
        }
      }
    });

    currentFrameRef.current = targetFrame;
  };

  const stopAnimation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isAnimatingRef.current = false;
    directionRef.current = null;
  };

  const playForward = () => {
    const imageElements = imagesRef.current.filter(Boolean);
    const totalFrames = imageElements.length;

    // Если уже на последнем кадре, не запускаем анимацию
    if (currentFrameRef.current >= totalFrames - 1) {
      isAnimatingRef.current = false;
      return;
    }

    // Останавливаем предыдущую анимацию
    stopAnimation();
    isAnimatingRef.current = true;
    directionRef.current = 'forward';

    // Начинаем с первого кадра (если еще не показан)
    if (currentFrameRef.current === 0) {
      showFrame(0, speed * 1.5);
    }

    const animate = () => {
      if (!isAnimatingRef.current || directionRef.current !== 'forward') {
        return;
      }

      if (currentFrameRef.current < totalFrames - 1) {
        currentFrameRef.current++;
        showFrame(currentFrameRef.current, speed * 1.5);
        
        // Увеличиваем интервал для более плавного перехода
        timeoutRef.current = setTimeout(() => {
          animate();
        }, speed * 1000 + 20); // Небольшая задержка для плавности
      } else {
        // Достигли последнего кадра - останавливаемся и остаемся на нем
        isAnimatingRef.current = false;
        directionRef.current = null;
      }
    };

    // Запускаем анимацию с задержкой после показа первого кадра
    timeoutRef.current = setTimeout(() => {
      animate();
    }, speed * 1000 + 50);
  };

  const playReverse = () => {
    const imageElements = imagesRef.current.filter(Boolean);
    // totalFrames can be derived from imageElements.length if needed

    // Останавливаем предыдущую анимацию
    stopAnimation();
    isAnimatingRef.current = true;
    directionRef.current = 'reverse';

    const animate = () => {
      if (!isAnimatingRef.current || directionRef.current !== 'reverse') {
        return;
      }

      if (currentFrameRef.current > 0) {
        currentFrameRef.current--;
        showFrame(currentFrameRef.current, speed * 1.5);
        
        // Увеличиваем интервал для более плавного перехода
        timeoutRef.current = setTimeout(() => {
          animate();
        }, speed * 1000 + 20); // Небольшая задержка для плавности
      } else {
        // Достигли первого кадра - плавно скрываем все кадры
        const imageElements = imagesRef.current.filter(Boolean);
        imageElements.forEach((img) => {
          if (img) {
            gsap.to(img, {
              opacity: 0,
              duration: speed * 1.5,
              ease: "power2.in",
              onComplete: () => {
                gsap.set(img, { display: "none", zIndex: 0 });
              }
            });
          }
        });
        currentFrameRef.current = 0;
        isAnimatingRef.current = false;
        directionRef.current = null;
      }
    };

    animate();
  };

  const handleMouseEnter = () => {
    // На мобильных и планшетах анимация не работает
    if (isMobile) return;

    if (!containerRef.current || images.length === 0) return;

    const imageElements = imagesRef.current.filter(Boolean);
    if (imageElements.length === 0) return;

    // Если анимация идет назад, останавливаем ее
    if (directionRef.current === 'reverse') {
      stopAnimation();
    }

    // Проигрываем анимацию вперед от текущего кадра до последнего
    playForward();
  };

  const handleMouseLeave = () => {
    // На мобильных и планшетах анимация не работает
    if (isMobile) return;

    // Если анимация идет вперед, останавливаем ее
    if (directionRef.current === 'forward') {
      stopAnimation();
    }

    // Проигрываем анимацию в обратном направлении от текущего кадра до первого
    playReverse();
  };

  return (
    <div 
      ref={containerRef} 
      className={`frame-sequence-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      {baseImage && (
        <div className="frame-sequence-phone-wrapper">
          <img 
            src={baseImage} 
            alt="ChooseRight Phone" 
            className={`frame-sequence-base ${imageClassName}`}
          />
        </div>
      )}
      <div 
        ref={animationRef} 
        className="frame-sequence-animation"
      >
        {images.map((img, index) => (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            src={img}
            alt={`Yety Frame ${index + 1}`}
            className={`frame-sequence-frame ${imageClassName}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FrameSequenceAnimation;
