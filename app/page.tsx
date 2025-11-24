import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, FileText, Users, Bell, MapPin, Vote, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">CivicLens</span>
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
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Political transparency made simple.
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-pretty">
                Track your representatives, understand legislation, and stay informed without the noise.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-base">
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                See how it works
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10" />
              <Image
                src="/images/screenshot-202025-11-23-20at-2010.png"
                alt="CivicLens app showing representative tracking"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Politics shouldn't be confusing.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="rounded-full bg-destructive/10 p-4">
                <FileText className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Hard to understand bills</h3>
              <p className="text-muted-foreground">
                Complex legal language makes legislation impossible to follow for everyday citizens.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="rounded-full bg-destructive/10 p-4">
                <Vote className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">No clarity on voting records</h3>
              <p className="text-muted-foreground">
                Finding out how your representatives voted is time-consuming and frustrating.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6">
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
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              CivicLens makes it simple.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Clear summaries of bills</h3>
              <p className="text-sm text-muted-foreground">Plain-language explanations of complex legislation.</p>
            </div>
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card">
              <div className="rounded-full bg-primary/10 p-3">
                <Vote className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Track how officials voted</h3>
              <p className="text-sm text-muted-foreground">See complete voting records at a glance.</p>
            </div>
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Discover who represents you</h3>
              <p className="text-sm text-muted-foreground">Find all your local, state, and federal officials.</p>
            </div>
            <div className="flex flex-col items-start space-y-3 p-6 rounded-lg border bg-card">
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
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">How It Works</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Enter your ZIP</h3>
              <p className="text-muted-foreground">Tell us where you live to personalize your experience.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">See your representatives</h3>
              <p className="text-muted-foreground">Instantly view all officials representing your area.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
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
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              Everything you need to stay informed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore powerful features designed to make civic engagement accessible and transparent.
            </p>
          </div>

          {/* First row of screenshots */}
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative aspect-[9/16] w-full max-w-[280px]">
                <Image
                  src="/images/screenshot-202025-11-23-20at-2010.png"
                  alt="Track your representatives and their policy positions"
                  width={280}
                  height={560}
                  className="rounded-2xl shadow-xl border"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Track Your Representatives</h3>
                <p className="text-sm text-muted-foreground">
                  See who represents you and monitor their policy positions and voting records.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative aspect-[9/16] w-full max-w-[280px]">
                <Image
                  src="/images/screenshot-202025-11-23-20at-2010.png"
                  alt="Follow issues and track bills that matter to you"
                  width={280}
                  height={560}
                  className="rounded-2xl shadow-xl border"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Follow Issues & Bills</h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated on legislation and issues that matter most to you.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative aspect-[9/16] w-full max-w-[280px]">
                <Image
                  src="/images/screenshot-202025-11-23-20at-2010.png"
                  alt="Track elections and stay informed about voting"
                  width={280}
                  height={560}
                  className="rounded-2xl shadow-xl border"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Election Information</h3>
                <p className="text-sm text-muted-foreground">
                  Get details about upcoming elections and candidates on your ballot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="border-t bg-muted/50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                Get early access to CivicLens.
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Join our waitlist and be the first to know when we launch.
              </p>
            </div>
            <form className="flex flex-col gap-4 sm:flex-row sm:gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" required />
              <Button type="submit" size="lg">
                Join Waitlist
              </Button>
            </form>
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
                <span className="text-lg font-bold">CivicLens</span>
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
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Pricing
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
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 CivicLens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
