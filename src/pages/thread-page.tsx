import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ArrowLeft, MapPin, Calendar, User, Award, MessageCircle, Send } from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useApp } from '@/providers'
import { formatRelativeTime, generateId } from '@/lib/utils'

interface CommentFormData {
  content: string
}

const mockIssue = {
  id: '1',
  title: 'Water shortage in rural communities',
  description: 'Many families in our village have been without clean water for weeks. The main well has dried up and the nearest water source is 5km away. This is affecting children\'s health and education as they have to walk long distances to fetch water instead of attending school. We urgently need support to either repair the existing well or establish a new water source closer to our community.',
  author: 'Sarah Johnson',
  voiceLevel: 45,
  location: 'Nairobi, Kenya',
  createdAt: '2024-01-15T10:30:00Z',
  types: ['Water'],
  ngo: 'Water for Life Foundation'
}

const mockComments = [
  {
    id: '1',
    content: 'This is a critical issue that needs immediate attention. Have you contacted local government officials about this?',
    author: 'Michael Chen',
    voiceLevel: 32,
    createdAt: '2024-01-15T12:15:00Z'
  },
  {
    id: '2',
    content: 'I work with a water NGO and we might be able to help. Can you provide more details about the well depth and the number of families affected?',
    author: 'Dr. Amara Okafor',
    voiceLevel: 67,
    createdAt: '2024-01-15T14:20:00Z'
  },
  {
    id: '3',
    content: 'We faced a similar issue last year. Community fundraising helped us install a solar-powered water pump. Happy to share our experience.',
    author: 'Carlos Rodriguez',
    voiceLevel: 28,
    createdAt: '2024-01-15T16:45:00Z'
  }
]

export function ThreadPage() {
  const { id } = useParams()
  const { user } = useApp()
  const [comments, setComments] = useState(mockComments)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CommentFormData>()

  const onSubmit = async (data: CommentFormData) => {
    if (!user) return

    setLoading(true)

    try {
      // Mock API call - replace with real Supabase call
      await new Promise(resolve => setTimeout(resolve, 500))

      const newComment = {
        id: generateId(),
        content: data.content,
        author: `${user.firstName} ${user.lastName}`,
        voiceLevel: user.voiceLevel,
        createdAt: new Date().toISOString()
      }

      setComments(prev => [...prev, newComment])
      reset()
    } catch (error) {
      console.error('Failed to post comment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Button variant="ghost" asChild className="pl-0">
            <Link to="/issues">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Issues
            </Link>
          </Button>
        </motion.div>

        {/* Issue Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight">{mockIssue.title}</h1>
                
                {/* Issue Types */}
                <div className="flex flex-wrap gap-2">
                  {mockIssue.types.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Location and Date */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{mockIssue.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatRelativeTime(mockIssue.createdAt)}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{mockIssue.author}</div>
                      <div className="flex items-center text-sm text-primary">
                        <Award className="h-3 w-3 mr-1" />
                        <span>Voice Level {mockIssue.voiceLevel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>{comments.length} comments</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {mockIssue.description}
                </p>
              </div>

              {mockIssue.ngo && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="text-sm">
                    <span className="font-medium">Related Organization:</span> {mockIssue.ngo}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Discussion ({comments.length})</h2>

          {/* Comment Form */}
          {user ? (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="comment" className="text-sm font-medium">
                      Add your comment or suggestion
                    </label>
                    <Textarea
                      id="comment"
                      placeholder="Share your thoughts, suggestions, or offer help..."
                      rows={4}
                      {...register('content', { required: 'Comment is required' })}
                      error={!!errors.content}
                    />
                    {errors.content && (
                      <p className="text-sm text-destructive">{errors.content.message}</p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" loading={loading}>
                      <Send className="h-4 w-4 mr-2" />
                      Post Comment (+10 Voice Points)
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Sign in to join the discussion and help find solutions
                </p>
                <Button asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{comment.author}</span>
                          <div className="flex items-center text-xs text-primary">
                            <Award className="h-3 w-3 mr-1" />
                            <span>Level {comment.voiceLevel}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {formatRelativeTime(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    
  )
}