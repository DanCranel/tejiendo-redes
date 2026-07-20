"use client";

import { useEffect } from "react";

const POSTS = [
  "https://www.instagram.com/p/DVNS2jnDgPV/",
  "https://www.instagram.com/p/DUE6oBzjAcd/",
  "https://www.instagram.com/p/DTzE5onDFeB/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbeds() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-6">
      {POSTS.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: 0,
            borderRadius: 12,
            margin: 0,
            maxWidth: 328,
            minWidth: 300,
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}
