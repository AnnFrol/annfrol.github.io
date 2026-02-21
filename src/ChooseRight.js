import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { APP_STORE, CHOOSERIGHT_PRIVACY_URL } from "./constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Player } from "@lottiefiles/react-lottie-player";
import "./css/chooseright.css";
import AnimatedText from "./AnimatedText";
import FrameSequenceAnimation from "./FrameSequenceAnimation";
import chess from "./assets/img/chess.png";
import videoChR from "./assets/img/ChR_G - 30.mp4";
import chooseRightPhone from "./assets/img/ChooseRight 1.png";
import yety1 from "./assets/img/Yety-1.png";
import yety2 from "./assets/img/Yety-2.png";
import yety3 from "./assets/img/Yety-3.png";
import yety4 from "./assets/img/Yety-4.png";
import yety5 from "./assets/img/Yety-5.png";
import yety6 from "./assets/img/Yety-6.png";
import yety7 from "./assets/img/Yety-7.png";
import yety8 from "./assets/img/Yety-8.png";
import yety9 from "./assets/img/Yety-9.png";
const appIcon = require("./assets/img/appIcon-choiceright.png");

gsap.registerPlugin(ScrollTrigger);

function ChooseRight() {
  const location = useLocation();
  const circlesRef = useRef([]);
  const ellipseRef = useRef(null);
  const ellipse2Ref = useRef(null);
  const chekRef = useRef(null);
  const contentRef = useRef(null);
  const infoRef = useRef(null);
  const partOneRef = useRef(null);
  const partThreeRef = useRef(null);
  const partThreeH5Ref = useRef(null);
  const sectionWhiteRef = useRef(null);
  const appPromoRef = useRef(null);
  const projectContainerRef = useRef(null);
  const animationContainerRef = useRef(null);
  const [shouldLoadFire, setShouldLoadFire] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const fireContainerRef = useRef(null);

  // Массив изображений для анимации
  const yetyImages = [yety1, yety2, yety3, yety4, yety5, yety6, yety7, yety8, yety9];

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

  // Сбрасываем состояние при переходе
  useEffect(() => {
    setShouldLoadFire(false);
  }, [location.pathname]);

  useEffect(() => {
    // Загружаем анимацию после начала прокрутки
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShouldLoadFire(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Анимация появления кнопки с огоньком слева направо
  useEffect(() => {
    if (shouldLoadFire && fireContainerRef.current) {
      gsap.fromTo(
        fireContainerRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, [shouldLoadFire]);

  // Анимация background элементов при загрузке страницы
  useEffect(() => {
    // Копируем ref значения для использования в cleanup
    const ellipseEl = ellipseRef.current;
    const ellipse2El = ellipse2Ref.current;
    const chekEl = chekRef.current;
    const projectContainerEl = projectContainerRef.current;
    
    let retryCount = 0;
    const maxRetries = 10;

    // Обновляем ScrollTrigger при изменении маршрута
    ScrollTrigger.refresh();

    // Функция для инициализации анимации
    const initAnimation = () => {
      const ellipse = ellipseRef.current;
      const ellipse2 = ellipse2Ref.current;
      const chek = chekRef.current;

      if (ellipse && ellipse2 && chek && 
          ellipse.offsetParent !== null && 
          ellipse2.offsetParent !== null && 
          chek.offsetParent !== null) {
        // Убиваем все существующие анимации для этих элементов
        gsap.killTweensOf([ellipse, ellipse2, chek]);
        
        // Сбрасываем все трансформации перед установкой начального состояния
        gsap.set([ellipse, ellipse2, chek], { clearProps: "all" });

        // Делаем элементы видимыми и устанавливаем начальное состояние - элементы выше их финальной позиции
        // Используем immediateRender: false чтобы избежать мерцания
        gsap.set(ellipse, {
          y: -window.innerHeight * 2,
          visibility: "visible",
          immediateRender: false,
        });

        // Для ellipse2 используем xPercent: -50 для центрирования (вместо CSS transform)
        // Поднимаем выше, чтобы полностью скрыть перед анимацией
        gsap.set(ellipse2, {
          y: -window.innerHeight * 3,
          xPercent: -50,
          x: 0, // Сбрасываем x, чтобы xPercent работал правильно
          visibility: "visible",
          immediateRender: false,
        });

        gsap.set(chek, {
          y: -window.innerHeight * 2,
          visibility: "visible",
          immediateRender: false,
        });

        // Анимация падения сверху на изначальные позиции с задержкой 0.6 секунды
        const tl = gsap.timeline({ delay: 0.6 });
      
        // Небольшой отскок с помощью back.out (большее значение = меньше отскок)
        const bounceEase = "back.out(1.7)";
        
        tl.to(ellipse, {
          y: 0,
          duration: 0.8,
          ease: bounceEase,
        })
        .to(ellipse2, {
          y: 0,
          xPercent: -50,
          x: 0,
          duration: 0.8,
          ease: bounceEase,
        }, "-=0.6")
        .to(chek, {
          y: 0,
          duration: 0.8,
          ease: bounceEase,
          onComplete: () => {
            // Убеждаемся, что CSS right применяется после анимации
            if (chek) {
              gsap.set(chek, { clearProps: "transform" });
            }
          }
        }, "-=0.6");
      } else if (retryCount < maxRetries) {
        // Если элементы еще не готовы, повторяем попытку
        retryCount++;
        requestAnimationFrame(() => {
          setTimeout(initAnimation, 50);
        });
      }
    };

    // Используем requestAnimationFrame для более надежного запуска
    requestAnimationFrame(() => {
      setTimeout(() => {
        initAnimation();
        // Показываем контейнер после установки начального состояния
        if (projectContainerRef.current) {
          gsap.set(projectContainerRef.current, { opacity: 1 });
        }
      }, 150);
    });

    return () => {
      // Очищаем все анимации при размонтировании
      if (ellipseEl || ellipse2El || chekEl) {
        gsap.killTweensOf([ellipseEl, ellipse2El, chekEl]);
      }
      // Скрываем контейнер при размонтировании
      if (projectContainerEl) {
        gsap.set(projectContainerEl, { opacity: 0 });
      }
    };
  }, [location.pathname]);

  const circles = [
    { id: 7, left: "9.56%", color: "#FFE295" },
    { id: 54, left: "35.9%", color: "#FF93D7" },
    { id: 55, left: "72.63%", color: "#A2FFC9" },
    { id: 56, left: "88.2%", color: "#FFF6AF" },
    { id: 9, left: "23.05%", color: "#FFB3B1" },
    { id: 60, left: "38.81%", color: "#EABEFF" },
    { id: 57, left: "50.26%", color: "#BECAFF" },
    { id: 58, left: "63.1%", color: "#9FEEFF" },
    { id: 59, left: "87%", color: "#C8FDB0" },
  ];

  useEffect(() => {
    const scrollTriggers = [];
    
    // Очищаем предыдущие анимации кругов
    circlesRef.current.forEach((circle) => {
      if (circle) {
        gsap.killTweensOf(circle);
        const existingTriggers = ScrollTrigger.getAll().filter(
          (trigger) => trigger.vars && trigger.vars.trigger === circle
        );
        existingTriggers.forEach((trigger) => trigger.kill());
      }
    });
    
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        // Разная скорость для каждого круга (от 0.5 до 2)
        const scrubSpeed = 0.5 + (index % 3) * 0.5;
        // Разное время начала анимации (смещение в пикселях)
        const startOffset = index * 50;
        
        // Начальная позиция - справа за экраном, но видимая
        gsap.set(circle, {
          x: window.innerWidth,
        });
        
        const st = gsap.to(
          circle,
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".chooseright-video-section",
              start: `top+=${startOffset} center`,
              end: `bottom+=${startOffset + -300} top`,
              scrub: scrubSpeed,
            },
          }
        );
        
        scrollTriggers.push(st.scrollTrigger);
      }
    });
    
    return () => {
      scrollTriggers.forEach(st => st?.kill());
    };
  }, [location.pathname]);

  // Анимация появления контента при скролле
  useEffect(() => {
    // Очищаем предыдущие ScrollTrigger для контента
    const contentElements = [
      contentRef.current,
      infoRef.current,
      partOneRef.current,
      partThreeRef.current,
      partThreeH5Ref.current,
      sectionWhiteRef.current,
      appPromoRef.current,
    ].filter(Boolean);

    contentElements.forEach((element) => {
      const existingTriggers = ScrollTrigger.getAll().filter(
        (trigger) => trigger.vars && trigger.vars.trigger === element
      );
      existingTriggers.forEach((trigger) => trigger.kill());
      gsap.killTweensOf(element);
    });

    // Очищаем анимации для spans в h5
    if (partThreeH5Ref.current) {
      const spans = partThreeH5Ref.current.querySelectorAll("span");
      if (spans.length > 0) {
        gsap.killTweensOf(spans);
      }
    }

    // Устанавливаем начальное состояние для контента сразу
    if (contentRef.current) {
      gsap.set(contentRef.current, {
        y: -50,
        opacity: 0,
      });
    }

    const scrollTriggers = [];

    // Анимация для chooseright-content
    if (contentRef.current) {
      const st = gsap.fromTo(
        contentRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      scrollTriggers.push(st.scrollTrigger);
    }

    // Анимация для chooseright-info
    if (infoRef.current) {
      const st = gsap.fromTo(
        infoRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 30%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      scrollTriggers.push(st.scrollTrigger);
    }

    // Анимация для chooseright-part-one
    if (partOneRef.current) {
      const st = gsap.fromTo(
        partOneRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partOneRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      scrollTriggers.push(st.scrollTrigger);
    }

    // Анимация для chooseright-part-three
    if (partThreeRef.current) {
      const st = gsap.fromTo(
        partThreeRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partThreeRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      scrollTriggers.push(st.scrollTrigger);
    }

    // Анимация для h5 в chooseright-part-three (как на странице About)
    if (partThreeH5Ref.current) {
      const spans = partThreeH5Ref.current.querySelectorAll("span");
      if (spans.length > 0) {
        const st = gsap.fromTo(
          spans,
          { opacity: 0.4 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: { from: "start", amount: 0.8 },
            ease: "power3.out",
            scrollTrigger: {
              trigger: partThreeH5Ref.current,
              start: "top 70%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
        scrollTriggers.push(st.scrollTrigger);
      }
    }

    // Анимация для chooseright-section-white
    if (sectionWhiteRef.current) {
      const st = gsap.fromTo(
        sectionWhiteRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionWhiteRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      scrollTriggers.push(st.scrollTrigger);
    }

    // Анимация для chooseright-app-promo
    if (appPromoRef.current) {
      const st = gsap.fromTo(
        appPromoRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: appPromoRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      scrollTriggers.push(st.scrollTrigger);
    }

    return () => {
      scrollTriggers.forEach(st => st?.kill());
      // Дополнительная очистка всех ScrollTrigger для контента
      contentElements.forEach((element) => {
        gsap.killTweensOf(element);
      });
    };
  }, [location.pathname]);

  return (
    <div ref={projectContainerRef} className="chooseright-work">
      {shouldLoadFire && (
        <div ref={fireContainerRef} className="chooseright-fire-container">
          <div className="workButtonTWO">
            <Player
              src="https://lottie.host/d1f9a70f-4439-4c51-a1d4-f832771232a7/UzvBch780a.json"
              className="fire-lotti"
              background="transparent"
              speed={1}
              loop
              autoplay
            />
            <a
              href={APP_STORE.CHOOSERIGHT}
              target="_blank"
              rel="noopener noreferrer"
              className="workButtonTWO-svg-link"
              aria-label="Choose Right on the App Store"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="55"
              fill="none"
            >
              <defs>
                <clipPath id="chooseright-clip">
                  <rect width="162" height="55" />
                </clipPath>
              </defs>
              <g clipPath="url(#chooseright-clip)">
                <path
                  fill="#A6A6A6"
                  d="M149.099.375H12.908c-.496 0-.987 0-1.482.003-.415.003-.826.01-1.244.017-.91.01-1.816.09-2.713.239a9.04 9.04 0 0 0-2.573.846 8.714 8.714 0 0 0-3.787 3.78 8.894 8.894 0 0 0-.846 2.57c-.15.892-.232 1.796-.242 2.702-.013.414-.014.83-.021 1.243v31.204c.007.42.008.825.02 1.245.011.906.092 1.81.243 2.702.149.895.434 1.762.846 2.571a8.38 8.38 0 0 0 1.595 2.18 8.495 8.495 0 0 0 2.192 1.59 9.09 9.09 0 0 0 2.573.852c.897.147 1.804.227 2.713.239.418.01.83.015 1.244.015.495.002.986.002 1.482.002h136.191c.487 0 .981 0 1.468-.002.412 0 .835-.006 1.248-.015a18.03 18.03 0 0 0 2.707-.239 9.23 9.23 0 0 0 2.584-.851 8.507 8.507 0 0 0 2.189-1.592 8.618 8.618 0 0 0 1.6-2.179 8.9 8.9 0 0 0 .838-2.57c.151-.894.235-1.797.251-2.703.005-.42.005-.825.005-1.245.011-.49.011-.978.011-1.476V13.249c0-.494 0-.985-.011-1.474 0-.414 0-.83-.005-1.243a18.14 18.14 0 0 0-.251-2.703 8.924 8.924 0 0 0-.838-2.57 8.745 8.745 0 0 0-3.789-3.78 9.178 9.178 0 0 0-2.584-.846c-.895-.148-1.8-.228-2.707-.238-.413-.007-.836-.015-1.248-.017-.487-.003-.981-.003-1.468-.003Z"
                />
                <path
                  fill="#000"
                  d="M11.432 53.194c-.412 0-.814-.006-1.224-.015a17.217 17.217 0 0 1-2.53-.22 7.982 7.982 0 0 1-2.243-.74 7.318 7.318 0 0 1-1.891-1.372 7.184 7.184 0 0 1-1.382-1.885 7.71 7.71 0 0 1-.735-2.237 16.715 16.715 0 0 1-.225-2.532c-.009-.284-.02-1.232-.02-1.232V11.775s.012-.934.02-1.208c.01-.847.085-1.691.224-2.527.13-.781.377-1.538.736-2.244A7.255 7.255 0 0 1 3.536 3.91a7.533 7.533 0 0 1 1.898-1.38 7.898 7.898 0 0 1 2.239-.735c.84-.137 1.688-.21 2.539-.221l1.221-.017H150.56l1.236.017c.843.01 1.684.084 2.516.22a8.05 8.05 0 0 1 2.262.74 7.562 7.562 0 0 1 3.27 3.266c.352.702.597 1.452.724 2.226.141.843.219 1.694.236 2.548.003.383.003.793.003 1.202.011.506.011.988.011 1.474v28.253c0 .491 0 .97-.011 1.452 0 .439 0 .841-.005 1.255a17.202 17.202 0 0 1-.231 2.502 7.726 7.726 0 0 1-.731 2.255 7.405 7.405 0 0 1-1.375 1.87 7.326 7.326 0 0 1-1.895 1.38c-.711.36-1.472.61-2.258.743a17.02 17.02 0 0 1-2.53.22c-.397.01-.812.015-1.215.015l-1.468.002-137.666-.002Z"
                />
                <path
                  fill="#fff"
                  d="M33.532 27.78a6.667 6.667 0 0 1 3.19-5.604 6.874 6.874 0 0 0-5.403-2.913c-2.273-.238-4.477 1.356-5.636 1.356-1.18 0-2.964-1.333-4.885-1.293a7.21 7.21 0 0 0-3.514 1.045 7.185 7.185 0 0 0-2.541 2.637c-2.619 4.52-.666 11.164 1.842 14.818 1.255 1.79 2.722 3.788 4.64 3.717 1.879-.078 2.58-1.194 4.846-1.194 2.246 0 2.904 1.194 4.862 1.149 2.015-.033 3.285-1.797 4.495-3.603a14.787 14.787 0 0 0 2.056-4.175 6.47 6.47 0 0 1-2.873-2.377 6.443 6.443 0 0 1-1.08-3.562ZM29.834 16.86a6.566 6.566 0 0 0 1.509-4.713A6.718 6.718 0 0 0 27 14.387a6.256 6.256 0 0 0-1.548 4.539 5.563 5.563 0 0 0 4.382-2.066ZM57.268 37.014H50.86l-1.538 4.53h-2.715l6.07-16.764h2.82l6.07 16.765h-2.761l-1.538-4.532Zm-5.744-2.091h5.08l-2.505-7.354h-.07l-2.505 7.354ZM74.675 35.434c0 3.798-2.039 6.239-5.115 6.239a4.165 4.165 0 0 1-3.857-2.139h-.058v6.054h-2.516V29.322h2.435v2.033h.047a4.342 4.342 0 0 1 3.902-2.16c3.111 0 5.162 2.451 5.162 6.24Zm-2.586 0c0-2.474-1.283-4.101-3.24-4.101-1.922 0-3.215 1.66-3.215 4.101 0 2.463 1.293 4.112 3.216 4.112 1.956 0 3.239-1.615 3.239-4.112ZM88.165 35.434c0 3.798-2.039 6.239-5.115 6.239a4.164 4.164 0 0 1-3.856-2.139h-.059v6.054H76.62V29.322h2.436v2.033h.046a4.342 4.342 0 0 1 3.903-2.16c3.11 0 5.161 2.451 5.161 6.24Zm-2.586 0c0-2.474-1.282-4.101-3.239-4.101-1.922 0-3.215 1.66-3.215 4.101 0 2.463 1.293 4.112 3.215 4.112 1.957 0 3.239-1.615 3.239-4.112ZM97.08 36.874c.187 1.662 1.807 2.754 4.02 2.754 2.121 0 3.646-1.092 3.646-2.59 0-1.302-.92-2.081-3.099-2.615l-2.178-.524c-3.087-.743-4.52-2.183-4.52-4.519 0-2.892 2.527-4.88 6.117-4.88 3.552 0 5.987 1.988 6.069 4.88h-2.54c-.152-1.673-1.538-2.683-3.565-2.683s-3.414 1.022-3.414 2.51c0 1.184.886 1.882 3.053 2.416l1.852.453c3.449.813 4.883 2.195 4.883 4.647 0 3.137-2.506 5.101-6.49 5.101-3.729 0-6.246-1.918-6.409-4.95h2.576ZM112.833 26.43v2.892h2.331v1.987h-2.331v6.738c0 1.047.467 1.535 1.492 1.535.276-.005.552-.025.827-.058v1.974a6.93 6.93 0 0 1-1.397.117c-2.482 0-3.45-.93-3.45-3.3v-7.006h-1.782v-1.987h1.782V26.43h2.528ZM116.514 35.434c0-3.846 2.271-6.262 5.813-6.262 3.554 0 5.814 2.416 5.814 6.262 0 3.856-2.248 6.262-5.814 6.262-3.564 0-5.813-2.406-5.813-6.262Zm9.064 0c0-2.638-1.212-4.195-3.251-4.195-2.039 0-3.25 1.569-3.25 4.195 0 2.649 1.211 4.194 3.25 4.194 2.039 0 3.251-1.545 3.251-4.194ZM130.216 29.322h2.399v2.08h.058a2.923 2.923 0 0 1 2.949-2.208c.29 0 .579.03.862.094v2.347a3.527 3.527 0 0 0-1.131-.152 2.543 2.543 0 0 0-1.959.805 2.516 2.516 0 0 0-.662 2.007v7.25h-2.516V29.322ZM148.083 37.955c-.338 2.219-2.505 3.741-5.277 3.741-3.566 0-5.779-2.382-5.779-6.204 0-3.834 2.225-6.32 5.673-6.32 3.391 0 5.524 2.323 5.524 6.029v.86h-8.657v.15a3.177 3.177 0 0 0 1.974 3.23c.419.17.87.25 1.323.233a2.779 2.779 0 0 0 2.83-1.72h2.389Zm-8.504-3.648h6.127a2.936 2.936 0 0 0-1.821-2.882 2.952 2.952 0 0 0-1.185-.22 3.108 3.108 0 0 0-2.886 1.911 3.08 3.08 0 0 0-.235 1.19ZM51.209 12.162a3.582 3.582 0 0 1 2.85 1.104 3.562 3.562 0 0 1 .95 2.898c0 2.574-1.394 4.053-3.8 4.053H48.29v-8.055h2.918Zm-1.664 6.916h1.523a2.546 2.546 0 0 0 2.024-.816 2.532 2.532 0 0 0 .64-2.081 2.534 2.534 0 0 0-1.566-2.699 2.551 2.551 0 0 0-1.097-.182h-1.524v5.778ZM56.427 17.175a2.872 2.872 0 0 1 .737-2.211 2.889 2.889 0 0 1 3.306-.697 2.888 2.888 0 0 1 1.572 1.725c.127.38.173.783.134 1.183a2.872 2.872 0 0 1-.735 2.215 2.887 2.887 0 0 1-2.14.944 2.896 2.896 0 0 1-2.139-.944 2.879 2.879 0 0 1-.735-2.215Zm4.512 0c0-1.318-.594-2.088-1.635-2.088-1.046 0-1.634.77-1.634 2.088 0 1.328.588 2.093 1.634 2.093 1.041 0 1.635-.77 1.635-2.093ZM69.82 20.217H68.57l-1.26-4.477h-.095l-1.254 4.477h-1.237l-1.68-6.079h1.22l1.092 4.639h.09l1.254-4.639h1.154l1.253 4.639h.095l1.087-4.639h1.203l-1.674 6.079ZM72.906 14.138h1.158v.966h.09a1.821 1.821 0 0 1 1.82-1.083 1.989 1.989 0 0 1 1.6.624 1.976 1.976 0 0 1 .51 1.637v3.935H76.88v-3.634c0-.977-.425-1.463-1.315-1.463a1.402 1.402 0 0 0-1.39.948c-.065.19-.087.393-.066.593v3.556h-1.203v-6.079ZM80 11.765h1.204v8.452H80v-8.452ZM82.876 17.175a2.874 2.874 0 0 1 1.707-2.908 2.895 2.895 0 0 1 3.305.697 2.88 2.88 0 0 1 .738 2.21 2.872 2.872 0 0 1-.736 2.216 2.887 2.887 0 0 1-2.139.944 2.894 2.894 0 0 1-2.742-1.974 2.872 2.872 0 0 1-.133-1.185Zm4.512 0c0-1.318-.593-2.088-1.635-2.088-1.046 0-1.634.77-1.634 2.088 0 1.328.588 2.093 1.634 2.093 1.042 0 1.635-.77 1.635-2.093ZM89.893 18.498c0-1.094.817-1.725 2.267-1.815l1.651-.095v-.524c0-.643-.425-1.005-1.248-1.005-.671 0-1.137.246-1.27.676h-1.165c.123-1.045 1.108-1.714 2.49-1.714 1.53 0 2.391.758 2.391 2.043v4.153h-1.158v-.854h-.095a2.049 2.049 0 0 1-1.831.954 1.844 1.844 0 0 1-1.871-1.075 1.831 1.831 0 0 1-.161-.744Zm3.918-.52v-.508l-1.488.095c-.84.056-1.22.34-1.22.877 0 .547.475.865 1.13.865a1.442 1.442 0 0 0 1.427-.778 1.43 1.43 0 0 0 .151-.55ZM96.59 17.175c0-1.921.99-3.138 2.53-3.138a2.015 2.015 0 0 1 1.87 1.067h.09v-3.339h1.203v8.452h-1.153v-.96h-.095a2.111 2.111 0 0 1-1.914 1.06c-1.551 0-2.53-1.217-2.53-3.142Zm1.243 0c0 1.29.61 2.065 1.629 2.065 1.014 0 1.641-.787 1.641-2.06 0-1.267-.634-2.065-1.641-2.065-1.013 0-1.629.781-1.629 2.06ZM107.261 17.175a2.862 2.862 0 0 1 .738-2.211 2.88 2.88 0 0 1 2.137-.943 2.894 2.894 0 0 1 2.74 1.97c.127.381.173.784.134 1.184a2.869 2.869 0 0 1-.735 2.215 2.887 2.887 0 0 1-2.139.944 2.895 2.895 0 0 1-2.14-.944 2.877 2.877 0 0 1-.735-2.215Zm4.512 0c0-1.318-.594-2.088-1.635-2.088-1.046 0-1.634.77-1.634 2.088 0 1.328.588 2.093 1.634 2.093 1.041 0 1.635-.77 1.635-2.093ZM114.625 14.138h1.158v.966h.09a1.817 1.817 0 0 1 1.819-1.083 1.988 1.988 0 0 1 2.042 1.385c.088.283.111.582.068.876v3.935h-1.203v-3.634c0-.977-.426-1.463-1.316-1.463a1.402 1.402 0 0 0-1.39.948c-.064.19-.087.393-.065.593v3.556h-1.203v-6.079ZM126.6 12.624v1.542h1.321v1.01H126.6v3.126c0 .637.263.916.862.916.153 0 .306-.01.459-.028v1c-.216.038-.435.058-.655.06-1.338 0-1.871-.469-1.871-1.64v-3.434h-.967v-1.01h.967v-1.542h1.205ZM129.564 11.765h1.192v3.35h.096a1.868 1.868 0 0 1 1.858-1.09 2.015 2.015 0 0 1 1.584.642 1.995 1.995 0 0 1 .516 1.625v3.925h-1.205v-3.629c0-.97-.453-1.463-1.303-1.463a1.431 1.431 0 0 0-1.127.415 1.43 1.43 0 0 0-.408 1.127v3.55h-1.203v-8.452ZM141.825 18.576a2.471 2.471 0 0 1-2.642 1.758 2.772 2.772 0 0 1-2.721-1.953 2.758 2.758 0 0 1-.095-1.184 2.805 2.805 0 0 1 2.811-3.176c1.696 0 2.719 1.155 2.719 3.064v.419h-4.304v.067a1.605 1.605 0 0 0 1.623 1.741 1.465 1.465 0 0 0 1.451-.736h1.158Zm-4.232-1.96h3.079a1.466 1.466 0 0 0-1.501-1.574 1.563 1.563 0 0 0-1.464.969 1.551 1.551 0 0 0-.114.605Z"
                />
              </g>
              </svg>
            </a>
          </div>
        </div>
      )}
      <div className="chooseright-background">
        <svg ref={ellipseRef} className="chooseright-ellipse" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="480" cy="480" r="480" fill="#C8FDB0"/>
        </svg>

        <svg ref={ellipse2Ref} className="chooseright-ellipse2" viewBox="0 0 1447 1447" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="723.5" cy="723.5" r="723.5" fill="#BECAFF"/>
        </svg>

        <svg ref={chekRef} className="chooseright-chek" viewBox="0 0 631 632" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0927 314.891C-15.4149 258.067 -1.9048 205.71 54.6577 172.128L316.411 17.9427C372.908 -15.3832 425.513 -1.80899 458.83 54.6924L613.041 316.213C646.292 372.971 633.039 425.394 576.22 458.91L314.722 613.162C258.226 646.488 205.621 632.913 172.114 576.089L18.0927 314.891ZM253.552 440.799C266.896 444.242 281.39 440.044 292.259 430.804L454.944 287.189C462.709 280.433 466.815 273.006 468.669 265.82C473.769 246.058 460.16 226.67 440.401 221.571C427.057 218.128 415.518 222.541 403.027 233.826L276.077 352.445L249.606 300.174C244.349 289.784 237.073 282.979 226.039 280.132C206.28 275.034 185.304 286.319 180.139 306.338C177.754 315.577 178.466 323.425 184.037 334.717L223.479 414.151C229.936 427.314 239.439 437.157 253.552 440.799Z" fill="#FF93D7"/>
        <path d="M253.552 440.799C266.896 444.242 281.39 440.044 292.259 430.804L454.944 287.189C462.709 280.433 466.815 273.006 468.669 265.82C473.769 246.058 460.16 226.67 440.401 221.571C427.057 218.128 415.518 222.541 403.027 233.826L276.077 352.445L249.606 300.174C244.349 289.784 237.073 282.979 226.039 280.132C206.28 275.034 185.304 286.319 180.139 306.338C177.754 315.577 178.466 323.425 184.037 334.717L223.479 414.151C229.936 427.314 239.439 437.157 253.552 440.799Z" fill="#131618"/>
        </svg>

        </div>
      <div className="chooseright-h1">
        <AnimatedText page="chooseright" title="Choose Right!" />
      </div>
        <div ref={contentRef} className="chooseright-content">

        <div ref={infoRef} className="chooseright-info">
          <h4 className="chooseright-category">APP Design, Development</h4>
          <h2 className="chooseright-section-title">
            A Smart App for Informed Decisions
          </h2>
        </div>

        <div ref={partOneRef} className="chooseright-part chooseright-part-one">
          <div className="chooseright-part-content">
            <p className="chooseright-text">
              Every day, we face countless choices: where to go, what to cook, where to live. 
              Choose Right helps users compare options based on different criteria, making decision-making easier and more structured.
            </p>
          </div>
          <div ref={animationContainerRef} className="chooseright-part-image">
            {isMobile ? (
              <img src={chess} alt="ChooseRight App with Character" />
            ) : (
              <FrameSequenceAnimation
                baseImage={chooseRightPhone}
                images={yetyImages}
                speed={0.03}
                className="chooseright-frame-sequence"
                imageClassName="chooseright-animation-image"
              />
            )}
          </div>
        </div>

        

        <div ref={partThreeRef} className="chooseright-part chooseright-part-three">
          <div className="chooseright-part-content-h5">
            <h5 ref={partThreeH5Ref} className="animated-h5 chooseright-subtitle">
              {(() => {
                const text = "ChooseRight! turns decision-making into an intuitive comparison system where users can evaluate options based on key factors.";
                return text.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} style={{ display: "inline-block", marginRight: "0.3em" }}>
                    {word.split("").map((char, charIndex) => (
                      <span key={charIndex} style={{ display: "inline-block" }}>
                        {char}
                      </span>
                    ))}
                  </span>
                ));
              })()}
            </h5>
          </div>
        </div>

 
      </div>
      <div className="chooseright-video-section">
        <video 
          className="chooseright-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoChR} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="chooseright-circles-container">
        {circles.map((circle, index) => (
          <div
            key={circle.id}
            ref={(el) => (circlesRef.current[index] = el)}
            className="chooseright-circle"
            style={{
              left: circle.left,
              backgroundColor: circle.color,
            }}
          />
        ))}
      </div>
      <div ref={sectionWhiteRef} className="chooseright-section chooseright-section-white">
        <h2 className="chooseright-subtitle chooseright-subtitle-white">Privacy and Security</h2>
        <p className="chooseright-text chooseright-text-white">
          ChooseRight! is committed to user privacy. All data is stored locally on your device and never transmitted to external servers. The app works completely offline and does not collect any personal information.
        </p>
        <p className="chooseright-text chooseright-text-white">
          For more information about privacy, please see our{" "}
          <a href={CHOOSERIGHT_PRIVACY_URL} className="chooseright-link chooseright-link-white" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div ref={appPromoRef} className="chooseright-app-promo">
        <a
          href={APP_STORE.CHOOSERIGHT}
          target="_blank"
          rel="noopener noreferrer"
          className="chooseright-app-icon"
          aria-label="Choose Right on the App Store"
        >
          <img src={appIcon} alt="ChooseRight App Icon" />
        </a>
        <h5 className="chooseright-app-title">Make Better Decisions</h5>
        <p className="chooseright-app-text">
          We are the family and creators of this app. We created it for people who value their time, with love and care for every detail.
          </p>
          <p>
          We appreciate your feedback in the{" "}
          <a href={APP_STORE.CHOOSERIGHT} target="_blank" rel="noopener noreferrer" className="chooseright-link chooseright-link-white">
            App Store
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default ChooseRight;
