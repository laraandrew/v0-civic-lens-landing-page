"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, FileText, Users, Bell, MapPin, Vote, Scale, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function LandingPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [expandedPrivacy, setExpandedPrivacy] = useState(false)

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all scroll-animate elements
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 gradient-animate">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">RepMe</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Button
                onClick={() => {
                  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Send Feedback
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 scroll-animate-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Political transparency made simple.
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-pretty">
                Track your representatives, understand legislation, and stay informed without the noise.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="text-base hover-lift"
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Send Feedback
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base bg-transparent hover-lift"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See how it works
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg scroll-animate-right">
            <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10 animate-float" />
              <Image
                src="/images/RepMeWelcome.gif"
                alt="RepMe app showing representative tracking"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="border-t bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-8 scroll-animate">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                Be a Trendsetter
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Become an early user and shape the future of RepMe!
              </p>
            </div>
            <div className="w-full">
              <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfVb6vIE1WsHDWGjwzT8a8K2Q232DfzKDMix2-aOl0eigF7zw/viewform?embedded=true" 
              width="100%" 
              height="600">
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Politics shouldn't be confusing.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 p-6 scroll-animate hover-lift">
              <div className="rounded-full bg-destructive/10 p-4">
                <FileText className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Hard to understand bills</h3>
              <p className="text-muted-foreground">
                Complex legal language makes legislation impossible to follow for everyday citizens.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 scroll-animate hover-lift">
              <div className="rounded-full bg-destructive/10 p-4">
                <Vote className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">No clarity on voting records</h3>
              <p className="text-muted-foreground">
                Finding out how your representatives voted is time-consuming and frustrating.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 scroll-animate hover-lift">
              <div className="rounded-full bg-destructive/10 p-4">
                <Users className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Representatives act without scrutiny</h3>
              <p className="text-muted-foreground">
                Lack of accountability means officials can operate without public awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              RepMe makes it simple.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card scroll-animate hover-lift">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Clear summaries of bills</h3>
              <p className="text-sm text-muted-foreground">Plain-language explanations of complex legislation.</p>
            </div>
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card scroll-animate hover-lift">
              <div className="rounded-full bg-primary/10 p-3">
                <Vote className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Track how officials voted</h3>
              <p className="text-sm text-muted-foreground">See complete voting records at a glance.</p>
            </div>
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card scroll-animate hover-lift">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Discover who represents you</h3>
              <p className="text-sm text-muted-foreground">Find all your local, state, and federal officials.</p>
            </div>
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card scroll-animate hover-lift">
              <div className="rounded-full bg-primary/10 p-3">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Real-time alerts for local issues</h3>
              <p className="text-sm text-muted-foreground">Stay informed about what matters in your community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-t bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">How It Works</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 scroll-animate hover-lift">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Enter your ZIP</h3>
              <p className="text-muted-foreground">Tell us where you live to personalize your experience.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 scroll-animate hover-lift">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">See your representatives</h3>
              <p className="text-muted-foreground">Instantly view all officials representing your area.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 scroll-animate hover-lift">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">View easy bill summaries & vote explanations</h3>
              <p className="text-muted-foreground">Understand complex legislation in plain language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Everything you need to stay informed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore powerful features designed to make civic engagement accessible and transparent.
            </p>
          </div>

          {/* First row of screenshots */}
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
            <div className="flex flex-col items-center space-y-20 scroll-animate">
              <div className="relative aspect-[9/16] w-full max-w-[280px]">
               <img
                src="/images/PolicyPreference.gif"
                alt="Track your representatives and their policy positions"
                className="rounded-2xl shadow-xl border hover-lift w-[280px] h-[560px] object-cover"
              />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Track Your Representatives</h3>
                <p className="text-sm text-muted-foreground">
                  See who represents you and monitor their policy positions and voting records.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-20 scroll-animate">
              <div className="relative aspect-[9/16] w-full max-w-[280px]">
                <Image
                unoptimized
                  src="/images/Reps.gif"
                  alt="Follow issues and track bills that matter to you"
                  width={280}
                  height={560}
                  className="rounded-2xl shadow-xl border hover-lift"
                />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Follow Issues & Bills</h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated on legislation and issues that matter most to you.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-20 scroll-animate">
              <div className="relative aspect-[9/16] w-full max-w-[280px]">
                <Image
                  src="/images/RepMeWelcome.gif"
                  alt="Track elections and stay informed about voting"
                  width={280}
                  height={560}
                  className="rounded-2xl shadow-xl border hover-lift"
                />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Election Information</h3>
                <p className="text-sm text-muted-foreground">
                  Get details about upcoming elections and candidates on your ballot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 scroll-animate">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                About RepMe
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Empowering communities through transparent democracy.
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-left space-y-6">
              <div className="bg-card border rounded-2xl p-8 md:p-12 space-y-6 scroll-animate hover-lift">

                <p className="text-foreground leading-relaxed">
                  RepMe was founded by a diverse group of people who recognized a critical gap in our democratic process. We saw how confusing information, voter uncertainty, and government ambiguity create an environment where accountability becomes optional instead of expected.
                </p>

                <p className="text-foreground leading-relaxed">
                  At RepMe, there's no Right or Left—just facts. Our goal is to make political information clear, accessible, and free from partisan influence. 
                  <strong> Bring complete, unbiased information directly to your fingertips.</strong>
                </p>

                <p className="text-foreground leading-relaxed">
                  Our government has become increasingly opaque, making it difficult for everyday people to understand what their representatives are actually doing. That lack of transparency doesn't just create confusion—it weakens trust, participation, and ultimately the health of our democracy.
                </p>

                <p className="text-foreground leading-relaxed">
                  RepMe cuts through political noise by focusing on verified data: voting records, policy positions, legislative impacts, and factual descriptions. We don't support red or blue—we support clarity. We don't tell you how to vote—we give you the tools to decide for yourself.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
                  <p className="text-foreground font-medium">
                    "Democracy works best when citizens are informed. Our mission is to ensure that transparency and accountability aren’t privileges for the few, but rights for everyone."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    — The RepMe Team
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="border-t py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 scroll-animate">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                Privacy & Data
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We're transparent about how we handle your information.
              </p>
            </div>

            <div className="bg-card border rounded-2xl p-8 md:p-12 space-y-6">
              {/* Overview */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Data Protection Overview</h3>
                <div className="space-y-3 text-foreground">
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Robust Encryption:</strong> Your data is protected with industry-standard encryption, so you can feel confident using RepMe.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Strict Information Control:</strong> We carefully curate and review the information stored in our system to maintain data integrity.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Accuracy Disclaimer:</strong> While we work diligently to ensure accuracy, we cannot guarantee absolute accuracy across all data points.</span>
                  </p>
                </div>
              </div>

              {/* Expandable Section */}
              <button
                onClick={() => setExpandedPrivacy(!expandedPrivacy)}
                className="w-full flex items-center justify-between gap-4 py-4 px-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">Read More: How We Use Your Data</span>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    expandedPrivacy ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedPrivacy && (
                <div className="space-y-4 pt-4 border-t animate-in fade-in slide-in-from-top-2">
                  <h4 className="text-lg font-semibold">Data Collection & Usage</h4>
                  <div className="space-y-4 text-foreground">
                    <div>
                      <p className="font-medium mb-2">What Information We Collect:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Your location (ZIP code) to identify your representatives</li>
                        <li>Email address for account creation and notifications</li>
                        <li>Your interests in specific issues or representatives</li>
                        <li>Your legislative preferences and voting interests</li>
                        <li>Usage patterns and app interaction data</li>
                      </ul>
                    </div>

                    <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                      <p className="font-medium mb-2 text-accent-foreground">Aggregated Data Sales</p>
                      <p className="text-sm text-foreground leading-relaxed">
                        We sell aggregated, anonymized data to third parties for research and analysis purposes. This data cannot be used to identify individual users and includes insights such as regional voting trends, issue popularity by geography, and representative performance metrics. No personal information is sold, and users can opt-out of data collection at any time.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Security Measures:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>End-to-end encryption for sensitive data</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>Secure data storage with redundancy</li>
                        <li>Compliance with industry standards and regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">RepMe</span>
              </div>
              <p className="text-sm text-muted-foreground">Making political transparency accessible to everyone.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 RepMe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
