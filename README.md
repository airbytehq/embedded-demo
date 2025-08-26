# 🚀 Airbyte Embedded Widget Demo

**Experience the power of Airbyte's Embedded Widget in action!** 

This is a Turborepo-powered monorepo containing the Airbyte Embedded Widget demo with multiple frontend implementations: 
- Vanilla JavaScript + Server
- React
- Next.js

## ⚡ 2-Minute Quick Start

### 🔧 Setup (All Apps)
```bash
# Clone and install dependencies for all apps
git clone https://github.com/michel-tricot/embedded-test.git
cd embedded-test
npm install

# Configure server environment
cd apps/server
cp .env.example .env
# Edit .env with your credentials
```

### 🚀 Run All Apps
```bash
# From root directory - starts all apps simultaneously
npm run dev
```
**→ Server & Vanilla JS: http://localhost:3000**  
**→ Next.js: http://localhost:3001**  
**→ React: http://localhost:3002**

### 🎯 Run Individual Apps
```bash
# Run only the server
npm run dev --filter=@airbyte-demo/server

# Run only React app  
npm run dev --filter=@airbyte-demo/reactjs

# Run only Next.js app
npm run dev --filter=@airbyte-demo/nextjs
```

## 🎮 Demo Flow

1. **🔐 Enter Demo Password**: Protects the demo from public access
2. **👤 Create User Account**: Simple email-based authentication  
3. **🔗 Connect Your Data**: Launch the Airbyte Embedded Widget

## Get Your Credentials
1. **Contact Airbyte**: Reach out to [michel@airbyte.io](mailto:michel@airbyte.io) or [teo@airbyte.io](mailto:teo@airbyte.io) for Embedded access
2. **Get Your Keys**: You'll receive your organization ID, client ID, and client secret
3. **Update Config**: Add them to your `.env` file:

```bash
# server/.env
SONAR_AIRBYTE_WEBAPP_PASSWORD=your_demo_password
SONAR_AIRBYTE_ALLOWED_ORIGIN=http://localhost:3000
SONAR_AIRBYTE_ORGANIZATION_ID=your_organization_id
SONAR_AIRBYTE_CLIENT_ID=your_client_id
SONAR_AIRBYTE_CLIENT_SECRET=your_client_secret
```

## 🛠️ Technical Details

### Prerequisites
- **Node.js 18+** (uses native fetch API)
- **Modern browser** (Chrome, Firefox, Safari, Edge)

### Turborepo Structure
```
📁 embedded-test/
├── 📁 apps/
│   ├── 🔧 server/           # Express.js backend (@airbyte-demo/server)
│   ├── ⚛️  reactjs/          # React app (@airbyte-demo/reactjs)  
│   └── 🚀 nextjs/           # Next.js app (@airbyte-demo/nextjs)
├── 📁 packages/             # Shared packages (empty for now)
├── 📄 package.json          # Root workspace configuration
├── 📄 turbo.json            # Turborepo configuration
└── 📖 README.md             # You are here!
```

### Available Commands
- `npm run dev` - Start all apps in development
- `npm run build` - Build all apps for production
- `npm run lint` - Lint all apps
- `npm run clean` - Clean build artifacts and node_modules
- `npm run test` - Run tests across all apps

## 🎨 Customization Examples

### Change Theme Colors
```css
/* In any version's CSS file */
:root {
  --accent-primary: #your-brand-color;
  --bg-primary: #your-background;
}
```

### Add Your Logo
```javascript
// Replace octavia-sonar.png with your logo
<img src="/your-logo.png" alt="Your Brand" className="logo" />
```

## 🚀 Deployment Guide

### 🌐 Complete Vercel Deployment (Recommended)

Deploy the server with one-click button (includes environment variable setup):

[![Deploy Server](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/michel-tricot/embedded-test&project-name=airbyte-demo-server&root-directory=apps/server&env=SONAR_AIRBYTE_WEBAPP_PASSWORD,SONAR_AIRBYTE_ALLOWED_ORIGIN,SONAR_AIRBYTE_ORGANIZATION_ID,SONAR_AIRBYTE_CLIENT_ID,SONAR_AIRBYTE_CLIENT_SECRET,REDIS_URL&envDescription=Required%20environment%20variables%20for%20Airbyte%20Embedded%20Demo&envLink=https://github.com/michel-tricot/embedded-test/blob/main/apps/server/.env.example)

**Manual server deploy:**
```bash
cd apps/server && npx vercel
```

### ⚙️ Environment Configuration

#### Required Environment Variables:

**Airbyte Configuration:**
```bash
SONAR_AIRBYTE_WEBAPP_PASSWORD=your_demo_password
SONAR_AIRBYTE_ALLOWED_ORIGIN=https://your-deployed-app.vercel.app
SONAR_AIRBYTE_ORGANIZATION_ID=your_organization_id
SONAR_AIRBYTE_CLIENT_ID=your_client_id
SONAR_AIRBYTE_CLIENT_SECRET=your_client_secret
```

**Optional Services:**
```bash
# Redis for user session persistence (optional - falls back to local filesystem)
REDIS_URL=redis://your-redis-url
```

> **💡 Tip**: The one-click Vercel button above will prompt you to enter all these variables during deployment!

### 📚 Detailed Guides
- 🔧 **Server documentation:** [`apps/server/README.md`](apps/server/README.md)
- ⚛️ **React documentation:** [`apps/nextjs/README.md`](apps/nextjs/README.md)
- 🚀 **Next.js documentation:** [`apps/reactjs/README.md`](apps/reactjs/README.md)

## 🤝 Contributing

Found a bug? Want to add a feature? PRs welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Technical Issues**: Open a GitHub issue
- **Airbyte Embedded Access**: Reach out to [michel@airbyte.io](mailto:michel@airbyte.io) or [teo@airbyte.io](mailto:teo@airbyte.io)
- **General Questions**: Check the [Airbyte Documentation](https://docs.airbyte.com)

---

**🎉 Happy data moving!** Built with ❤️ by the Airbyte team.

