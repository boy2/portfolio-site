import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Blog from '@/components/Blog'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <About />
        <Blog />
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <Skills />
              <Certifications />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
