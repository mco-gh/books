import React, { useState } from 'react';
import InteractiveBookshelf from './components/InteractiveBookshelf';
import { SHELVES } from './data/staticData';
import { Library, X } from 'lucide-react';

const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
              <Library className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              mcoBooks - Marc's Virtual Bookshelf
            </h1>
          </div>
          <button
            onClick={() => setIsAboutOpen(true)}
            className="text-sm text-gray-300 hover:text-white font-medium bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 px-4 py-1.5 rounded-full transition-all"
          >
             About
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 space-y-12">
        <div className="w-full flex flex-col items-center">
            {SHELVES.map((shelf) => (
                <InteractiveBookshelf 
                    key={shelf.id}
                    title={shelf.title}
                    imageSrc={shelf.image} 
                    books={shelf.books} 
                />
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025, 2026 <a href="https://mco.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Marc Cohen</a>.</p>
        </div>
      </footer>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           <div 
             className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
             onClick={() => setIsAboutOpen(false)}
           ></div>
           
           <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative z-10 animate-fade-in-up">
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                 <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                    <Library size={28} />
                 </div>
                 <h2 className="text-2xl font-bold text-white">About mcoBooks</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to this interactive experiment! This app transforms a standard photo of my bookshelf into a queryable, digital library.
                </p>
                <p>
                  I built this using the <strong>Gemini 2.5 Flash API</strong> to analyze the image and generate precise vector coordinates for every book spine, allowing for the interactions you see here.
                </p>
                <p>
                  Curious about the code or want to read more about my projects? Check out my blog:
                </p>
                
                <div className="pt-2">
                    <a 
                      href="https://mco.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                      Visit mco.dev
                    </a>
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;