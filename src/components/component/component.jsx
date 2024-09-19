import Link from "next/link";
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-background px-4 shadow-sm md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold">PhantomGuard</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="/#features" className="hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="/login" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" prefetch={false}>
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            Sign Up
          </Link>
        </nav>

        <Button variant="outline" size="icon" className="md:hidden">
        </Button>
      </header>

      <main className="flex-1">
        <section className="w-full bg-gradient-to-r from-primary to-secondary py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                    Next-Generation Protection with PhantomGuard
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Seamless user experience and state-of-the-art security through passive CAPTCHA solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image src="/images/Hero.png" width="550" height="550" alt="PhantomGuard Protection" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Advanced Bot Protection</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PhantomGuard offers comprehensive tools to ensure your website stays secure from bots while maintaining an excellent user experience.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Passive CAPTCHA</h3>
                      <p className="text-muted-foreground">Invisible CAPTCHA solution that analyzes behavior without interrupting user flow.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Real-Time Bot Detection</h3>
                      <p className="text-muted-foreground">Identify and block bots instantly with our cutting-edge machine learning models.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Data Encryption</h3>
                      <p className="text-muted-foreground">
                        Ensure data security with end-to-end encryption for sensitive user behavior data.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Advanced Reporting</h3>
                      <p className="text-muted-foreground">Get detailed insights into site traffic, bot detection, and security alerts.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image src="/images/features.png" width="550" height="310" alt="PhantomGuard Features" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
