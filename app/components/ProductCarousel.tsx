"use client";

import {useRef, useState, type TouchEvent} from "react";
import styles from "./ProductCarousel.module.css";

type ProductImage = {
  src: string;
  alt: string;
};

type ProductCarouselProps = {
  images?: ProductImage[];
  productName: string;
  tag: string;
  index: number;
};

export function ProductCarousel({
  images = [],
  productName,
  tag,
  index,
}: ProductCarouselProps) {
  const validImages = images.filter((image) => image?.src);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = validImages.length;
  const hasPhotos = total > 0;
  const hasMultiplePhotos = total > 1;

  const move = (direction: number) => {
    if (total === 0) return;
    setActiveIndex((current) => (current + direction + total) % total);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!hasMultiplePhotos || touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    move(distance > 0 ? -1 : 1);
  };

  return (
    <div
      className={`product-visual mattress-${(index % 4) + 1} ${hasPhotos ? styles.hasPhoto : ""}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="product-tag">{tag}</span>

      {hasPhotos ? (
        <div
          className={styles.carousel}
          aria-roledescription="carousel"
          aria-label={`${productName}產品照片`}
        >
          <img
            className={styles.photo}
            src={validImages[activeIndex].src}
            alt={validImages[activeIndex].alt || productName}
            loading="lazy"
            draggable={false}
          />

          {hasMultiplePhotos ? (
            <>
              <button
                className={`${styles.arrow} ${styles.left}`}
                type="button"
                aria-label="上一張照片"
                onClick={() => move(-1)}
              >
                ‹
              </button>
              <button
                className={`${styles.arrow} ${styles.right}`}
                type="button"
                aria-label="下一張照片"
                onClick={() => move(1)}
              >
                ›
              </button>
              <div className={styles.dots} aria-label={`第 ${activeIndex + 1} 張，共 ${total} 張`}>
                {validImages.map((image, imageIndex) => (
                  <button
                    key={`${image.src}-${imageIndex}`}
                    type="button"
                    className={`${styles.dot} ${imageIndex === activeIndex ? styles.activeDot : ""}`}
                    aria-label={`查看第 ${imageIndex + 1} 張照片`}
                    aria-current={imageIndex === activeIndex ? "true" : undefined}
                    onClick={() => setActiveIndex(imageIndex)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className="mini-mattress" aria-hidden="true">
          <span /><span /><span />
        </div>
      )}
    </div>
  );
}
