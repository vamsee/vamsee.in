import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://vamsee.in",
    title: "vamsee.in",
    description: "A blog where I write about my thoughts on reliability, antifragility, and technical leadership.",
    author: "Vamsee Kanakala",
    profile: "vamsee.jpg",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/vamsee" },
    { name: "x", url: "https://x.com/vamsee" },
    { name: "linkedin", url: "https://www.linkedin.com/in/vamsee-kanakala/" },
    { name: "mail", url: "mailto:hello@vamsee.in" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
