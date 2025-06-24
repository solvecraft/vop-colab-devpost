import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  MessageCircle,
  Heart,
  Globe,
  Shield,
  Lightbulb,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  PlusCircle,
  User,
} from 'lucide-react'
import { useAuth } from '../auth-context'

export function HomePage() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  const stats = [
    { number: '10K+', label: 'Community Voices', icon: Users },
    { number: '500+', label: 'Issues Shared', icon: MessageCircle },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '1000+', label: 'Solutions Posted', icon: Lightbulb },
  ]

  const steps = [
    {
      title: 'Share Your Story',
      description:
        'Document poverty-related challenges in your community with detailed posts about water, housing, education, or infrastructure issues.',
      icon: '📝',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Connect & Discuss',
      description:
        'Engage with others facing similar challenges, share experiences, and participate in meaningful conversations.',
      icon: '🤝',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Build Solutions',
      description:
        'Collaborate on practical solutions, earn Voice Points for contributions, and help create lasting change.',
      icon: '💡',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const values = [
    {
      title: 'Dignity',
      description:
        'Every voice matters. We treat all community members with respect and recognize the expertise that comes from lived experience.',
      icon: Heart,
    },
    {
      title: 'Transparency',
      description:
        'Open dialogue about challenges and solutions, with clear information about how the platform works.',
      icon: Shield,
    },
    {
      title: 'Collaboration',
      description:
        'Breaking down silos between communities, organizations, and individuals to work together.',
      icon: Users,
    },
    {
      title: 'Sustainability',
      description:
        'Focusing on long-term, community-led solutions rather than short-term fixes.',
      icon: Target,
    },
  ]

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      avatar: '👩‍💼',
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Marcus Johnson',
      role: 'Community Manager',
      avatar: '👨‍🤝‍👨',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Dr. Amara Okafor',
      role: 'Impact Advisor',
      avatar: '👩‍🎓',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Alex Rivera',
      role: 'Technical Lead',
      avatar: '👨‍💻',
      color: 'from-purple-500 to-violet-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">🎤</span>
              </div>
              <h1 className="text-xl font-bold text-indigo-600">Voices on Poverty</h1>
            </div>
            <nav className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="text-indigo-600 font-medium">
                Home
              </Link>
              <Link to="/issues" className="text-gray-600 hover:text-indigo-600 font-medium">
                Issues
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-indigo-600 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-indigo-600 font-medium">
                Contact
              </Link>
              <Link
                to="/profile"
                className="ml-4 flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                title="Profile"
              >
                <User className="w-5 h-5 mr-2" />
                Profile
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="ml-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <span className="text-4xl">🌍</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Amplifying Voices, <br />
            <span className="text-yellow-300">Building Solutions</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Empowering communities worldwide to share their stories, connect with others,
            and collaborate on meaningful solutions to poverty-related challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/issues"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore Issues
            </Link>
            <Link
              to="/new-post"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center justify-center"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Report an Issue
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Voices on Poverty exists to amplify the stories of those experiencing poverty and create
                a global community dedicated to understanding, addressing, and solving poverty-related challenges.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe that real change begins when communities come together to share their experiences,
                insights, and solutions. Our platform bridges the gap between those experiencing poverty and
                those who want to help.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community-Driven Impact</h3>
                  <p className="text-gray-600">Solutions that come from within communities themselves</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-8xl relative z-10 filter drop-shadow-lg">🤝</span>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">💪</span>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xl">❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community in three simple steps and start making a difference today
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do in our community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to create positive change
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-3xl">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you're sharing your story, offering solutions, or supporting others,
            there's a place for you in the Voices on Poverty community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/new-post"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Report an Issue
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">contact@voicesonpoverty.org</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Global Community Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">🎤</span>
            </div>
            <span className="text-lg font-bold">Voices on Poverty</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering communities to create lasting change through shared voices and collaborative solutions.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/guidelines" className="hover:text-white">
              Community Guidelines
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Voices on Poverty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}