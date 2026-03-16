'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

/* ─── 3D Organic Sphere ──────────────────────────────────────────────── */
function OrganicSphere() {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2
  })
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={mesh} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color="#96a27e" roughness={0.2} metalness={0.1} distort={0.35} speed={2} />
      </mesh>
    </Float>
  )
}

function LeafParticle({ position, delay }) {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay
    mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.5
    mesh.current.rotation.z = t * 0.3
    mesh.current.rotation.x = t * 0.2
  })
  return (
    <mesh ref={mesh} position={position} scale={0.15}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#b4bda3" transparent opacity={0.6} />
    </mesh>
  )
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="!absolute inset-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrganicSphere />
      {[...Array(12)].map((_, i) => (
        <LeafParticle
          key={i}
          position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4]}
          delay={i * 0.7}
        />
      ))}
      <Environment preset="forest" />
    </Canvas>
  )
}

/* ─── Sections ───────────────────────────────────────────────────────── */
const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const products = [
  { title: '30-Day Zero Waste Challenge', price: '$19', desc: 'Transform your bathroom in 30 days with daily actionable swaps. Includes shopping lists, DIY recipes, and tracking sheets.', tag: 'Best Seller' },
  { title: 'DIY Natural Recipe Book', price: '$29', desc: '50+ tested recipes for shampoo bars, deodorant, toothpaste, skincare, and more. Simple ingredients, zero waste.', tag: 'Popular' },
  { title: 'Monthly Swaps Membership', price: '$9.99/mo', desc: 'New curated sustainable swaps every month. Exclusive recipes, brand deals, community access, and expert Q&As.', tag: 'Subscribe' },
  { title: 'Zero Waste Travel Kit Guide', price: '$14', desc: 'Pack light, pack green. Complete guide to traveling plastic-free with packing lists for every trip type.', tag: 'New' },
]

const steps = [
  { num: '01', title: 'Choose Your Guide', desc: 'Pick the guide that matches where you are on your zero-waste journey.' },
  { num: '02', title: 'Follow the Plan', desc: 'Each guide has daily or weekly steps. No overwhelm — just one switch at a time.' },
  { num: '03', title: 'See the Difference', desc: 'Less plastic, fewer toxins, more money saved. Track your progress with our built-in tools.' },
]

const testimonials = [
  { name: 'Sarah M.', text: "I've eliminated 90% of plastic from my bathroom in just 3 weeks. The recipes actually work better than store-bought.", stars: 5 },
  { name: 'James K.', text: "The membership is incredible value. Every month I discover products I didn't know existed. My skin has never been better.", stars: 5 },
  { name: 'Priya L.', text: "Finally a guide that's practical, not preachy. The shopping lists saved me so much time.", stars: 5 },
]

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <div className="overflow-x-hidden">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 w-full z-50 bg-cream-50/80 backdrop-blur-md border-b border-sage-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-sage-800">Pure Switch Co</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-sage-600">
            <a href="#products" className="hover:text-sage-900 transition">Guides</a>
            <a href="#how" className="hover:text-sage-900 transition">How It Works</a>
            <a href="#testimonials" className="hover:text-sage-900 transition">Reviews</a>
            <a href="#blog" className="hover:text-sage-900 transition">Blog</a>
          </div>
          <a href="#products" className="bg-sage-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-sage-700 transition">
            Shop Guides
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <HeroScene />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-sage-100 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
                Sustainable Living Made Simple
              </span>
            </motion.div>
            <motion.h1
              initial="hidden" animate="visible" variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-sage-900"
            >
              Switch to
              <span className="text-sage-500"> zero waste.</span>
              <br />One step at a time.
            </motion.h1>
            <motion.p
              initial="hidden" animate="visible" variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-sage-600 mb-8 leading-relaxed max-w-lg"
            >
              Actionable guides and tested recipes to transform your personal care routine.
              No guilt trips — just practical swaps that save money and cut waste.
            </motion.p>
            <motion.div
              initial="hidden" animate="visible" variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#products" className="bg-sage-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-sage-700 transition text-center shadow-lg shadow-sage-600/20">
                Browse Guides — From $14
              </a>
              <a href="#how" className="border-2 border-sage-300 text-sage-700 px-8 py-4 rounded-full text-base font-semibold hover:bg-sage-50 transition text-center">
                See How It Works
              </a>
            </motion.div>
            <motion.div
              initial="hidden" animate="visible" variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex items-center gap-6 text-sm text-sage-500"
            >
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-sage-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                2,400+ happy customers
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-sage-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Instant download
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-sage-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Lifetime updates
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Social Proof Bar ─── */}
      <section className="bg-sage-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center text-sm">
          <div><span className="block text-2xl font-bold">2,400+</span> Guides Sold</div>
          <div><span className="block text-2xl font-bold">50+</span> DIY Recipes</div>
          <div><span className="block text-2xl font-bold">12kg</span> Avg Plastic Saved/Year</div>
          <div><span className="block text-2xl font-bold">4.9/5</span> Customer Rating</div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section id="products" className="py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Guides</h2>
            <p className="text-sage-600 text-lg max-w-xl mx-auto">Practical, tested, and designed to make your switch to zero-waste as easy as possible.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-sage-100 hover:shadow-xl hover:shadow-sage-200/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-sage-100 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="text-2xl font-bold text-sage-800">{p.price}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-sage-600 transition">{p.title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed mb-6">{p.desc}</p>
                <button className="w-full bg-sage-600 text-white py-3 rounded-full font-medium hover:bg-sage-700 transition">
                  Get This Guide
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how" className="py-24 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-sage-600 text-lg">Three simple steps to a zero-waste bathroom.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sage-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">{s.num}</div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section id="testimonials" className="py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-sage-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sage-700 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sage-500 text-sm font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Blog Preview ─── */}
      <section id="blog" className="py-24 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">From the Blog</h2>
            <p className="text-sage-600 text-lg">Free tips and guides to start your zero-waste journey today.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '10 Zero-Waste Swaps You Can Make This Weekend', cat: 'Getting Started', read: '5 min' },
              { title: 'DIY Shampoo Bars: The Only Recipe You Need', cat: 'Recipes', read: '8 min' },
              { title: 'The Real Cost of Plastic in Your Bathroom', cat: 'Research', read: '6 min' },
            ].map((post, i) => (
              <motion.div
                key={post.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-sage-100 hover:shadow-lg transition group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-sage-200 to-sage-300" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-sage-500">
                    <span className="bg-sage-100 px-2 py-0.5 rounded-full">{post.cat}</span>
                    <span>{post.read} read</span>
                  </div>
                  <h3 className="font-display text-lg font-bold group-hover:text-sage-600 transition">{post.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Email CTA ─── */}
      <section className="py-24 bg-sage-800 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Start Your Switch</h2>
            <p className="text-sage-300 text-lg mb-8">Get our free &ldquo;5 Easiest Zero-Waste Swaps&rdquo; guide plus weekly tips. No spam, unsubscribe anytime.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-full text-sage-900 bg-white placeholder:text-sage-400 outline-none focus:ring-2 focus:ring-sage-400"
              />
              <button className="bg-cream-400 text-sage-900 px-6 py-3 rounded-full font-semibold hover:bg-cream-300 transition whitespace-nowrap">
                Get Free Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-sage-900 text-sage-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="font-display text-xl font-bold text-white mb-4 block">Pure Switch Co</span>
              <p className="text-sm leading-relaxed">Practical guides for zero-waste personal care. Making the sustainable switch one step at a time.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Guides</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-white transition">30-Day Challenge</a></li>
                <li><a href="#products" className="hover:text-white transition">DIY Recipe Book</a></li>
                <li><a href="#products" className="hover:text-white transition">Monthly Membership</a></li>
                <li><a href="#products" className="hover:text-white transition">Travel Kit Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sage-800 pt-8 text-sm text-center">
            &copy; 2026 Pure Switch Co. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
