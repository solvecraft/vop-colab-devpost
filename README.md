# Voices on Poverty

A community-driven social impact platform that empowers people to report poverty-related issues, collaborate on solutions, and build stronger communities through shared voices and experiences.


## 🌟 Features

### Core Functionality
- **Issue Reporting**: Community members can report poverty-related issues with detailed descriptions and location data
- **Community Discussion**: Threaded discussions on each issue with commenting system
- **Voice Points System**: Gamified engagement system that rewards active participation
- **User Profiles**: Personal dashboards showing contributions and impact metrics
- **Issue Categories**: Organized by poverty types (Water, Housing, Education, Roads, etc.)
- **Location-based Filtering**: Browse issues by geographic location ( future stuff )

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, accessible interface built with Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Real-time Updates**: Live updates for comments and discussions
- **Search & Filter**: Advanced filtering by location, issue type, and keywords

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful, customizable icons

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Row Level Security (RLS)** - Secure data access
- **Real-time subscriptions** - Live updates
- **Authentication** - Email/password authentication

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for backend)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/voices-on-poverty.git
   cd voices-on-poverty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🗄️ Database Setup

### Supabase Configuration

1. **Create a new Supabase project** at [supabase.com](https://supabase.com)

2. **Run the database migrations** (SQL commands to create tables):

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  voice_level INTEGER DEFAULT 10,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create issues table
CREATE TABLE issues (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  poverty_types TEXT[] NOT NULL,
  country TEXT NOT NULL,
  province TEXT NOT NULL,
  city TEXT NOT NULL,
  ngo TEXT,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create comments table
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  issue_id UUID REFERENCES issues(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read all profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Anyone can read issues" ON issues FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create issues" ON issues FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update own issues" ON issues FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Anyone can read comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create comments" ON comments FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update own comments" ON comments FOR UPDATE USING (auth.uid() = author_id);
```

3. **Configure authentication** in Supabase dashboard:
   - Enable email/password authentication
   - Disable email confirmation for development
   - Set up redirect URLs

## 🎯 Usage

### For Community Members
1. **Sign up** for an account
2. **Browse issues** in your area or globally
3. **Report new issues** with detailed descriptions
4. **Engage in discussions** by commenting on issues
5. **Earn Voice Points** through active participation
6. **Track your impact** via your profile dashboard

### For Organizations/NGOs
1. **Monitor issues** in your operational areas
2. **Engage with communities** through comments
3. **Identify collaboration opportunities**
4. **Share resources and solutions**

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style Guidelines
- Use TypeScript for all new code
- Follow existing naming conventions
- Add comments for complex logic
- Ensure responsive design
- Test on multiple devices/browsers

### Areas for Contribution
- 🐛 Bug fixes
- ✨ New features
- 🎨 UI/UX improvements
- 📚 Documentation
- 🌐 Internationalization
- ♿ Accessibility improvements
- 🔧 Performance optimizations

## 🚀 Deployment

### Netlify Deployment

This project is configured for seamless deployment on Netlify.

#### Build Issues Fixed

During the deployment process, we addressed several issues:

1. **Cross-Platform Build Commands**
   - Added cross-env for consistent environment variable handling across platforms
   - Updated build script to prevent CI failures on warnings: `"build": "cross-env CI=false vite build"`

2. **ESLint Configuration**
   - Installed missing TypeScript ESLint dependencies
   - Fixed ESLint configuration import paths

3. **Proper Redirects for SPA**
   - Added Netlify configuration to handle client-side routing

#### Deployment Options

##### Option 1: Continuous Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

##### Option 2: Manual Deployment

1. Build your project locally: `npm run build`
2. Drag and drop the `dist` folder to Netlify's dashboard
3. Your site will be live in seconds

##### Option 3: Netlify CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy the dist folder
netlify deploy --prod --dir=dist
````

## 🌍 Roadmap

### Phase 1 (Current)
- ✅ Core issue reporting functionality
- ✅ User authentication and profiles
- ✅ Comment system
- ✅ Voice Points gamification
- ✅ Responsive design

### Phase 2 (Upcoming)
- 🔄 Real-time notifications
- 🔄 Advanced search and filtering
- 🔄 Image uploads for issues
- 🔄 Email notifications
- 🔄 Mobile app (React Native)

### Phase 3 (Future)
- 📋 Solution tracking system
- 📊 Analytics dashboard
- 🌐 Multi-language support
- 🤖 AI-powered issue categorization
- 📱 Progressive Web App (PWA)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Community Contributors** - Thank you to everyone who reports issues and engages in discussions
- **Open Source Libraries** - Built on the shoulders of amazing open source projects
- **Supabase** - For providing an excellent backend-as-a-service platform
- **Pexels** - For providing beautiful stock photos

## 📞 Support


### Community Guidelines
- Be respectful and constructive
- Focus on solutions, not just problems
- Verify information before sharing
- Respect privacy and sensitive information
- Help others learn and grow

---

**Made with ❤️ for social impact**

*Empowering communities to raise awareness about poverty issues and collaborate on meaningful solutions through shared voices and experiences.*
