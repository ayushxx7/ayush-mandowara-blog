# 🖋️ Ayush Mandowara Tech Blog
**Insights, Experiments, and Engineering Notes**

[![Tested on Gemini](https://img.shields.io/badge/Tested_on-Gemini_CLI-8E44AD?style=for-the-badge&logo=google-gemini&logoColor=white)](https://github.com/google/gemini-cli)
[![Live Blog](https://img.shields.io/badge/Live_Blog-Click_Here_to_Read-blue?style=for-the-badge&logo=netlify)](https://ayush-mandowara.in/blog)

**Ayush Mandowara Tech Blog** is a high-performance static site generated with Gatsby. It serves as a central hub for deep-dives into software engineering, AI agents, and product development experiments.

`✅ Static Site Generation | ✅ Gatsby v5 | ✅ MIT Licensed | ✅ JAMstack Architected`

## 🎬 UI Preview
![UI Preview](showcase/ui_preview.svg)

## 🏗 Architecture
The blog uses a JAMstack architecture (JavaScript, APIs, and Markup) for sub-second page loads and robust static delivery.

```mermaid
graph TD
    A[Markdown Content] --> B[Gatsby Node]
    C[Gatsby Components] --> B
    B --> D[GraphQL Data Layer]
    D --> E[Static Site Generation]
    E --> F[Netlify Edge]
    G[User Browser] --> F
```

### Core Components
- **Content Layer (`content/`)**: Markdown-based articles and assets managed with Frontmatter metadata.
- **Visual Engine (`src/`)**: Component-based UI using React and Gatsby's native optimization plugins.
- **Delivery**: Netlify CI/CD with automated build pipelines and sub-second edge distribution.

## 🚀 Quick Start
```bash
npm install
npm run dev
```

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
*Built with ❤️ for Technical Storytelling.*
