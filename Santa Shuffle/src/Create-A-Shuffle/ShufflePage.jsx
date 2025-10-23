import React from 'react'
import { Link } from 'react-router-dom'

const ShufflePage = () => {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(180deg, #121E99 0%, #8FFFFF 100%)'
    }}>
      
      {/* Home Button */}
      <Link to="/" className="absolute top-6 left-6 z-10">
        <button className="bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 active:shadow-xl active:shadow-white/30 active:scale-95 border border-white/30">
          ← Home
        </button>
      </Link>

      {/* Page Title */}
      <div className="text-center pt-20 pb-8">
        <h1 className="text-6xl font-bold font-sans text-white">Santa Shuffle</h1>
      </div>

      {/* Three Column Dashboard */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Shuffle Details */}
          <div className="bg-red-900/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Shuffle Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Event Name</label>
                <input 
                  type="text" 
                  placeholder="Secret Santa 2024 !!!" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Description</label>
                <textarea 
                  placeholder="Description..." 
                  rows="3"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Exchange Date</label>
                <input 
                  type="date" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Exchange Name</label>
                <input 
                  type="text" 
                  placeholder="Name of exchange" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>
            </div>
          

          {/* Column 2: Advanced Settings */}
          <div className="bg-green-900/30 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Advanced Settings</h2>
            
            <div className="space-y-4">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                Draw Restrictions BTN
              </button>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                Item Restrictions BTN
              </button>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                Allow name sharing Y/N
              </button>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                Allow host to view draws Y/N
              </button>
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-xl active:scale-95 text-lg">
                Submit Shuffle Form
              </button>
            </div>
          </div>

          {/* Column 3: Invite Friends & Family */}
          <div className="bg-green-900/30 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Invite Friends & Family</h2>
            
            <div className="space-y-3">
              {/* Sample roster entries */}
              <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                <span className="text-white font-medium">John Doe</span>
                <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                <span className="text-white font-medium">Jane Smith</span>
                <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                <span className="text-white font-medium">Mike Johnson</span>
                <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              {/* Add new person button */}
              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 border-2 border-dashed border-white/30">
                + Add Person
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ShufflePage