# 🖋️ Ayush Mandowara Tech Blog
**Insights, Experiments, and Engineering Notes**

[![Tested on Gemini](https://img.shields.io/badge/Tested_on-Gemini_CLI-8E44AD?style=for-the-badge&logo=google-gemini&logoColor=white)](https://github.com/google/gemini-cli)
[![Tech Stack: Gatsby](https://img.shields.io/badge/Gatsby-v5-663399?style=for-the-badge&logo=gatsby&logoColor=white)](https://www.gatsbyjs.com/)
[![UI: React](https://img.shields.io/badge/UI-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[![Live Blog](https://img.shields.io/badge/Live_Blog-Click_Here_to_Read-blue?style=for-the-badge&logo=netlify)](https://ayush-mandowara.in/blog)

**Ayush Mandowara Tech Blog** is a high-performance static site generated with Gatsby. It serves as a central hub for deep-dives into software engineering, AI agents, and product development experiments.

`✅ Static Site Generation | ✅ Gatsby v5 | ✅ MIT Licensed | ✅ JAMstack Architected`

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
- **Visual Engine (`src/`)**: Component-based UI using React and Gatsby's native optimization plugins (Images, SEO).
- **Node Lifecycle (`gatsby-node.js`)**: Surgical page creation and GraphQL schema customization for dynamic routing.
- **Delivery (`netlify.toml`)**: CI/CD configuration for automated deployments and redirects.

## 🚀 Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```
