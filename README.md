<p align="center">
  <img src="https://img-c.udemycdn.com/course/750x422/4486772_7ce3_7.jpg" alt="FrostFoe Banner" width="100%" />
</p>

<p align="center">
  🔗 <strong>Live Preview:</strong> <a href="https://ff-nextjs-portfolio-02.netlify.app/" target="_blank">ff-nextjs-portfolio-02.netlify.app</a>
</p>

## 🧭 Project Structure

```bash
.
├── .gitignore
├── .modified
├── README.md
├── apphosting.yaml
├── components.json
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc.json
├── .idx/
│   └── dev.nix
├── content/
│   ├── pages/
│   │   ├── about.mdx
│   │   ├── contact.mdx
│   │   ├── home.mdx
│   │   ├── services.mdx
│   │   ├── tags.mdx
│   │   ├── work.mdx
│   │   └── writing.mdx
│   ├── work/
│   │   ├── cyber-security.mdx
│   │   ├── data-visualization.mdx
│   │   ├── dont_delete_project_alpha.mdx
│   │   ├── dont_delete_project_beta.mdx
│   │   ├── e-commerce-platform.mdx
│   │   ├── full-stack-security.mdx
│   │   ├── full-stack-security-auditing.mdx
│   │   ├── mobile-app-design.mdx
│   │   ├── nova-launcher.mdx
│   │   ├── quantum-dashboard.mdx
│   │   ├── sample-project.mdx
│   │   ├── stellar-suite.mdx
│   │   └── zenith-web.mdx
│   └── writing/
│       ├── ai-in-design.mdx
│       ├── bangla-language-support.mdx
│       ├── bangla-on-the-web.mdx
│       ├── component-driven-development.mdx
│       ├── crafting-ux.mdx
│       ├── creative-coding.mdx
│       ├── dark-mode-benefits.mdx
│       ├── demystifying-react-server-components.mdx
│       ├── developers-who-hack.mdx
│       ├── dont_delete_article_one.mdx
│       ├── dont_delete_article_two.mdx
│       ├── gen-ai-in-web-dev.mdx
│       ├── modern-web-animations.mdx
│       ├── sample-post.mdx
│       └── the-art-of-simplicity.mdx
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── error.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── product/[id]/page.tsx
│   │   ├── services/page.tsx
│   │   ├── sitemap.ts
│   │   ├── tags/page.tsx
│   │   ├── work/page.tsx
│   │   └── writing/
│   │       ├── [id]/page.tsx
│   │       ├── page.tsx
│   │       └── rss.xml/route.ts
│   ├── components/
│   │   ├── analytics/
│   │   │   ├── PostHogPageview.tsx
│   │   │   └── PostHogProvider.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── PageWrapper.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeSwitcher.tsx
│   │   ├── mdx/
│   │   │   ├── MdxComponents.tsx
│   │   │   └── MdxImage.tsx
│   │   ├── pages/
│   │   │   ├── about/AboutPageClient.tsx
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── ContactPageClient.tsx
│   │   │   ├── home/HomePageClient.tsx
│   │   │   ├── post/PostPageClient.tsx
│   │   │   ├── product/ProductPageClient.tsx
│   │   │   ├── services/ServicesPageClient.tsx
│   │   │   ├── tags/TagsPageClient.tsx
│   │   │   ├── work/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── WorkPageClient.tsx
│   │   │   └── writing/
│   │   │       ├── PostCard.tsx
│   │   │       └── WritingPageClient.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── tooltip.tsx
│   ├── content/
│   │   └── writing/
│   │       └── developers-who-hack-vs-developers-who-just-code.mdx
│   ├── data/
│   │   └── content/
│   │       ├── pages/
│   │       │   ├── about.mdx
│   │       │   ├── contact.mdx
│   │       │   ├── services.mdx
│   │       │   ├── tags.mdx
│   │       │   └── writing.mdx
│   │       ├── work/
│   │       │   ├── project-alpha.mdx
│   │       │   └── project-bravo.mdx
│   │       └── writing/
│   │           ├── post-alpha.mdx
│   │           └── post-bravo.mdx
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── content.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
```

<p align="center"><sub>© 2025 FrostFoe. All rights reserved.</sub></p>
