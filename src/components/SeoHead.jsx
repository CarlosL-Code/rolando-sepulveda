import { useContext, useEffect } from 'react';
import { SeoContext } from './seoContext';

const SITE_URL = 'https://www.contabilidadrs.cl';

function setMetaTag(selector, attribute, value, createTag) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

const SeoHead = ({ title, description, canonicalPath = '/', ogType = 'website', noindex = false }) => {
  const onSeoUpdate = useContext(SeoContext);
  const normalizedPath = canonicalPath === '/' ? '/' : `/${canonicalPath.replace(/^\/+|\/+$/g, '')}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;

  if (onSeoUpdate) {
    onSeoUpdate({ title, description, canonicalUrl, ogType, noindex });
  }

  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag('meta[property="og:title"]', 'content', title, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        return meta;
      });
    }

    if (description !== undefined) {
      setMetaTag('meta[name="description"]', 'content', description, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        return meta;
      });
      setMetaTag('meta[property="og:description"]', 'content', description, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        return meta;
      });
    }

    setMetaTag('link[rel="canonical"]', 'href', canonicalUrl, () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    });

    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    });

    setMetaTag('meta[property="og:type"]', 'content', ogType, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      return meta;
    });

    const robotsTag = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      setMetaTag('meta[name="robots"]', 'content', 'noindex, follow', () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'robots');
        return meta;
      });
    } else if (robotsTag) {
      robotsTag.remove();
    }
  }, [title, description, canonicalUrl, ogType, noindex]);

  return null;
};

export default SeoHead;
