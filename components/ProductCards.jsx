'use client'

import { useState } from 'react'

export default function ProductCards() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')

  const phase1Products = [
    {
      icon: "☀️",
      name: "EQ:Focus",
      description: "Dial in clean, sustained focus—no crash, no jitters. Supports cognitive clarity when it matters most.",
      launch: "Launch: April 2026",
      ingredients: ["Citicoline", "Lion's Mane", "Bacopa", "L-Theanine", "Rhodiola"]
    },
    {
      icon: "🌙",
      name: "EQ:Restore",
      description: "Wind down naturally. Support recovery, sleep quality, and memory consolidation for tomorrow's demands.",
      launch: "Launch: April 2026",
      ingredients: ["Mag L-Threonate", "Ashwagandha", "L-Theanine", "Apigenin", "Glycine"]
    }
  ]

  const phase2Products = [
    {
      icon: "⚡",
      name: "EQ:Drive",
      description: "Turn on clean, sustained drive for heavy lift days—no jitters.",
      launch: "Launch: Q3 2026",
      ingredients: ["Cordyceps", "Beta-Alanine", "Citrulline"]
    },
    {
      icon: "🛡️",
      name: "EQ:Foundations",
      description: "Cover the gaps so your brain runs clean. Core omega-3s with D3/K2 for daily resilience.",
      launch: "Launch: Q3 2026",
      ingredients: ["Omega-3", "Vitamin D3", "Vitamin K2"]
    },
    {
      icon: "🛡️",
      name: "EQ:Shield",
      description: "Daily defense for recovery and joint comfort—inside-out resilience.",
      launch: "Launch: Q4 2026",
      ingredients: ["Curcumin", "Boswellia", "Ginger"]
    },
    {
      icon: "👁️",
      name: "EQ:Vision",
      description: "Relieve and protect overworked eyes from screens and glare.",
      launch: "Launch: Q4 2026",
      ingredients: ["Lutein", "Zeaxanthin", "Astaxanthin"]
    }
  ]

  const openModal = (productName) => {
    setSelectedProduct(productName)
    setModalOpen(true)
  }

  return (
    <section className="py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Phase 1 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#E8F5F3] text-[#2A9D8F] px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Phase 1 • Launch April 2026
            </span>
            <h2 className="text-3xl font-semibold text-[#1A2332]">
              The 24/7 System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phase1Products.map((product, index) => (
              <div 
                key={index}
                className="bg-white border border-[#E8EDF2] rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#2A9D8F]"
              >
                <div className="text-5xl mb-6 text-center">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-[#1A2332]">
                  {product.name}
                </h3>
                <p className="text-[#5A6C7D] mb-4 text-[0.95rem] leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm text-[#2A9D8F] font-semibold mb-6 text-center">
                  {product.launch}
                </p>

                {/* Ingredients */}
                <div className="bg-[#F8FAFB] p-4 rounded-xl mb-6">
                  <h4 className="text-xs text-[#5A6C7D] font-semibold uppercase tracking-wider mb-3">
                    Key Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-white border border-[#E8EDF2] text-[#2A9D8F] px-3 py-1.5 rounded-full font-medium hover:bg-[#E8F5F3] hover:border-[#2A9D8F] transition-all cursor-pointer"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => openModal(product.name)}
                  className="w-full py-4 bg-[#2A9D8F] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#238276] hover:-translate-y-0.5"
                >
                  Get Notified
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F8FAFB] text-[#5A6C7D] px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Phase 2 • Coming Q3-Q4 2026
            </span>
            <h2 className="text-3xl font-semibold text-[#1A2332]">
              Complete Wellness Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phase2Products.map((product, index) => (
              <div 
                key={index}
                className="bg-white border border-[#E8EDF2] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="text-4xl mb-4 text-center">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-[#1A2332]">
                  {product.name}
                </h3>
                <p className="text-[#5A6C7D] mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="text-xs text-[#2A9D8F] font-semibold mb-4 text-center">
                  {product.launch}
                </p>
                <button 
                  onClick={() => openModal(product.name)}
                  className="w-full py-3 bg-[#2A9D8F] text-white rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[#238276]"
                >
                  Get Notified
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-[#1A2332]/70 z-[2000] flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-10 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-[#5A6C7D] text-2xl hover:text-[#2C3E50] transition-colors"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center text-[#1A2332]">
              Get Early Access
            </h3>
            <p className="text-[#5A6C7D] mb-8 text-center">
              Be the first to know when {selectedProduct} launches
            </p>
            <form className="flex flex-col gap-4">
              <input 
                type="email"
                placeholder="Your email"
                className="px-4 py-4 rounded-lg border border-[#E8EDF2] bg-[#F8FAFB] text-[#2C3E50] focus:outline-none focus:border-[#2A9D8F] focus:bg-white transition-all"
                required
              />
              <input 
                type="text"
                placeholder="Your name (optional)"
                className="px-4 py-4 rounded-lg border border-[#E8EDF2] bg-[#F8FAFB] text-[#2C3E50] focus:outline-none focus:border-[#2A9D8F] focus:bg-white transition-all"
              />
              <button 
                type="submit"
                className="bg-[#2A9D8F] text-white py-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#238276] hover:-translate-y-0.5"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}