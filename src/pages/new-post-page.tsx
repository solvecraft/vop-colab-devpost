import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FileText, MapPin, Tag, Building } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useApp } from '@/providers'
import { POVERTY_TYPES } from '@/types/database'
import { generateId } from '@/lib/utils'

interface NewPostFormData {
  title: string
  description: string
  povertyTypes: string[]
  country: string
  province: string
  city: string
  ngo?: string
}

export function NewPostPage() {
  const navigate = useNavigate()
  const { user } = useApp()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const { register, handleSubmit, formState: { errors } } = useForm<NewPostFormData>()

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const onSubmit = async (data: NewPostFormData) => {
    if (!user) {
      setError('You must be logged in to create a post')
      return
    }

    if (selectedTypes.length === 0) {
      setError('Please select at least one poverty type')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Mock API call - replace with real Supabase call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const newIssue = {
        id: generateId(),
        title: data.title,
        description: data.description,
        poverty_types: selectedTypes,
        country: data.country,
        province: data.province,
        city: data.city,
        ngo: data.ngo || null,
        author_id: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      console.log('Created issue:', newIssue)
      
      // Navigate to issues page
      navigate('/issues')
    } catch (err) {
      setError('Failed to create issue. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
    
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Authentication Required</h1>
          <p className="text-muted-foreground mb-6">
            You need to be logged in to report an issue.
          </p>
          <Button asChild>
            <a href="/login">Sign In</a>
          </Button>
        </div>
      
    )
  }

  return (
  
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Report an Issue</CardTitle>
                  <CardDescription>
                    Share a poverty-related issue in your community to raise awareness and find solutions
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-6 p-3 bg-destructive/10 border border-destructive/20 rounded-md"
                >
                  <p className="text-sm text-destructive">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Issue Title *
                  </label>
                  <Input
                    id="title"
                    placeholder="Briefly describe the issue (e.g., 'Water shortage in rural communities')"
                    {...register('title', { required: 'Title is required' })}
                    error={!!errors.title}
                  />
                  {errors.title && (
                    <p className="text-sm text-destructive">{errors.title.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Detailed Description *
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the issue, its impact on the community, and any relevant context..."
                    rows={6}
                    {...register('description', { required: 'Description is required' })}
                    error={!!errors.description}
                  />
                  {errors.description && (
                    <p className="text-sm text-destructive">{errors.description.message}</p>
                  )}
                </div>

                {/* Poverty Types */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    Type of Poverty Issue *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {POVERTY_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleTypeToggle(type)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          selectedTypes.includes(type)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background hover:bg-muted border-input'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {selectedTypes.length === 0 && error && (
                    <p className="text-sm text-destructive">Please select at least one poverty type</p>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <label className="text-sm font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Input
                        placeholder="Country"
                        {...register('country', { required: 'Country is required' })}
                        error={!!errors.country}
                      />
                      {errors.country && (
                        <p className="text-sm text-destructive">{errors.country.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Province/State"
                        {...register('province', { required: 'Province is required' })}
                        error={!!errors.province}
                      />
                      {errors.province && (
                        <p className="text-sm text-destructive">{errors.province.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="City/Town"
                        {...register('city', { required: 'City is required' })}
                        error={!!errors.city}
                      />
                      {errors.city && (
                        <p className="text-sm text-destructive">{errors.city.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* NGO (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="ngo" className="text-sm font-medium flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Related NGO or Organization (Optional)
                  </label>
                  <Input
                    id="ngo"
                    placeholder="Name of any NGO or organization working on this issue"
                    {...register('ngo')}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/issues')}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    loading={loading}
                    className="flex-1"
                  >
                    Report Issue (+10 Voice Points)
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
   
  )
}