import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin, Calendar, MessageCircle, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const mockIssues = [
	{
		id: '1',
		title: 'Water shortage in rural communities',
		description:
			'Many families in our village have been without clean water for weeks. The main well has dried up and the nearest water source is 5km away.',
		author: 'Sarah Johnson',
		voiceLevel: 45,
		location: 'Nairobi, Kenya',
		timeAgo: '2 hours ago',
		comments: 12,
		types: ['Water'],
	},
	{
		id: '2',
		title: 'Poor housing conditions affecting children',
		description:
			'The housing situation in our area is deteriorating rapidly. Many families are living in overcrowded conditions without proper sanitation.',
		author: 'Michael Chen',
		voiceLevel: 32,
		location: 'Manila, Philippines',
		timeAgo: '4 hours ago',
		comments: 8,
		types: ['Housing'],
	},
	{
		id: '3',
		title: 'Limited access to quality education',
		description:
			'Schools in our district lack basic resources and qualified teachers. Children are walking 10km daily to reach the nearest school.',
		author: 'Amara Okafor',
		voiceLevel: 67,
		location: 'Lagos, Nigeria',
		timeAgo: '6 hours ago',
		comments: 15,
		types: ['Education'],
	},
	{
		id: '4',
		title: 'Damaged roads preventing emergency access',
		description:
			'The main road to our community has been damaged for months. Emergency services cannot reach us during the rainy season.',
		author: 'Carlos Rodriguez',
		voiceLevel: 28,
		location: 'Guatemala City, Guatemala',
		timeAgo: '1 day ago',
		comments: 6,
		types: ['Roads'],
	},
]

export function IssuesPage() {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedFilter, setSelectedFilter] = useState('all')

	const filteredIssues = mockIssues.filter((issue) => {
		const matchesSearch =
			issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			issue.location.toLowerCase().includes(searchTerm.toLowerCase())

		const matchesFilter =
			selectedFilter === 'all' || issue.types.includes(selectedFilter)

		return matchesSearch && matchesFilter
	})

	return (
		<div className="container mx-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="mb-8"
			>
				<h1 className="text-4xl font-bold mb-4">Community Issues</h1>
				<p className="text-lg text-muted-foreground mb-6">
					Browse and engage with poverty issues reported by our community members
				</p>

				{/* Search and Filter */}
				<div className="flex flex-col md:flex-row gap-4 mb-6">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search issues by title, description, or location..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="pl-10"
						/>
					</div>
					<div className="flex gap-2">
						<Button
							variant={selectedFilter === 'all' ? 'default' : 'outline'}
							size="sm"
							onClick={() => setSelectedFilter('all')}
						>
							All
						</Button>
						<Button
							variant={
								selectedFilter === 'Water' ? 'default' : 'outline'
							}
							size="sm"
							onClick={() => setSelectedFilter('Water')}
						>
							Water
						</Button>
						<Button
							variant={
								selectedFilter === 'Housing' ? 'default' : 'outline'
							}
							size="sm"
							onClick={() => setSelectedFilter('Housing')}
						>
							Housing
						</Button>
						<Button
							variant={
								selectedFilter === 'Education' ? 'default' : 'outline'
							}
							size="sm"
							onClick={() => setSelectedFilter('Education')}
						>
							Education
						</Button>
						<Button
							variant={selectedFilter === 'Roads' ? 'default' : 'outline'}
							size="sm"
							onClick={() => setSelectedFilter('Roads')}
						>
							Roads
						</Button>
					</div>
				</div>
			</motion.div>

			{/* Issues Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredIssues.map((issue, index) => (
					<motion.div
						key={issue.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
						whileHover={{ y: -4 }}
						className="h-full"
					>
						<Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
							<CardHeader className="pb-3">
								<div className="flex items-start justify-between gap-4">
									<Link
										to={`/threads/${issue.id}`}
										className="flex-1 group"
									>
										<h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
											{issue.title}
										</h3>
									</Link>
									<div className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
										<MessageCircle className="h-3 w-3" />
										<span>{issue.comments}</span>
									</div>
								</div>
							</CardHeader>

							<CardContent className="pt-0">
								<p className="text-muted-foreground text-sm mb-4 line-clamp-3">
									{issue.description}
								</p>

								{/* Issue Types */}
								<div className="flex flex-wrap gap-1 mb-4">
									{issue.types.map((type) => (
										<span
											key={type}
											className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
										>
											{type}
										</span>
									))}
								</div>

								{/* Location */}
								<div className="flex items-center text-sm text-muted-foreground mb-3">
									<MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
									<span className="truncate">{issue.location}</span>
								</div>

								{/* Author and Date */}
								<div className="flex items-center justify-between text-sm">
									<div className="flex items-center space-x-2">
										<span className="font-medium">{issue.author}</span>
										<div className="flex items-center text-primary">
											<Award className="h-3 w-3 mr-1" />
											<span className="text-xs font-medium">
												Level {issue.voiceLevel}
											</span>
										</div>
									</div>
									<div className="flex items-center text-muted-foreground">
										<Calendar className="h-4 w-4 mr-1" />
										<span className="text-xs">{issue.timeAgo}</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>

			{/* Empty State */}
			{filteredIssues.length === 0 && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-center py-12"
				>
					<div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
						<Search className="h-12 w-12 text-muted-foreground" />
					</div>
					<h3 className="text-lg font-semibold mb-2">No Issues Found</h3>
					<p className="text-muted-foreground mb-6">
						Try adjusting your search terms or filters
					</p>
					<Button asChild>
						<Link to="/new-post">Report Your First Issue</Link>
					</Button>
				</motion.div>
			)}
		</div>
	)
}