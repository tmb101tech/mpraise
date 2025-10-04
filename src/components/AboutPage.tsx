import { Heart, Leaf, Users, Award, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every batch of Mpraise Yogurt is crafted with passion and care, using traditional methods combined with modern quality standards.'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'We source the finest local ingredients and use no artificial preservatives, ensuring a pure and healthy product for your family.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Supporting local farmers and creating jobs in Port Harcourt. We believe in growing together as a community.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Rigorous quality control and testing ensure every bottle meets our high standards for taste, texture, and nutrition.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with a small kitchen operation and a dream to bring authentic yogurt to Port Harcourt families.'
    },
    {
      year: '2021',
      title: 'First Facility',
      description: 'Moved to our first dedicated production facility and began supplying local stores.'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded to multiple supermarket chains across Rivers State and launched home delivery service.'
    },
    {
      year: '2023',
      title: 'Premium Line',
      description: 'Introduced our premium yogurt line with enhanced probiotics and expanded our product range.'
    },
    {
      year: '2024',
      title: 'Looking Forward',
      description: 'Continuing to innovate and expand while maintaining our commitment to quality and community.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--brand-blue-lightest)]/20 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Mpraise</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From humble beginnings to becoming Port Harcourt's favorite yogurt brand. 
            Discover our story, values, and commitment to quality.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[var(--brand-blue-light)] text-white px-4 py-2 rounded-full mb-6">
                  Meet Our Founder
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Driven by Passion, Guided by Quality
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    My name is <strong>Praise Okolie</strong>, and I'm the founder and CEO of Mpraise Yogurt. 
                    What started as a passion project in my kitchen has grown into Port Harcourt's most beloved yogurt brand.
                  </p>
                  <p>
                    Growing up in Rivers State, I was always fascinated by traditional dairy products and their health benefits. 
                    After studying Food Science and working in the industry for several years, I realized there was a gap 
                    in the market for truly authentic, high-quality yogurt made with local love.
                  </p>
                  <p>
                    In 2020, I took the leap and started Mpraise with a simple mission: to create the creamiest, 
                    most delicious yogurt using natural ingredients and traditional methods. Today, we're proud to serve 
                    thousands of families across Port Harcourt and beyond.
                  </p>
                  <p>
                    Every bottle of Mpraise Yogurt represents our commitment to quality, community, and the belief that 
                    good food brings people together. Thank you for being part of our journey!
                  </p>
                </div>
                <div className="pt-6">
                  <div className="text-xl font-semibold text-[var(--brand-blue)]">Praise Okolie</div>
                  <div className="text-gray-600">Founder & CEO, Mpraise Yogurt</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzU5NTE5NjM3fDA&ixlib=rb-4.1.0&q=80&w=600"
                  alt="Praise Okolie, Founder of Mpraise Yogurt"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/20 to-transparent"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg animate-float">
                <div className="text-3xl font-bold text-[var(--brand-blue)]">4+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-[var(--brand-blue)]">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to delivering the final product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[var(--brand-blue-light)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & Sustainability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Location */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin size={24} className="text-[var(--brand-blue)]" />
                  <h2 className="text-3xl font-bold text-gray-900">Proudly Port Harcourt</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Located in the heart of Port Harcourt, Rivers State, our modern production facility 
                  combines traditional yogurt-making techniques with state-of-the-art equipment to ensure 
                  consistent quality and freshness.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We're deeply rooted in our community, sourcing from local farmers and supporting 
                  the local economy. When you choose Mpraise, you're not just buying yogurt – 
                  you're supporting Port Harcourt businesses and families.
                </p>
                <div className="bg-[var(--brand-blue-lightest)] rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <Clock size={20} className="mr-2 text-[var(--brand-blue)]" />
                    Operating Hours
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sustainability */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Leaf size={24} className="text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Mpraise, we believe in sustainable practices that benefit our community 
                  and environment. Our commitment goes beyond just making great yogurt.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-bold text-lg text-green-800 mb-2">Environmental Responsibility</h4>
                    <p className="text-green-700">
                      We use eco-friendly packaging, minimize waste in our production process, 
                      and partner with suppliers who share our environmental values.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-bold text-lg text-blue-800 mb-2">Community Support</h4>
                    <p className="text-blue-700">
                      We provide employment opportunities, support local farmers, and contribute 
                      to community development projects across Rivers State.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-bold text-lg text-purple-800 mb-2">Health & Wellness</h4>
                    <p className="text-purple-700">
                      Our yogurt contains live probiotics, no artificial preservatives, and is made 
                      with the highest quality ingredients for your family's health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a kitchen startup to Port Harcourt's favorite yogurt brand. Here are the key milestones in our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-[var(--brand-blue)]/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <Badge className="bg-[var(--brand-blue)] text-white text-lg px-4 py-2 rounded-full">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-[var(--brand-blue)] rounded-full z-10 border-4 border-white shadow-lg"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Taste the Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have made Mpraise their yogurt of choice. 
            Experience the authentic taste that only comes from passion, quality, and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('order')}
              size="lg"
              className="bg-white text-[var(--brand-blue)] hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
            >
              Order Now
            </Button>
            <Button 
              onClick={() => onPageChange('contact')}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-[var(--brand-blue)]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}