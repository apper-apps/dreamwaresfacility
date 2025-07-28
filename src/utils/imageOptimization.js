/**
 * Generates responsive image srcSet for different screen sizes
 */
export function generateSrcSet(baseUrl, sizes = [320, 640, 960, 1280]) {
  return sizes
    .map(size => `${baseUrl}?w=${size}&q=75 ${size}w`)
    .join(', ');
}

/**
 * Generates WebP version of image URL
 */
export function getWebPUrl(imageUrl) {
  if (!imageUrl) return null;
  
  // For external URLs like Unsplash, append format parameter
  if (imageUrl.includes('unsplash.com')) {
    return `${imageUrl}&fm=webp`;
  }
  
  // For local images, replace extension
  return imageUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Preloads critical images
 */
export function preloadImage(src, as = 'image') {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = src;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

/**
 * Preloads multiple images
 */
export async function preloadImages(urls) {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
}

/**
 * Creates optimized image configuration
 */
export function createImageConfig(src, options = {}) {
  const {
    width,
    height,
    quality = 75,
    format = 'auto',
    responsive = true
  } = options;

  let optimizedSrc = src;
  
  // Add query parameters for optimization
  const params = new URLSearchParams();
  if (width) params.set('w', width);
  if (height) params.set('h', height);
  if (quality !== 75) params.set('q', quality);
  if (format !== 'auto') params.set('fm', format);
  
  if (params.toString()) {
    optimizedSrc += (src.includes('?') ? '&' : '?') + params.toString();
  }

  return {
    src: optimizedSrc,
    webpSrc: getWebPUrl(optimizedSrc),
    srcSet: responsive ? generateSrcSet(src) : undefined,
  };
}