import { useState } from 'react';
import { Filter, ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductsPageProps {
  onPageChange: (page: string) => void;
}

export function ProductsPage({ onPageChange }: ProductsPageProps) {
  const [sizeFilter, setSizeFilter] = useState('all');
  const [tasteFilter, setTasteFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Mpraise Sweetened Small Pack',
      size: 'small',
      taste: 'sweetened',
      packDetails: '8 bottles per pack',
      price: '₦2,500',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=400',
      popular: true,
      description: 'Naturally sweetened, creamy yogurt perfect for the whole family.'
    },
    {
      id: 2,
      name: 'Mpraise Unsweetened Small Pack',
      size: 'small',
      taste: 'unsweetened',
      packDetails: '8 bottles per pack',
      price: '₦2,300',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false,
      description: 'Pure, natural yogurt with no added sugars. Health-conscious choice.'
    },
    {
      id: 3,
      name: 'Mpraise Sweetened Large Pack',
      size: 'large',
      taste: 'sweetened',
      packDetails: '16 bottles per pack',
      price: '₦4,800',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=400',
      popular: true,
      description: 'Bulk pack for families and businesses. Great value for money.'
    },
    {
      id: 4,
      name: 'Mpraise Unsweetened Large Pack',
      size: 'large',
      taste: 'unsweetened',
      packDetails: '16 bottles per pack',
      price: '₦4,500',
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1758720977636-fd71a71bce52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3R0bGVzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc1OTU3MDQ5MHww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false,
      description: 'Large pack of pure, unsweetened yogurt for health enthusiasts.'
    },
    {
      id: 5,
      name: 'Mpraise Premium Sweetened',
      size: 'small',
      taste: 'sweetened',
      packDetails: '8 bottles per pack',
      price: '₦3,000',
      rating: 5.0,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1757715376702-8579c9b43179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3dsJTIwY3JlYW15fGVufDF8fHx8MTc1OTU3MDQ4N3ww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false,
      description: 'Premium recipe with extra creamy texture and rich flavor.'
    },
    {
      id: 6,
      name: 'Mpraise Premium Unsweetened',
      size: 'small',
      taste: 'unsweetened',
      packDetails: '8 bottles per pack',
      price: '₦2,800',
      rating: 4.8,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1757715376702-8579c9b43179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3dsJTIwY3JlYW15fGVufDF8fHx8MTc1OTU3MDQ4N3ww&ixlib=rb-4.1.0&q=80&w=400',
      popular: false,
      description: 'Premium unsweetened yogurt with probiotics for digestive health.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const sizeMatch = sizeFilter === 'all' || product.size === sizeFilter;
    const tasteMatch = tasteFilter === 'all' || product.taste === tasteFilter;
    return sizeMatch && tasteMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--brand-blue-lightest)]/20 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our complete range of premium yogurt products, crafted with love in Port Harcourt. 
            From family packs to bulk orders, sweetened to natural - find your perfect match.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-16 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-[var(--brand-blue)]" />
              <span className="font-medium text-gray-700">Filter Products:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={sizeFilter} onValueChange={setSizeFilter}>
                <SelectTrigger className="w-40 rounded-full">
                  <SelectValue placeholder="Pack Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="small">Small Pack</SelectItem>
                  <SelectItem value="large">Large Pack</SelectItem>
                </SelectContent>
              </Select>

              <Select value={tasteFilter} onValueChange={setTasteFilter}>
                <SelectTrigger className="w-40 rounded-full">
                  <SelectValue placeholder="Taste" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tastes</SelectItem>
                  <SelectItem value="sweetened">Sweetened</SelectItem>
                  <SelectItem value="unsweetened">Unsweetened</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden transform hover:-translate-y-2">
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-4 left-4 bg-[var(--brand-blue)] text-white px-3 py-1 rounded-full">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{product.packDetails}</span>
                        <span>({product.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-[var(--brand-blue)]">{product.price}</span>
                        <p className="text-sm text-gray-500">Per pack</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {product.size === 'small' ? 'Small' : 'Large'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {product.taste === 'sweetened' ? 'Sweet' : 'Natural'}
                        </Badge>
                      </div>
                    </div>

                    <Button 
                      onClick={() => onPageChange('order')}
                      className="w-full gradient-primary rounded-full py-3 hover:shadow-lg transition-all duration-300 group"
                    >
                      <ShoppingCart size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                      Request Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more products.</p>
              <Button 
                onClick={() => {
                  setSizeFilter('all');
                  setTasteFilter('all');
                }}
                className="gradient-primary rounded-full"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us directly for custom orders, bulk pricing, or special requirements. 
            We're here to serve your yogurt needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('contact')}
              size="lg"
              className="gradient-primary rounded-full px-8"
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => onPageChange('order')}
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white"
            >
              Place Custom Order
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}