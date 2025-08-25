# 🚀 Airbyte Embedded Widget Demo

**Experience the power of Airbyte's Embedded Widget in action!** 

This demo showcases how to integrate Airbyte's data movement capabilities directly into your application using three different frontend approaches: Vanilla JavaScript, React, and Next.js.

## ⚡ 2-Minute Quick Start

### 🔧 Option 1: Fastest Demo (Vanilla JS)
```bash
# Clone and start
git clone https://github.com/michel-tricot/embedded-test.git
cd embedded-test/server
npm install

# Set demo password (required)
echo "SONAR_WEBAPP_PASSWORD=demopassword" > .env
echo "SONAR_ALLOWED_ORIGIN=http://localhost:3000" >> .env

# Start demo
npm run dev
```
**→ Open http://localhost:3000**  
**→ Password: `demopassword`**

### 🎯 Option 2: Modern React Experience  
```bash
# After setting up server above, in a new terminal:
cd reactjs
npm install && npm run dev
```
**→ Open http://localhost:3001**

### 🚀 Option 3: Next.js Production-Ready
```bash
# After setting up server above, in a new terminal:
cd nextjs  
npm install && npm run dev
```
**→ Open http://localhost:3002**

## 🎮 Demo Flow

1. **🔐 Enter Demo Password** - Protects the demo from public access
2. **👤 Create User Account** - Simple email-based authentication  
3. **🔗 Connect Your Data** - Launch the Airbyte Embedded Widget

![Demo Preview](https://via.placeholder.com/600x400?text=Demo+Preview)

## 🏗️ What You Get

| **Feature** | **Vanilla JS** | **React** | **Next.js** |
|-------------|----------------|-----------|-------------|
| 📦 Setup Time | 30 seconds | 1 minute | 1 minute |
| 🎨 Modern UI | ✅ | ✅ | ✅ |
| 🌙 Dark/Light Theme | ✅ | ✅ | ✅ |
| 📱 Mobile Friendly | ✅ | ✅ | ✅ |
| ⚡ Performance | Fast | Fast | Fastest |
| 🔍 SEO Ready | Basic | No | Yes |
| 📈 Production Ready | Good | Better | Best |

## 🎯 For Airbyte Users

### Get Your Credentials
1. **Contact Airbyte**: Reach out to [michel@airbyte.io](mailto:michel@airbyte.io) or [teo@airbyte.io](mailto:teo@airbyte.io) for Embedded access
2. **Get Your Keys**: You'll receive your organization ID, client ID, and client secret
3. **Update Config**: Add them to your `.env` file:

```bash
# server/.env
SONAR_WEBAPP_PASSWORD=your_demo_password
SONAR_ALLOWED_ORIGIN=http://localhost:3000
SONAR_AIRBYTE_ORGANIZATION_ID=your_organization_id
SONAR_AIRBYTE_CLIENT_ID=your_client_id
SONAR_AIRBYTE_CLIENT_SECRET=your_client_secret
```

## 🛠️ Technical Details

### Prerequisites
- **Node.js 18+** (uses native fetch API)
- **Modern browser** (Chrome, Firefox, Safari, Edge)

### Project Structure
```
📁 embedded-test/
├── 🔧 server/           # Express.js backend + vanilla demo
├── ⚛️  reactjs/          # Create React App version  
├── 🚀 nextjs/           # Next.js production version
└── 📖 README.md         # You are here!
```

### Architecture
- **Backend**: Express.js with SQLite database
- **Authentication**: Two-layer (demo password + user email)
- **Widget Integration**: Official Airbyte Embedded Widget
- **Styling**: CSS custom properties (CSS variables)
- **State Management**: Local state with persistence

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

Deploy both server and React app to Vercel with one-click buttons:

#### 1️⃣ Deploy Server First
[![Deploy Server](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/michel-tricot/embedded-test&project-name=airbyte-demo-server&root-directory=server)

**Manual server deploy:**
```bash
cd server && npx vercel
```

#### 2️⃣ Deploy React App  
[![Deploy React App](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/michel-tricot/embedded-test&project-name=airbyte-demo-react&root-directory=reactjs)

**Manual React deploy:**
```bash
cd reactjs && npx vercel
```

### ⚙️ Environment Configuration

#### Server Environment Variables (in Vercel dashboard):
```bash
SONAR_WEBAPP_PASSWORD=demopassword
SONAR_ALLOWED_ORIGIN=https://your-react-app.vercel.app
SONAR_AIRBYTE_ORGANIZATION_ID=your_org_id
SONAR_AIRBYTE_CLIENT_ID=your_client_id
SONAR_AIRBYTE_CLIENT_SECRET=your_client_secret
```

#### React Environment Variables (in Vercel dashboard):
```bash
REACT_APP_API_URL=https://your-server-app.vercel.app/api
```

### 📚 Detailed Guides
- 🔧 **Server deployment:** [`server/DEPLOY.md`](server/DEPLOY.md)
- ⚛️ **React deployment:** [`reactjs/DEPLOY.md`](reactjs/DEPLOY.md)

### 🎯 Alternative Deployments

#### Next.js → Vercel
```bash
cd nextjs && npx vercel
# Set API_URL in next.config.js to your deployed server
```

#### Vanilla JS → Static Hosting
- Deploy `server/static/` to any static host
- Server must be deployed separately for API functionality

## 🔧 Troubleshooting

### Common Issues

**Q: Widget won't open**  
A: Check browser console. Ensure Airbyte script loads and your token is valid.

**Q: "Password required" error**  
A: Make sure `SONAR_WEBAPP_PASSWORD` is set in `server/.env`

**Q: CORS errors**  
A: Update `SONAR_ALLOWED_ORIGIN` to match your frontend URL

**Q: Database errors**  
A: Delete `users.db` file to reset. It will be recreated automatically.

## 🤝 Contributing

Found a bug? Want to add a feature? PRs welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Technical Issues**: Open a GitHub issue
- **Airbyte Embedded Access**: Contact [michel@airbyte.io](mailto:michel@airbyte.io)
- **General Questions**: Check the [Airbyte Documentation](https://docs.airbyte.com)

---

**🎉 Happy data moving!** Built with ❤️ by the Airbyte team.
