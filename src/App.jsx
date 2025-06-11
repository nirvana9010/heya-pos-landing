import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { CheckCircle, Calendar, Users, CreditCard, Gift, Star, ArrowRight, Play, Shield, Clock, Zap, Phone, MapPin, Award, RefreshCw, Lock, MessageSquare } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import './App.css'

// Import screenshots
import dashboardOverview from './assets/dashboard-overview.webp'
import calendarWithBookings from './assets/calendar-with-bookings.webp'
import bookingsManagement from './assets/bookings-management.webp'
import loyaltyProgram from './assets/loyalty-program.webp'
import customerBookingInterface from './assets/customer-booking-interface.webp'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    postCode: '',
    mobilePhone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    toast.success('Thanks for your interest! We\'ll be in touch within 24 hours.')
    
    // Reset form
    setFormData({
      name: '',
      shopName: '',
      postCode: '',
      mobilePhone: ''
    })
    setIsSubmitting(false)
  }

  const features = [
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Real-Time Everything",
      description: "Live calendar updates across all devices. No refresh needed, ever. Drag-and-drop bookings.",
      benefits: [
        "Live calendar updates across all devices",
        "No refresh needed, ever",
        "Drag-and-drop bookings",
        "Instant synchronization between staff"
      ],
      image: calendarWithBookings,
      details: "Your calendar updates every 10 seconds across all devices. Whether bookings come through your website, phone calls, or walk-ins, everyone sees the changes instantly. Drag and drop appointments to reschedule with zero conflicts."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments That Flow",
      description: "Keep your Tyro terminal. Cash, card, splits - sorted. Automatic reconciliation.",
      benefits: [
        "Keep your existing Tyro terminal",
        "Cash, card, splits - all handled",
        "Automatic reconciliation",
        "Zero payment headaches"
      ],
      image: bookingsManagement,
      details: "Integrate seamlessly with your existing Tyro terminal. Handle cash, card payments, and bill splits without missing a beat. Everything reconciles automatically so you can focus on your customers, not your books."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Security Built In",
      description: "Individual staff PINs. Track every action. Protect sensitive operations.",
      benefits: [
        "Individual staff PINs for accountability",
        "Track every action and change",
        "Protect sensitive operations",
        "Complete audit trail"
      ],
      image: dashboardOverview,
      details: "Every staff member has their own PIN. Every action is logged. Sensitive operations like refunds and discounts require manager approval. You'll always know who did what and when."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Smart Loyalty",
      description: "Visit or spend-based points. Set and forget automation. SMS that actually sends.",
      benefits: [
        "Visit or spend-based point systems",
        "Set and forget automation",
        "SMS notifications that actually send",
        "Customer retention on autopilot"
      ],
      image: loyaltyProgram,
      details: "Configure loyalty programs that match your business. Punch cards for regular visits or points for big spenders. Automated SMS reminders and rewards that actually reach your customers' phones."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Hamilton",
      business: "Hamilton Beauty Services",
      quote: "Since implementing Heya POS six months ago, we've seen a 30% increase in online bookings and eliminated double bookings completely. The time we save on administration allows us to focus on what we do best - providing exceptional beauty services.",
      rating: 5
    },
    {
      name: "Emma",
      business: "Glow Beauty Chatswood",
      quote: "Switched from Timely 3 months ago. Zero double bookings since. Support actually picks up the phone.",
      rating: 5
    },
    {
      name: "Marcus",
      business: "The Gentleman's Cut Richmond",
      quote: "Revenue up 25% from reduced no-shows. Real-time sync across 3 chairs is a game changer.",
      rating: 5
    },
    {
      name: "Priya",
      business: "Serenity Day Spa Gold Coast",
      quote: "Running 3 locations seamlessly. When we needed help, they came to us. Unheard of.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for single-location salons",
      price: "49",
      features: [
        "Core booking and POS features",
        "Up to 3 staff members",
        "Basic reporting and analytics",
        "Email support",
        "Online booking website",
        "Payment processing"
      ]
    },
    {
      name: "Professional",
      description: "Most popular for growing businesses",
      price: "99",
      popular: true,
      features: [
        "All Starter features plus",
        "Unlimited staff members",
        "Advanced loyalty programs",
        "Multi-location support",
        "Priority phone support",
        "Advanced analytics",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      description: "For established salon groups",
      price: "199",
      features: [
        "All Professional features plus",
        "Custom integrations",
        "Advanced reporting and analytics",
        "Dedicated account manager",
        "Custom training and onboarding",
        "White-label options"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Heya POS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Testimonials</a>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                Proudly Australian-owned and operated
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The All-in-One Platform{' '}
                <span className="text-purple-600">Australian Beauty Businesses</span>{' '}
                Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join 500+ salons and spas using Heya POS to save 10 hours per week, eliminate double bookings, 
                and increase customer retention by 25%. No app downloads required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" asChild>
                  <a href="#get-started">
                    Start Your Free 30-Day Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-3" asChild>
                  <a href="tel:0432648531">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Nick: 0432 648 531
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardOverview} 
                alt="Heya POS Dashboard Overview" 
                className="rounded-lg shadow-2xl border"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Real-time sync active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Australian Owned</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Tyro Certified</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">24-Hour Setup</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Humans Answer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sound Familiar?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <p className="text-gray-700 font-medium">System crashes during Saturday rush</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <p className="text-gray-700 font-medium">Double bookings losing you clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <p className="text-gray-700 font-medium">Fighting with tech instead of focusing on customers</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-purple-600 mr-4" />
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" asChild>
                <a href="#get-started">
                  Switch to HEYA
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to run your beauty business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real-time calendar synchronization to integrated loyalty programs, 
              Heya POS provides all the tools you need in one powerful platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeFeature === index 
                        ? 'bg-purple-100 border-2 border-purple-600' 
                        : 'bg-white border-2 border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeFeature === index ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={features[activeFeature].image} 
                alt={features[activeFeature].title}
                className="rounded-lg shadow-xl border"
              />
            </div>
          </div>

          {/* Feature Details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {features[activeFeature].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {features[activeFeature].details}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {features[activeFeature].benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why HEYA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why HEYA?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Australian startup</h3>
              <p className="text-gray-600">We answer when you call</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Built for salons</h3>
              <p className="text-gray-600">We get your business</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growing with you</h3>
              <p className="text-gray-600">Your feedback shapes our product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Switching from Timely Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Switching from Timely?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We will transition you for <strong>FREE</strong> and provide <strong>100% on-call support</strong>
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="#get-started">
                Get Free Migration
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by beauty business owners across Australia
            </h2>
            <p className="text-xl text-gray-600">
              See how Heya POS is helping salons and spas save time and grow their business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business size. All plans include a 30-day free trial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple-600 border-2' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    asChild
                  >
                    <a href="#get-started">
                      Start Free Trial
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section id="get-started" className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to transform your beauty business?
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Join hundreds of Australian salons and spas already saving time and growing their revenue with Heya POS.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Benefits */}
              <div className="text-white space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Start your free 30-day trial today</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0 mt-0.5" />
                    <span>No credit card required to get started</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0 mt-0.5" />
                    <span>Full setup and onboarding in under 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0 mt-0.5" />
                    <span>Free data migration from your current system</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0 mt-0.5" />
                    <span>Australian-based support team available 7 days</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-purple-200 mb-2">Prefer to talk to someone?</p>
                  <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600" asChild>
                    <a href="tel:0432648531">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Nick: 0432 648 531
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Right side - Form */}
              <div className="bg-white rounded-lg p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Smith"
                      className="mt-1.5"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="shopName" className="text-gray-700 font-medium">Shop Name</Label>
                    <Input
                      id="shopName"
                      name="shopName"
                      type="text"
                      required
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder="Beauty Haven Salon"
                      className="mt-1.5"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="postCode" className="text-gray-700 font-medium">Post Code</Label>
                    <Input
                      id="postCode"
                      name="postCode"
                      type="text"
                      required
                      pattern="[0-9]{4}"
                      maxLength="4"
                      value={formData.postCode}
                      onChange={handleInputChange}
                      placeholder="2000"
                      className="mt-1.5"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mobilePhone" className="text-gray-700 font-medium">Mobile Phone</Label>
                    <Input
                      id="mobilePhone"
                      name="mobilePhone"
                      type="tel"
                      required
                      value={formData.mobilePhone}
                      onChange={handleInputChange}
                      placeholder="0400 000 000"
                      className="mt-1.5"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Started Free'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold">Heya POS</span>
              </div>
              <p className="text-gray-400">
                The all-in-one platform for Australian beauty businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="tel:0432648531" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Heya POS. All rights reserved. Proudly Australian-owned and operated.</p>
          </div>
        </div>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App

