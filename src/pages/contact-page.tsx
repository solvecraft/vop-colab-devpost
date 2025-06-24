import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'

export function ContactPage() {
  const { register, handleSubmit, reset, formState } = useForm()
  const onSubmit = (data: any) => {
    alert('Thank you for contacting us!')
    reset()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Reach out with questions, feedback, or partnership opportunities.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700">contact@voicesonpoverty.org</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-indigo-500" />
              <span className="text-gray-700">Global Community Platform</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              {...register('message', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={5}
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            disabled={formState.isSubmitting}
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}