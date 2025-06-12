import { useState, useEffect } from 'react'
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
import tyroLogo from './assets/tyro-logo.png'

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    postCode: '',
    mobilePhone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isTimelyMigration, setIsTimelyMigration] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [expiryDate, setExpiryDate] = useState('')

  useEffect(() => {
    // Check for ?from=timely parameter
    const params = new URLSearchParams(window.location.search)
    if (params.get('from') === 'timely') {
      setIsTimelyMigration(true)
      document.body.classList.add('timely-migration')
    }
  }, [])

  useEffect(() => {
    if (!isTimelyMigration) return

    // Set deadline to next Friday 11:59 PM
    const getNextFriday = () => {
      const now = new Date()
      const friday = new Date()
      friday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7 || 7)
      friday.setHours(23, 59, 59, 999)
      return friday
    }

    const deadline = getNextFriday()
    
    // Format the expiry date
    const formatExpiryDate = (date) => {
      const options = { weekday: 'long', month: 'short', day: 'numeric' }
      const formatted = date.toLocaleDateString('en-AU', options)
      const time = date.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true })
      return `${formatted} at ${time}`
    }
    
    setExpiryDate(formatExpiryDate(deadline))

    const updateCountdown = () => {
      const now = new Date()
      const difference = deadline - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [isTimelyMigration])

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
    <div className="min-h-screen bg-background-primary" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Heya POS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">Testimonials</a>
            <Button className="btn-primary bounce-hover" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
              <a href="#get-started">
                Start Free Trial
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 gradient-animated section-gradient relative overflow-hidden" style={{ background: 'var(--gradient-hero)', backgroundSize: '200% 200%' }}>
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 float-animation" style={{ background: 'var(--color-accent-mint-bright)' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full opacity-20 float-animation" style={{ background: 'var(--color-accent-coral)', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 rounded-full opacity-15 float-animation" style={{ background: 'var(--color-accent-lavender)', animationDelay: '2s' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {isTimelyMigration ? (
                <>
                  <h1 className="hero-heading text-gray-900 mb-4">
                    Leaving Timely? We'll Pay for Your Move.
                  </h1>
                  <p className="lead-text text-gray-700 mb-6" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    Keep your Tyro. Migrate your data. Get 6 months <span className="free-badge">FREE</span> when you switch.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Join 47 Australian salons who switched from Timely this month
                  </p>
                </>
              ) : (
                <>
                  <Badge className="mb-4 bounce-hover" style={{ background: 'rgba(94, 234, 212, 0.2)', color: 'var(--color-primary)' }}>
                    Proudly Australian-owned and operated
                  </Badge>
                  <h1 className="hero-heading text-gray-900 mb-6">
                    The All-in-One Platform{' '}
                    <span className="text-teal-600">Australian Beauty Businesses</span>{' '}
                    Trust
                  </h1>
                  <p className="lead-text text-gray-600 mb-8">
                    Join 500+ salons and spas using Heya POS to save 10 hours per week, eliminate double bookings, 
                    and increase customer retention by 25%. No app downloads required.
                  </p>
                </>
              )}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className={isTimelyMigration ? "btn-primary bounce-hover text-lg px-8 py-3" : "btn-primary bounce-hover text-lg px-8 py-3"} style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
                  <a href="#get-started">
                    {isTimelyMigration ? <>Claim 6 Months <span className="free-badge">FREE</span></> : 'Start Your Free 30-Day Trial'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className={isTimelyMigration ? "border-2 text-lg px-8 py-3 bounce-hover" : "border-2 text-lg px-8 py-3 bounce-hover"} style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }} asChild>
                  <a href="tel:0432648531">
                    <Phone className="mr-2 h-5 w-5" />
                    {isTimelyMigration ? 'Book 10-Min Demo' : 'Call Nick: 0432 648 531'}
                  </a>
                </Button>
              </div>
              {isTimelyMigration && (
                <>
                  <div className="flex items-center justify-start mb-6">
                    <div className="px-8 py-4 rounded-xl border-2 shadow-md card-hover" style={{ background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-background-soft) 100%)', borderColor: 'var(--color-border)' }}>
                      <div className="flex items-center space-x-4">
                        <div className="bg-gray-800 p-3 rounded bounce-hover">
                          <img 
                            src={tyroLogo} 
                            alt="Tyro" 
                            className="h-10 w-auto"
                          />
                        </div>
                        <CheckCircle className="h-8 w-8" style={{ color: 'var(--color-accent-mint-bright)' }} />
                        <span className="lead-text text-gray-800" style={{ fontWeight: 'var(--font-weight-semibold)' }}>Your Tyro Terminal Just Works With HEYA</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5" style={{ color: 'var(--color-accent-mint-bright)' }} />
                      <span>Keep Your Tyro Terminal</span>
                    </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" style={{ color: 'var(--color-accent-mint-bright)' }} />
                    <span>24-Hour Migration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" style={{ color: 'var(--color-accent-mint-bright)' }} />
                    <span>No Setup Fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" style={{ color: 'var(--color-accent-mint-bright)' }} />
                    <span>Australian Support</span>
                  </div>
                </div>
                </>
              )}
            </div>
            <div className="relative">
              <img 
                src={dashboardOverview} 
                alt="Heya POS Dashboard Overview" 
                className="rounded-lg shadow-2xl border card-hover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border card-hover">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--color-accent-mint-bright)' }}></div>
                  <span className="text-small" style={{ fontWeight: 'var(--font-weight-medium)' }}>Real-time sync active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer for Timely Users - Hidden for now, can be used for actual promos */}
      {false && isTimelyMigration && (
        <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 animate-pulse" />
                <span className="font-bold text-lg">Timely Switcher Deal Expires {expiryDate}</span>
              </div>
              <div className="flex items-center space-x-4 text-2xl font-bold animate-subtle-pulse">
                <div className="text-center">
                  <div className="bg-teal-800 px-3 py-2 rounded-lg shadow-lg animate-gentle-glow">{timeLeft.days}</div>
                  <div className="text-xs mt-1">DAYS</div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <div className="bg-teal-800 px-3 py-2 rounded-lg shadow-lg animate-gentle-glow">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs mt-1">HOURS</div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <div className="bg-teal-800 px-3 py-2 rounded-lg shadow-lg animate-gentle-glow">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs mt-1">MINS</div>
                </div>
                <span>:</span>
                <div className="text-center">
                  <div className="bg-teal-800 px-3 py-2 rounded-lg shadow-lg animate-gentle-glow">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs mt-1">SECS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Bar */}
      <section className="py-8 section-white border-b" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-600">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Australian Owned</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-600">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Tyro Certified</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-600">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">24-Hour Setup</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-teal-600">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Humans Answer</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Detailed Comparison Table - Only shows for Timely users */}
      {isTimelyMigration && (
        <section className="py-16 section-teal" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  See the Difference
                </h2>
                <p className="text-xl text-gray-600">
                  Why pay more for less?
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden card-hover">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-background-secondary)' }}>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-600">Timely</th>
                      <th className="px-6 py-4 text-center font-bold text-green-600">HEYA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Monthly Cost</td>
                      <td className="px-6 py-4 text-center text-gray-600">$89+</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">$49</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--color-background-soft)' }}>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Setup Fee</td>
                      <td className="px-6 py-4 text-center text-gray-600">$299</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">$0</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Tyro Integration</td>
                      <td className="px-6 py-4 text-center text-gray-600">Problematic</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">Seamless</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--color-background-soft)' }}>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>System Crashes</td>
                      <td className="px-6 py-4 text-center text-gray-600">Daily</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">Never</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Support Response</td>
                      <td className="px-6 py-4 text-center text-gray-600">2-3 days</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">30 minutes</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--color-background-soft)' }}>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Data Export</td>
                      <td className="px-6 py-4 text-center text-gray-600">Complicated</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">One click</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Free Trial</td>
                      <td className="px-6 py-4 text-center text-gray-600">14 days</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">30 days</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--color-background-soft)' }}>
                      <td className="px-6 py-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>Contract Lock-in</td>
                      <td className="px-6 py-4 text-center text-gray-600">12 months</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-bold">Month-to-month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" className="btn-primary bounce-hover pulse-animation text-lg px-8 py-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
                  <a href="#get-started">
                    Claim Your 6 Months Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Original Heya vs Timely Comparison - Only shows for Timely users */}
      {false && isTimelyMigration && (
        <section className="py-16 section-teal" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  Why former Timely users choose Heya
                </h2>
                <p className="text-xl text-gray-600">
                  See how Heya POS addresses the common frustrations Timely users face
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-6">Timely Problems 😔</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-gray-500 text-xl">✗</span>
                      <div>
                        <strong className="text-gray-900">Constant sync issues</strong>
                        <p className="text-gray-600">Calendar doesn't update in real-time, leading to double bookings</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gray-500 text-xl">✗</span>
                      <div>
                        <strong className="text-gray-900">Limited payment options</strong>
                        <p className="text-gray-600">No integrated POS, manual payment tracking</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gray-500 text-xl">✗</span>
                      <div>
                        <strong className="text-gray-900">Poor support</strong>
                        <p className="text-gray-600">International support team, long wait times</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gray-500 text-xl">✗</span>
                      <div>
                        <strong className="text-gray-900">Complicated interface</strong>
                        <p className="text-gray-600">Staff need extensive training, frequent errors</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-gray-500 text-xl">✗</span>
                      <div>
                        <strong className="text-gray-900">Expensive add-ons</strong>
                        <p className="text-gray-600">Basic features cost extra, pricing adds up quickly</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-teal-600 mb-6">Heya Solutions ✨</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-teal-500 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Real-time updates every 10 seconds</strong>
                        <p className="text-gray-600">Calendar syncs instantly across all devices, zero conflicts</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-teal-500 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Integrated Tyro POS</strong>
                        <p className="text-gray-600">Complete payment solution with automatic reconciliation</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-teal-500 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Australian support team</strong>
                        <p className="text-gray-600">Local team that answers calls, on-site help available</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-teal-500 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">Intuitive design</strong>
                        <p className="text-gray-600">Staff trained in under 30 minutes, minimal errors</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-teal-500 text-xl">✓</span>
                      <div>
                        <strong className="text-gray-900">All-inclusive pricing</strong>
                        <p className="text-gray-600">Everything included, no hidden fees or surprise charges</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" className="btn-primary bounce-hover pulse-animation text-lg px-8 py-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
                  <a href="#get-started">
                    Claim Your 50% Discount Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Special Offer Section - Only shows for Timely users */}
      {isTimelyMigration && (
        <section className="py-16 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 float-animation" style={{ background: 'var(--color-accent-yellow)' }}></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 float-animation" style={{ background: 'var(--color-accent-mint-bright)', animationDelay: '2s' }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur border-2 border-white/20 rounded-2xl p-8 md:p-12 card-hover">
                <h2 className="display-heading mb-6 flex items-center justify-center" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  🎉 Limited Time: Timely Refugee Special
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="text-2xl font-semibold">
                    The Deal:
                  </div>
                  <ul className="space-y-3 text-lg max-w-2xl mx-auto text-left">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                      <span>30-day free trial (no card required)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                      <span>Then just $49/month (normally $99)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                      <span className="font-bold">Sign for 12 months → Get 6 MONTHS <span className="free-badge">FREE</span></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                      <span>That's $294 back in your pocket</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-xl font-bold text-yellow-300">
                    Only 11 spots remaining at this price
                  </p>
                  <p className="text-lg">
                    Offer expires Friday - Timely won't get better, we will
                  </p>
                </div>
                
                <Button size="lg" className="bg-white bounce-hover text-xl px-10 py-4" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }} asChild>
                  <a href="#get-started">
                    <>Claim My 6 <span className="free-badge">FREE</span> Months</>
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Features Section */}
      <section id="features" className="py-20 section-mint" style={{ backgroundColor: 'var(--color-background-primary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
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
                    className={`w-full text-left p-4 rounded-lg transition-all card-hover ${
                      activeFeature === index 
                        ? 'border-2' 
                        : 'border-2 hover:scale-105'
                    }`}
                    style={{
                      backgroundColor: activeFeature === index ? 'var(--color-selected-bg)' : 'var(--color-surface)',
                      borderColor: activeFeature === index ? 'var(--color-primary)' : 'var(--color-border-light)'
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeFeature === index ? 'text-white' : 'text-gray-600'
                      }`}
                      style={{
                        backgroundColor: activeFeature === index ? 'var(--color-primary)' : 'var(--color-hover-overlay)'
                      }}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="feature-title text-gray-900">{feature.title}</h3>
                        <p className="text-small text-gray-600">{feature.description}</p>
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
          <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
            <h3 className="feature-title text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
              {features[activeFeature].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {features[activeFeature].details}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {features[activeFeature].benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why HEYA Section */}
      <section className="py-16 section-mint" style={{ backgroundColor: 'var(--color-background-primary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: '2rem' }}>Why HEYA?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation" style={{ background: 'var(--color-primary)' }}>
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="feature-title text-gray-900 mb-2">Australian startup</h3>
              <p className="text-small text-gray-600">We answer when you call</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation" style={{ background: 'var(--color-primary)', animationDelay: '0.5s' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="feature-title text-gray-900 mb-2">Built for salons</h3>
              <p className="text-small text-gray-600">We get your business</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 float-animation" style={{ background: 'var(--color-primary)', animationDelay: '1s' }}>
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="feature-title text-gray-900 mb-2">Growing with you</h3>
              <p className="text-small text-gray-600">Your feedback shapes our product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Switching from Timely Section */}
      <section className="py-12 section-gradient border-l-4" style={{ background: 'linear-gradient(90deg, rgba(167, 243, 208, 0.2) 0%, rgba(230, 255, 250, 0.3) 100%)', borderColor: 'var(--color-primary)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="display-heading text-gray-900 mb-4" style={{ fontSize: '1.75rem' }}>
              Switching from Timely?
            </h3>
            <p className="lead-text text-gray-700 mb-6">
              We will transition you for <strong>FREE</strong> and provide <strong>100% on-call support</strong>
            </p>
            <Button size="lg" className="btn-primary bounce-hover text-lg px-8 py-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
              <a href="#get-started">
                Get Free Migration
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {!isTimelyMigration && (
        <section id="testimonials" className="py-20 section-teal" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
          <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Loved by beauty business owners across Australia
            </h2>
            <p className="text-xl text-gray-600">
              See how Heya POS is helping salons and spas save time and grow their business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 card-hover">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="testimonial-text text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="text-gray-900" style={{ fontWeight: 'var(--font-weight-semibold)' }}>{testimonial.name}</div>
                    <div className="text-small text-gray-600">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Timely Migration Testimonials - Only shows for Timely users */}
      {isTimelyMigration && (
        <section className="py-20 section-mint" style={{ backgroundColor: 'var(--color-background-primary)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Former Timely users share their experience
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from salons that made the switch from Timely to Heya
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8 border-2 card-hover" style={{ borderColor: 'var(--color-border)' }}>
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-xl leading-relaxed">
                    "After 3 years of Timely frustrations - constant sync errors, double bookings, and support that never answered - we switched to Heya. The migration took ONE DAY. Nick personally helped us set everything up. We haven't had a single double booking in 6 months. My staff actually enjoy using the system now."
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Jessica Thompson</div>
                    <div className="text-gray-600">Luxe Beauty Studio, Sydney</div>
                    <Badge className="mt-2 bg-teal-100 text-teal-700">Former Timely User (4 years)</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 card-hover" style={{ borderColor: 'var(--color-border)' }}>
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-xl leading-relaxed">
                    "Timely's payment system was a nightmare - manual reconciliation, no POS integration, constant errors. Heya's Tyro integration is seamless. We're saving 2 hours daily on admin work. The 50% discount for switching made it a no-brainer."
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Michael Chen</div>
                    <div className="text-gray-600">Urban Cuts Barbershop, Melbourne</div>
                    <Badge className="mt-2 bg-teal-100 text-teal-700">Switched from Timely 8 months ago</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 card-hover" style={{ borderColor: 'var(--color-border)' }}>
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-xl leading-relaxed">
                    "The difference is night and day. With Timely, we'd lose 3-4 bookings per week due to sync issues. With Heya, everything updates instantly. Plus, when we had questions during setup, someone actually answered the phone! Try getting that from Timely."
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Rachel Martinez</div>
                    <div className="text-gray-600">Serenity Spa & Wellness, Brisbane</div>
                    <Badge className="mt-2 bg-teal-100 text-teal-700">Ex-Timely User (2 years)</Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mt-12">
                <Button size="lg" className="btn-primary bounce-hover text-lg px-8 py-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
                  <a href="#get-started">
                    Join 200+ Former Timely Users
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Timely-specific FAQ Section - Only shows for Timely users */}
      {isTimelyMigration && (
        <section className="py-16 section-white" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  Your Timely Migration Questions Answered
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about switching from Timely to HEYA
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "Will I lose my booking history from Timely?"
                  </h3>
                  <p className="text-gray-700">
                    No. We migrate everything - customers, bookings, notes, history. Nothing gets left behind.
                  </p>
                </Card>
                
                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "What about my Tyro EFTPOS terminal?"
                  </h3>
                  <p className="text-gray-700">
                    Keep it! HEYA works seamlessly with your existing Tyro. No new hardware needed.
                  </p>
                </Card>
                
                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "How long does migration really take?"
                  </h3>
                  <p className="text-gray-700">
                    Most salons are fully migrated in 24 hours. Complex setups might take 48 hours max.
                  </p>
                </Card>
                
                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "What if I'm locked into a Timely contract?"
                  </h3>
                  <p className="text-gray-700">
                    We'll credit you for any early termination fees up to $200. Just show us the invoice.
                  </p>
                </Card>
                
                <Card className="p-6 card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "Is the 6 months free offer real?"
                  </h3>
                  <p className="text-gray-700">
                    100% real. No hidden fees. Sign for 12 months, get months 7-12 completely <span className="free-badge">FREE</span>.
                  </p>
                </Card>
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" className="btn-primary bounce-hover pulse-animation text-lg px-8 py-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
                  <a href="#get-started">
                    Get All Your Questions Answered
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HEYA Product Showcase Section - Only shows for Timely users */}
      {isTimelyMigration && (
        <section className="py-16 section-teal" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  See Why HEYA is Better
                </h2>
                <p className="text-xl text-gray-600">
                  Not just better than Timely - better than anything else
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={calendarWithBookings} 
                    alt="Calendar View" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Calendar View
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Drag-and-drop scheduling that actually works
                    </p>
                    <div className="text-sm text-teal-600 font-semibold">
                      ✓ Real-time updates, no refresh needed
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={bookingsManagement} 
                    alt="Quick Checkout" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Quick Checkout
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Checkout in under 30 seconds
                    </p>
                    <div className="text-sm text-teal-600 font-semibold">
                      ✓ Works with your existing Tyro
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={dashboardOverview} 
                    alt="Customer Insights" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Customer Insights
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Know your business at a glance
                    </p>
                    <div className="text-sm text-teal-600 font-semibold">
                      ✓ Track no-shows, revenue, busy times
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button size="lg" className="btn-primary bounce-hover text-lg px-8 py-3" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }} asChild>
                  <a href="#get-started">
                    See Live Demo
                    <Play className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 section-teal" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-heading text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business size. All plans include a 30-day free trial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative card-hover ${plan.popular ? 'border-2' : ''}`} style={{ borderColor: plan.popular ? 'var(--color-primary)' : 'var(--color-border-light)' }}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }}>
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
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'btn-primary bounce-hover' 
                        : 'bg-gray-900 hover:bg-gray-800 bounce-hover'
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
      <section id="get-started" className="py-20" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-heading text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Ready to transform your beauty business?
              </h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                Join hundreds of Australian salons and spas already saving time and growing their revenue with Heya POS.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Benefits */}
              <div className="text-white space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Start your free 30-day trial today</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                    <span>No credit card required to get started</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                    <span>Full setup and onboarding in under 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                    <span>Free data migration from your current system</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-200 flex-shrink-0 mt-0.5" />
                    <span>Australian-based support team available 7 days</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-teal-200 mb-2">Prefer to talk to someone?</p>
                  <Button variant="outline" className="border-white bg-transparent text-white bounce-hover" style={{ borderColor: 'white' }} asChild>
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
                    <Label htmlFor="name" className="text-gray-700" style={{ fontWeight: 'var(--font-weight-medium)' }}>Your Name</Label>
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
                    <Label htmlFor="shopName" className="text-gray-700" style={{ fontWeight: 'var(--font-weight-medium)' }}>Shop Name</Label>
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
                    <Label htmlFor="postCode" className="text-gray-700" style={{ fontWeight: 'var(--font-weight-medium)' }}>Post Code</Label>
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
                    <Label htmlFor="mobilePhone" className="text-gray-700" style={{ fontWeight: 'var(--font-weight-medium)' }}>Mobile Phone</Label>
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
                    className="w-full btn-primary bounce-hover text-lg py-3"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : (isTimelyMigration ? 'Start Your Timely Migration' : 'Get Started Free')}
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
                <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
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

