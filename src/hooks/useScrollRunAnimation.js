import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагин
gsap.registerPlugin(ScrollTrigger);

/**
 * Проверка, является ли устройство мобильным
 */
const isMobileDevice = () => {
  return window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

/**
 * Hook for scroll-based run animation (только для мобильных устройств)
 * @param {React.RefObject} containerRef - Ref to the .main_run container
 * @param {React.RefObject} imageRef - Ref to the img element inside
 * @param {string} start - ScrollTrigger start position (default: "top bottom")
 * @param {string} end - ScrollTrigger end position (default: "+=300%" - увеличенное расстояние для медленной анимации)
 */
export const useScrollRunAnimation = (
  containerRef,
  imageRef,
  start = "top bottom",
  end = "+=200%"
) => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Работаем только на мобильных устройствах
    if (!isMobileDevice()) {
      return;
    }

    if (!containerRef.current || !imageRef.current) {
      return;
    }

    const container = containerRef.current;
    const image = imageRef.current;

    // Отключаем CSS анимацию на мобильных
    image.style.animation = "none";

    // Устанавливаем начальную позицию
    gsap.set(image, {
      x: "33%",
    });

    // Убиваем предыдущую анимацию если есть
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // Создаем анимацию с ScrollTrigger
    const animation = gsap.to(image, {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: start,
        end: end,
        scrub: true, // Плавная привязка к скроллу
        invalidateOnRefresh: true,
        markers: false, // Установите true для отладки
      },
    });

    // Сохраняем ссылку на анимацию
    animationRef.current = animation;

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      // Очищаем ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [containerRef, imageRef, start, end]);

  return animationRef;
};
