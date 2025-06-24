import { Link } from 'react-router-dom'
import { User, Home, FileText, Info, Mail, LogOut, LogIn } from 'lucide-react'
import { useAuth } from '../auth-context'

export function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Left */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white text-2xl">🎤</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Voices on Poverty
              </h1>
              <span className="text-xs text-gray-500 font-medium">Amplifying Stories</span>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Home</span>
            </Link>
            <Link 
              to="/issues" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 group"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Issues</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 group"
            >
              <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>About</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Contact</span>
            </Link>
          </nav>

          {/* Profile & Auth Section - Right */}
          <div className="flex items-center space-x-3">
            <Link
              to="/profile"
              className="flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              title="Profile"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
            
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}