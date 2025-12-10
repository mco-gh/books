import React, { useState } from 'react';
import InteractiveBookshelf from './components/InteractiveBookshelf';
import { STATIC_BOOKS, STATIC_IMAGE_SRC } from './data/staticData';
import { Library } from 'lucide-react';

const App: React.FC = () => {
  // Use static data directly
  const [books] = useState(STATIC_BOOKS);
  const [imageSrc] = useState(STATIC_IMAGE_SRC);

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
              My Virtual Bookshelf
            </h1>
          </div>
          <div className="text-sm text-gray-500 font-medium">
             Static Mode
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full flex flex-col items-center">
            {/* Note about the image file */}
            <div className="mb-4 text-gray-500 text-sm bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                Displaying <b>mco.dev/img/programming.jpg</b> with pre-generated AI metadata.
            </div>

            <InteractiveBookshelf 
              imageSrc={imageSrc} 
              books={books} 
            />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Virtual Bookshelf Viewer.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;