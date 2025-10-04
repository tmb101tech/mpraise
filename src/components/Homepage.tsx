import { useState, useEffect } from 'react';
import { Star, ArrowRight, Play, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomepageProps {
  onPageChange: (page: string) => void;
}

export function Homepage({ onPageChange }: HomepageProps) {
  const [currentReview, setCurrentReview] = useState(0);

  const categories = [
    {
      name: 'Small Pack',
      description: '8 bottles per pack',
      image: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=400',
      popular: true
    },
    {
      name: 'Large Pack',
      description: '16 bottles per pack',
      image: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false
    },
    {
      name: 'Sweetened',
      description: 'Naturally sweet & creamy',
      image: 'https://images.unsplash.com/photo-1757715376702-8579c9b43179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3dsJTIwY3JlYW15fGVufDF8fHx8MTc1OTU3MDQ4N3ww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false
    },
    {
      name: 'Unsweetened',
      description: 'Pure & natural taste',
      image: 'https://images.unsplash.com/photo-1757715376702-8579c9b43179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3dsJTIwY3JlYW15fGVufDF8fHx8MTc1OTU3MDQ4N3ww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Adaeze Okafor',
      rating: 5,
      comment: 'The creamiest yogurt I\'ve ever tasted! My family loves it.',
      image: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzU5NTE5NjM3fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 2,
      name: 'Emeka Johnson',
      rating: 5,
      comment: 'Fresh, authentic taste that reminds me of home. Excellent quality!',
      image: null
    },
    {
      id: 3,
      name: 'Blessing Eze',
      rating: 4,
      comment: 'Perfect for breakfast! My children ask for it every morning.',
      image: null
    }
  ];

  const partnerStores = [
    'ShopRite', 'Spar', 'Grand Square', 'Next Cash & Carry', 'Prince Ebeano'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-blue-lightest)] via-white to-[var(--brand-blue-lightest)] min-h-[90vh] flex items-center">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--brand-blue-light)]/10 rounded-full animate-blob"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[var(--brand-blue)]/10 rounded-full animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[var(--brand-blue-lighter)]/10 rounded-full animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[var(--brand-blue-light)] text-white px-4 py-2 rounded-full">
                From Port Harcourt with Love ❤️
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] bg-clip-text text-transparent leading-tight">
                Taste the Creamiest Yogurt from Port Harcourt
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the authentic taste of premium yogurt made with love in the heart of Nigeria. Pure, creamy, and naturally delicious.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => onPageChange('order')}
                className="gradient-primary text-lg px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 group"
              >
                Order Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onPageChange('products')}
                className="text-lg px-8 py-4 rounded-full border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white transition-all duration-300"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Hero Animation - Yogurt pouring placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-[var(--brand-blue-lightest)] rounded-3xl p-8 animate-float">
              <div className="aspect-square bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue)] rounded-full opacity-20 animate-pour"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-[var(--brand-blue)]/30">🥛</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Pack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small family packs to bulk orders, sweetened or natural - we have the perfect yogurt for every taste and occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-[var(--brand-blue-lightest)]/30 rounded-2xl overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {category.popular && (
                    <Badge className="absolute top-4 left-4 bg-[var(--brand-blue)] text-white">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button 
                    onClick={() => onPageChange('order')}
                    className="w-full rounded-full bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] transition-colors"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Quick Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real yogurt lovers across Nigeria</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        size={24} 
                        className={star <= reviews[currentReview].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-800 mb-6 italic">
                    "{reviews[currentReview].comment}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    {reviews[currentReview].image && (
                      <ImageWithFallback
                        src={reviews[currentReview].image}
                        alt={reviews[currentReview].name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-lg">{reviews[currentReview].name}</p>
                      <p className="text-gray-600">Verified Customer</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentReview ? 'bg-[var(--brand-blue)]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See What Makes Us Special</h2>
            <p className="text-xl text-gray-600">Customer testimonials and behind-the-scenes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue)] flex items-center justify-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white rounded-full p-6">
                  <Play size={32} />
                </Button>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">Customer Stories</p>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] flex items-center justify-center">
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white rounded-full p-6">
                  <Play size={32} />
                </Button>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">How It's Made</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Stores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available at Your Favorite Stores</h2>
            <p className="text-lg text-gray-600">Find Mpraise Yogurt at premium supermarkets across Port Harcourt</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerStores.map((store) => (
              <div key={store} className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg font-semibold text-gray-800">{store}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}