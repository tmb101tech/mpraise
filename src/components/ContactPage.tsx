import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 813 456 7890', '+234 807 123 4567'],
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@mpraiseyogurt.com', 'orders@mpraiseyogurt.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Aba Road, GRA Phase 2', 'Port Harcourt, Rivers State'],
      description: 'Visit our production facility'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM - 6PM', 'Sat: 9AM - 4PM', 'Sun: Closed'],
      description: 'Customer service hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--brand-blue-lightest)]/20 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions about our yogurt? Need help with your order? We're here to help! 
            Reach out to us anytime.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[var(--brand-blue-lightest)] to-white p-8">
                <CardTitle className="text-2xl text-[var(--brand-blue)] flex items-center">
                  <MessageSquare size={24} className="mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+234 800 123 4567"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      className="rounded-xl resize-none"
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full gradient-primary rounded-xl text-lg py-4 group"
                  >
                    <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & WhatsApp */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.title} className="border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[var(--brand-blue-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-1">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-gray-700">{detail}</p>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="border-0 shadow-xl rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quick WhatsApp Support</h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Need immediate assistance? Chat with us on WhatsApp for instant support, 
                  order updates, and quick questions.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/2348134567890', '_blank')}
                  className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold"
                >
                  Chat on WhatsApp
                </Button>
                <p className="text-sm text-green-200 mt-4">
                  Available during business hours
                </p>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[var(--brand-blue-lightest)] to-white p-6">
                <CardTitle className="text-xl text-[var(--brand-blue)] flex items-center">
                  <MapPin size={20} className="mr-2" />
                  Find Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue)] flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-blue-200">123 Aba Road, GRA Phase 2</p>
                    <p className="text-blue-200">Port Harcourt, Rivers State</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our yogurt and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">How fresh is your yogurt?</h3>
                <p className="text-gray-700">
                  Our yogurt is made fresh daily and has a shelf life of 7 days when refrigerated properly. 
                  We ensure same-day or next-day delivery for maximum freshness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Do you deliver outside Port Harcourt?</h3>
                <p className="text-gray-700">
                  Currently, we deliver within Port Harcourt and select areas in Rivers State. 
                  Contact us to check if we deliver to your location.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">What makes your yogurt special?</h3>
                <p className="text-gray-700">
                  We use traditional fermentation methods, local ingredients, live probiotics, 
                  and no artificial preservatives. Every batch is quality tested for consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Can I customize my order?</h3>
                <p className="text-gray-700">
                  Yes! We offer custom pack sizes for bulk orders and special events. 
                  Contact us to discuss your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button 
              onClick={() => onPageChange('order')}
              className="gradient-primary rounded-full px-8 mr-4"
            >
              Place an Order
            </Button>
            <Button 
              variant="outline"
              className="rounded-full px-8 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white"
            >
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}