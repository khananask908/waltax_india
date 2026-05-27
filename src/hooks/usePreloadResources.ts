import { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'image' | 'font' | 'script' | 'style';
  type?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
}

export const usePreloadResources = (resources: PreloadResource[]) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [resources]);
};

// Critical resources to preload
export const criticalResources: PreloadResource[] = [
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lexend:wght@500;600;700&display=swap',
    as: 'style'
  },
  {
    href: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    as: 'image'
  }
];