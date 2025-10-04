import { useState } from 'react';
import { Star, Camera, Video, MessageCircle, ThumbsUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReviewsPageProps {
  onPageChange: (page: string) => void;
}

export function ReviewsPage({ onPageChange }: ReviewsPageProps) {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerContact, setReviewerContact] = useState('');

  const reviews = [
    {
      id: 1,
      name: 'Adaeze Okafor',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely love this yogurt! The texture is incredibly creamy and the taste is just perfect. My children can\'t get enough of it. The sweetened version is our family favorite. Quality is consistently excellent and delivery was prompt.',
      image: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzU5NTE5NjM3fDA&ixlib=rb-4.1.0&q=80&w=400',
      verified: true,
      helpful: 12,
      productImage: 'https://images.unsplash.com/photo-1757715376702-8579c9b43179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3dsJTIwY3JlYW15fGVufDF8fHx8MTc1OTU3MDQ4N3ww&ixlib=rb-4.1.0&q=80&w=200'
    },
    {
      id: 2,
      name: 'Emeka Johnson',
      rating: 5,
      date: '1 week ago',
      comment: 'Best yogurt in Port Harcourt! The unsweetened version is perfect for my diet. Fresh, natural taste that reminds me of traditional homemade yogurt. Excellent customer service too.',
      image: null,
      verified: true,
      helpful: 8,
      productImage: null
    },
    {
      id: 3,
      name: 'Blessing Eze',
      rating: 4,
      date: '1 week ago',
      comment: 'Really good quality yogurt. My kids love having it for breakfast. The small pack size is perfect for our family. Only wish delivery was available on weekends too.',
      image: null,
      verified: true,
      helpful: 15,
      productImage: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=200'
    },
    {
      id: 4,
      name: 'Chioma Nwankwo',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Outstanding! I\'ve tried many yogurt brands but nothing comes close to Mpraise. The creamy texture and authentic taste is unmatched. Perfect for smoothies and eating plain.',
      image: null,
      verified: true,
      helpful: 6,
      productImage: null
    },
    {
      id: 5,
      name: 'David Okoro',
      rating: 4,
      date: '3 weeks ago',
      comment: 'Great product! The large pack is excellent value for money. Taste is consistent across all bottles. Packaging is also very professional. Highly recommend for families.',
      image: null,
      verified: false,
      helpful: 9,
      productImage: null
    },
    {
      id: 6,
      name: 'Grace Amin',
      rating: 5,
      date: '1 month ago',
      comment: 'Love supporting local businesses and this yogurt is top quality! The probiotics have really helped with my digestion. Thank you for bringing authentic yogurt to Port Harcourt.',
      image: null,
      verified: true,
      helpful: 11,
      productImage: null
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5,4,3,2,1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmitReview = () => {
    if (selectedRating && reviewText && reviewerName) {
      // In a real app, this would submit to a backend
      alert('Thank you for your review! It will be published after verification.');
      setSelectedRating(0);
      setReviewText('');
      setReviewerName('');
      setReviewerContact('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--brand-blue-lightest)]/20 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See what our customers are saying about Mpraise Yogurt. Real reviews from real people across Port Harcourt.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Reviews Overview */}
          <div className="lg:col-span-2 space-y-8">
            {/* Rating Summary */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[var(--brand-blue)] mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          size={24} 
                          className={star <= Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">Based on {reviews.length} reviews</p>
                  </div>
                  
                  <div className="space-y-2">
                    {ratingDistribution.map((dist) => (
                      <div key={dist.rating} className="flex items-center space-x-3">
                        <span className="text-sm font-medium w-8">{dist.rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[var(--brand-blue)] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${dist.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-8">{dist.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={review.image || ''} alt={review.name} />
                        <AvatarFallback className="bg-[var(--brand-blue)] text-white">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star 
                                key={star} 
                                size={16} 
                                className={star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
                        
                        {review.productImage && (
                          <div className="mb-4">
                            <ImageWithFallback
                              src={review.productImage}
                              alt="Product photo"
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-[var(--brand-blue)]"
                          >
                            <ThumbsUp size={16} className="mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-[var(--brand-blue)]"
                          >
                            <MessageCircle size={16} className="mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="rounded-full px-8 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white">
                Load More Reviews
              </Button>
            </div>
          </div>

          {/* Submit Review Form */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg rounded-2xl sticky top-24">
              <CardHeader className="bg-gradient-to-r from-[var(--brand-blue-lightest)] to-white p-6 rounded-t-2xl">
                <CardTitle className="text-xl text-[var(--brand-blue)]">Write a Review</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label>Your Rating *</Label>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleStarClick(star)}
                        className="hover:scale-110 transition-transform"
                      >
                        <Star 
                          size={32} 
                          className={star <= selectedRating ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-200'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review-text">Your Review *</Label>
                  <Textarea
                    id="review-text"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your experience with Mpraise Yogurt..."
                    className="rounded-xl resize-none"
                    rows={4}
                  />
                </div>

                <div className="space-y-4">
                  <div className="bg-[var(--brand-blue-lightest)] rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Camera size={20} className="text-[var(--brand-blue)]" />
                      <span className="text-sm font-medium">Add Photos/Videos</span>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-lg">
                      Choose Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Share photos or videos of your yogurt experience (optional)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reviewer-name">Your Name *</Label>
                    <Input
                      id="reviewer-name"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder="Enter your name"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reviewer-contact">Phone or Email</Label>
                    <Input
                      id="reviewer-contact"
                      value={reviewerContact}
                      onChange={(e) => setReviewerContact(e.target.value)}
                      placeholder="For verification (optional)"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleSubmitReview}
                  className="w-full gradient-primary rounded-xl"
                  disabled={!selectedRating || !reviewText || !reviewerName}
                >
                  Submit Review
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Reviews are verified before publication. Thank you for helping other customers!
                </p>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
              <CardContent className="p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-2">Haven't Tried Our Yogurt Yet?</h3>
                <p className="mb-4">Join thousands of satisfied customers across Port Harcourt!</p>
                <Button 
                  onClick={() => onPageChange('order')}
                  className="bg-white text-[var(--brand-blue)] hover:bg-gray-100 rounded-full px-6"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}