export interface Coordinate {
  x: number;
  y: number;
}

export interface BookSpine {
  id: string;
  title?: string;
  author?: string;
  colorDescription?: string;
  polygon: Coordinate[]; // Array of points defining the spine shape
  coverImage?: string;
  purchaseUrl?: string;
}

export interface AnalysisResult {
  books: BookSpine[];
}