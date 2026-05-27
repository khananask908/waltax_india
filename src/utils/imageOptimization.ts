// Image optimization utilities
export const optimizeImageUrl = (url: string, width?: number, height?: number, quality = 80) => {
  // For Pexels images, add optimization parameters
  if (url.includes('pexels.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('auto', 'compress');
    params.append('cs', 'tinysrgb');
    params.append('fit', 'crop');
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  return url;
};

// Lazy loading image component
export const createLazyImage = (src: string, alt: string, className?: string) => {
  return {
    src: optimizeImageUrl(src, 800, 600),
    alt,
    className,
    loading: 'lazy' as const,
    decoding: 'async' as const
  };
};

// Preload critical images
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};