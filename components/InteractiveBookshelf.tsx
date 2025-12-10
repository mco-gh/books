import React, { useState, useMemo, useRef, useEffect } from 'react';
import { BookSpine } from '../types';
import { Info, X, ShoppingCart, ExternalLink, BookOpen } from 'lucide-react';

interface InteractiveBookshelfProps {
  title: string;
  imageSrc: string;
  books: BookSpine[];
}

const InteractiveBookshelf: React.FC<InteractiveBookshelfProps> = ({ title, imageSrc, books }) => {
  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Helper to convert normalized 0-1000 coordinates to SVG polygon string
  const getPointsString = (polygon: { x: number; y: number }[]) => {
    return polygon.map(p => `${p.x},${p.y}`).join(' ');
  };

  const hoveredBook = useMemo(() => 
    books.find(b => b.id === hoveredBookId), 
    [books, hoveredBookId]
  );

  const selectedBook = useMemo(() => 
    books.find(b => b.id === selectedBookId), 
    [books, selectedBookId]
  );

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedBookId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const getPurchaseLink = (book: BookSpine) => {
    if (book.purchaseUrl) return book.purchaseUrl;
    // Generic Google Search to avoid favoring specific vendors
    return `https://www.google.com/search?q=${encodeURIComponent("buy " + (book.title || "") + " " + (book.author || ""))}`;
  };

  const getCoverImage = (book: BookSpine) => {
    if (book.coverImage) return book.coverImage;
    // High quality text-based placeholder
    return `https://placehold.co/600x900/1e293b/cbd5e1/png?text=${encodeURIComponent(book.title || "Book Cover")}&font=lora`;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[57.6rem] mx-auto p-4 animate-fade-in relative mb-12 last:mb-0">
      
      {/* Floating Tooltip (Hover) */}
      {hoveredBook && !selectedBook && (
        <div 
            className="fixed z-40 pointer-events-none bg-gray-900/95 backdrop-blur-sm border border-gray-600 shadow-xl px-4 py-3 rounded-lg flex flex-col gap-1 transition-opacity duration-150 ease-out"
            style={{ 
                left: mousePos.x + 20, 
                top: mousePos.y + 20,
                maxWidth: '300px'
            }}
        >
            <span className="text-white font-bold text-sm leading-tight">
                {hoveredBook.title || "Unknown Title"}
            </span>
            {hoveredBook.author && (
                <span className="text-blue-400 text-xs font-medium">
                    {hoveredBook.author}
                </span>
            )}
            <span className="text-gray-500 text-[10px] uppercase mt-1">Click for details</span>
        </div>
      )}

      {/* Control Bar */}
      <div className="w-full flex flex-col items-start mb-6 bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <div className="flex items-center space-x-2">
            <Info className="text-blue-400" size={18} />
            <span className="text-sm text-gray-300 font-medium">
                Hover to preview, click a spine to view details.
            </span>
        </div>
      </div>

      <div className="w-full">
        {/* Interactive Image Area */}
        <div 
            ref={containerRef}
            className="relative w-full shadow-2xl rounded-lg overflow-hidden bg-black group border border-gray-800"
            onMouseMove={handleMouseMove}
        >
            <img 
                src={imageSrc} 
                alt={`${title} Bookshelf`} 
                className="w-full h-auto object-contain block select-none"
            />
            
            {/* SVG Overlay */}
            <svg 
                viewBox="0 0 1000 1000" 
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none" 
            >
                {books.map((book) => (
                    <polygon
                        key={book.id}
                        points={getPointsString(book.polygon)}
                        vectorEffect="non-scaling-stroke"
                        className={`cursor-pointer transition-all duration-150 ease-out
                            ${(hoveredBookId === book.id || selectedBookId === book.id)
                                ? 'fill-blue-500/30 stroke-blue-400 stroke-[3]' 
                                : 'fill-transparent stroke-transparent hover:fill-white/10'
                            }`}
                        onMouseEnter={() => setHoveredBookId(book.id)}
                        onMouseLeave={() => setHoveredBookId(null)}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBookId(book.id);
                        }}
                    />
                ))}
            </svg>
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedBookId(null)}
            ></div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 animate-fade-in-up flex flex-col md:flex-row max-h-[90vh]">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedBookId(null)}
                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
                >
                    <X size={24} />
                </button>

                {/* Left: Book Cover Image */}
                <div className="w-full md:w-2/5 bg-gray-900 flex items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-600 to-purple-800"></div>
                    <img 
                        src={getCoverImage(selectedBook)}
                        alt={selectedBook.title}
                        className="w-[10.8rem] shadow-2xl rounded-md relative z-10 transform transition-transform hover:scale-105 duration-500"
                        style={{ boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.7)' }}
                    />
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-3/5 p-8 flex flex-col overflow-y-auto">
                    <div className="mb-auto">
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                            <BookOpen size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Book Details</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                            {selectedBook.title || "Unknown Title"}
                        </h2>
                        
                        <p className="text-xl text-gray-300 font-medium mb-6">
                            by {selectedBook.author || "Unknown Author"}
                        </p>

                        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 mb-8">
                            <h4 className="text-gray-400 text-xs uppercase font-bold mb-2">Visual Description</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {selectedBook.colorDescription}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <a 
                            href={getPurchaseLink(selectedBook)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 group"
                        >
                            <ShoppingCart size={20} />
                            <span>Find Online</span>
                            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <p className="text-center text-gray-500 text-xs mt-3">
                            Opens in a new tab
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default InteractiveBookshelf;