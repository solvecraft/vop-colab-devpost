import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, MessageCircle, Award, TrendingUp } from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Users, label: 'Community Members', value: '2,500+' },
  { icon: MessageCircle, label: 'Issues Reported', value: '1,200+' },
  { icon: Award, label: 'Voice Points Earned', value: '15,000+' },
  { icon: TrendingUp, label: 'Solutions Found', value: '300+' },
] as const

const mockIssues = [
  {
    id: '1',
    title: 'Water shortage in rural communities',
    description: 'Many families in our village have been without clean water for weeks...',
    author: 'Sarah Johnson',
    voiceLevel: 45,
    location: 'Nairobi, Kenya',
    timeAgo: '2 hours ago',
    comments: 12
  },
  {
    id: '2',
    title: 'Poor housing conditions affecting children',
    description: 'The housing situation in our area is deteriorating rapidly...',
    author: 'Michael Chen',
    voiceLevel: 32,
    location: 'Manila, Philippines',
    timeAgo: '4 hours ago',
    comments: 8
  },
  {
    id: '3',
    title: 'Limited access to quality education',
    description: 'Schools in our district lack basic resources and qualified teachers...',
    author: 'Amara Okafor',
    voiceLevel: 67,
    location: 'Lagos, Nigeria',
    timeAgo: '6 hours ago',
    comments: 15
  }
]

export function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Voices on Poverty
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Empowering communities to raise awareness about poverty issues and 
              collaborate on meaningful solutions through shared voices and experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/issues">
                  Explore Issues
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/new-post">Report an Issue</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Recent Issues</h2>
                <p className="text-muted-foreground">
                  Latest poverty issues reported by our community
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/issues">
                  View All Issues
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockIssues.map((issue, index) => (
                <motion.div
                  key={issue.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {issue.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {issue.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{issue.location}</span>
                    <span>{issue.timeAgo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{issue.author}</span>
                      <span className="text-primary text-xs">Level {issue.voiceLevel}</span>
                    </div>
                    <span className="text-xs">{issue.comments} comments</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every voice matters in the fight against poverty. Share your experiences, 
              contribute solutions, and help build stronger communities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/login">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}