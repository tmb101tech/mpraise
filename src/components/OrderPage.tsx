import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Package, User, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';

interface OrderPageProps {
  onPageChange: (page: string) => void;
}

export function OrderPage({ onPageChange }: OrderPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    // Contact Info
    name: '',
    phone: '',
    email: '',
    country: 'Nigeria',
    state: 'Rivers',
    city: 'Port Harcourt',
    address: '',
    
    // Order Details
    packSize: '',
    taste: '',
    quantity: '1',
    notes: ''
  });
  const [orderReference, setOrderReference] = useState('');

  const steps = [
    {
      id: 1,
      title: 'Contact Information',
      icon: User,
      description: 'Tell us where to deliver'
    },
    {
      id: 2,
      title: 'Order Details',
      icon: Package,
      description: 'Choose your yogurt'
    },
    {
      id: 3,
      title: 'Confirm Order',
      icon: CheckCircle,
      description: 'Review and submit'
    }
  ];

  const packSizes = [
    { value: 'small-sweetened', label: 'Small Pack - Sweetened (8 bottles)', price: '₦2,500' },
    { value: 'small-unsweetened', label: 'Small Pack - Unsweetened (8 bottles)', price: '₦2,300' },
    { value: 'large-sweetened', label: 'Large Pack - Sweetened (16 bottles)', price: '₦4,800' },
    { value: 'large-unsweetened', label: 'Large Pack - Unsweetened (16 bottles)', price: '₦4,500' },
    { value: 'premium-sweetened', label: 'Premium Sweetened (8 bottles)', price: '₦3,000' },
    { value: 'premium-unsweetened', label: 'Premium Unsweetened (8 bottles)', price: '₦2,800' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit order
      const reference = 'MPR' + Date.now().toString().slice(-8);
      setOrderReference(reference);
      setCurrentStep(4); // Success step
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return orderData.name && orderData.phone && orderData.email && orderData.address;
      case 2:
        return orderData.packSize && orderData.quantity;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const getSelectedPackInfo = () => {
    return packSizes.find(pack => pack.value === orderData.packSize);
  };

  const calculateTotal = () => {
    const selectedPack = getSelectedPackInfo();
    if (!selectedPack) return '₦0';
    
    const price = parseInt(selectedPack.price.replace('₦', '').replace(',', ''));
    const quantity = parseInt(orderData.quantity);
    const total = price * quantity;
    
    return '₦' + total.toLocaleString();
  };

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--brand-blue-lightest)] to-white flex items-center justify-center">
        <Card className="max-w-2xl mx-4 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Submitted Successfully!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing Mpraise Yogurt. We've received your order and will contact you shortly to confirm delivery details.
            </p>
            <div className="bg-[var(--brand-blue-lightest)] rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-600 mb-2">Your Order Reference:</p>
              <p className="text-2xl font-bold text-[var(--brand-blue)]">{orderReference}</p>
            </div>
            <div className="space-y-4">
              <Button 
                onClick={() => onPageChange('home')}
                className="gradient-primary rounded-full px-8 mr-4"
              >
                Back to Home
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="rounded-full px-8 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)]"
              >
                Place Another Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--brand-blue-lightest)]/20 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Place Your Order</h1>
          <p className="text-xl text-blue-100">
            Fresh yogurt delivered right to your doorstep in Port Harcourt
          </p>
        </div>
      </section>

      {/* Stepper */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex flex-col items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isActive 
                          ? 'bg-[var(--brand-blue)] text-white' 
                          : 'bg-gray-200 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle size={24} /> : <Icon size={24} />}
                    </div>
                    <div className="mt-2 text-center">
                      <p className={`font-medium ${isActive ? 'text-[var(--brand-blue)]' : 'text-gray-600'}`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-500 hidden sm:block">{step.description}</p>
                    </div>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[var(--brand-blue-lightest)] to-white p-8">
              <CardTitle className="text-2xl text-[var(--brand-blue)]">
                {steps[currentStep - 1]?.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={orderData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={orderData.phone}
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
                      value={orderData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select value={orderData.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={orderData.state} onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Rivers">Rivers</SelectItem>
                          <SelectItem value="Bayelsa">Bayelsa</SelectItem>
                          <SelectItem value="Delta">Delta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={orderData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Port Harcourt"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      value={orderData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your complete delivery address with landmarks"
                      className="rounded-xl"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Order Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label>Select Pack Size & Type *</Label>
                    <RadioGroup 
                      value={orderData.packSize} 
                      onValueChange={(value) => handleInputChange('packSize', value)}
                      className="space-y-3"
                    >
                      {packSizes.map((pack) => (
                        <div key={pack.value} className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-[var(--brand-blue-lightest)]/30 transition-colors">
                          <RadioGroupItem value={pack.value} id={pack.value} />
                          <label htmlFor={pack.value} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{pack.label}</span>
                              <Badge className="bg-[var(--brand-blue)] text-white">{pack.price}</Badge>
                            </div>
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (Packs) *</Label>
                      <Select value={orderData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} pack{num > 1 ? 's' : ''}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={orderData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Any special instructions or requests..."
                      className="rounded-xl"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Confirm Order */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-[var(--brand-blue-lightest)] rounded-2xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center">
                      <MapPin size={20} className="mr-2 text-[var(--brand-blue)]" />
                      Delivery Information
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Name:</strong> {orderData.name}</p>
                      <p><strong>Phone:</strong> {orderData.phone}</p>
                      <p><strong>Email:</strong> {orderData.email}</p>
                      <p><strong>Address:</strong> {orderData.address}, {orderData.city}, {orderData.state}</p>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-[var(--brand-blue)]/20 rounded-2xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center">
                      <Package size={20} className="mr-2 text-[var(--brand-blue)]" />
                      Order Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Product:</span>
                        <span className="font-medium">{getSelectedPackInfo()?.label}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Unit Price:</span>
                        <span className="font-medium">{getSelectedPackInfo()?.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Quantity:</span>
                        <span className="font-medium">{orderData.quantity} pack{parseInt(orderData.quantity) > 1 ? 's' : ''}</span>
                      </div>
                      {orderData.notes && (
                        <div className="flex justify-between items-start">
                          <span>Notes:</span>
                          <span className="font-medium text-right max-w-xs">{orderData.notes}</span>
                        </div>
                      )}
                      <hr className="border-[var(--brand-blue)]/20" />
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-[var(--brand-blue)]">{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Payment:</strong> Our team will contact you to arrange payment and confirm delivery details after you submit this order.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  onClick={handlePrevStep}
                  variant="outline"
                  className="rounded-full px-6"
                  disabled={currentStep === 1}
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Previous
                </Button>

                <Button
                  onClick={handleNextStep}
                  className="gradient-primary rounded-full px-6"
                  disabled={!isStepValid()}
                >
                  {currentStep === 3 ? 'Submit Order' : 'Next'}
                  {currentStep !== 3 && <ChevronRight size={16} className="ml-1" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}