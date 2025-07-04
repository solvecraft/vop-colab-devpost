import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/main-layout'
import { HomePage } from './pages/home-page'
import { IssuesPage } from './pages/issues-page'
import { LoginPage } from './pages/login-page'
import { NewPostPage } from './pages/new-post-page'
import { ThreadPage } from './pages/thread-page'
import { ProfilePage } from './pages/profile-page'
import { AboutPage } from './pages/about-page'
import { ContactPage } from './pages/contact-page'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-post" element={<NewPostPage />} />
        <Route path="/threads/:id" element={<ThreadPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App