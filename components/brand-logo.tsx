import Image from 'next/image';

export const BRAND_LOGO_SRC = '/brand/logo.png';

type BrandLogoProps = {
  variant?: 'header' | 'hero' | 'footer';
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = 'header',
  priority = false,
  className = '',
}: BrandLogoProps) {
  return (
    <Image
      src={BRAND_LOGO_SRC}
      alt="Motivation Aura — Mental Coach for the Saudi Athlete"
      width={1024}
      height={1024}
      quality={100}
      priority={priority}
      sizes={
        variant === 'hero'
          ? '(max-width: 640px) 320px, 640px'
          : variant === 'footer'
            ? '(max-width: 640px) 240px, 384px'
            : '(max-width: 640px) 200px, 352px'
      }
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
    />
  );
}
