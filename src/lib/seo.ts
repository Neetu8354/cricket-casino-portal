type SeoOptions = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  imageType?: string;
  keywords?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const inferImageType = (url: string): string => {
  const clean = url.split("?")[0].toLowerCase();
  if (clean.endsWith(".png")) return "image/png";
  if (clean.endsWith(".webp")) return "image/webp";
  if (clean.endsWith(".gif")) return "image/gif";
  if (clean.endsWith(".svg")) return "image/svg+xml";
  return "image/jpeg";
};

// Cache resolved image dimensions across route changes
const imageDimCache = new Map<string, { width: number; height: number }>();

const resolveImageDimensions = (
  url: string,
): Promise<{ width: number; height: number } | null> =>
  new Promise((resolve) => {
    if (imageDimCache.has(url)) {
      resolve(imageDimCache.get(url)!);
      return;
    }
    if (typeof Image === "undefined") {
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => {
      const dims = { width: img.naturalWidth, height: img.naturalHeight };
      imageDimCache.set(url, dims);
      resolve(dims);
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });

const ensureMeta = (sel: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(sel) as HTMLElement | null;
  if (!el) {
    el = document.createElement(sel.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
};

export const applySeo = ({
  title,
  description,
  canonical,
  image = "https://skyexchlogin.live/og-image.jpg",
  keywords,
  type = "website",
  jsonLd,
}: SeoOptions) => {
  document.title = title;
  ensureMeta('meta[name="description"]', { name: "description", content: description });
  ensureMeta('link[rel="canonical"]', { rel: "canonical", href: canonical });
  if (keywords) ensureMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
  ensureMeta('meta[property="og:title"]', { property: "og:title", content: title });
  ensureMeta('meta[property="og:description"]', { property: "og:description", content: description });
  ensureMeta('meta[property="og:type"]', { property: "og:type", content: type });
  ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
  ensureMeta('meta[property="og:image"]', { property: "og:image", content: image });
  ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
  ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

  // Manage page-scoped JSON-LD
  document.querySelectorAll('script[data-seo-jsonld="page"]').forEach((s) => s.remove());
  if (jsonLd) {
    const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    blocks.forEach((block) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "page";
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
    });
  }
};
