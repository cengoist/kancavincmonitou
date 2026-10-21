"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
  className?: string;
};

/**
 * Sessiz, döngülü video. Yalnızca ekranda göründüğünde oynar (pil + veri tasarrufu).
 * "Hareketi azalt" tercihi açıksa sadece poster gösterilir.
 */
export function AutoVideo({ src, poster, width, height, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      width={width}
      height={height}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      disablePictureInPicture
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
