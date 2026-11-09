import React, { useState, useEffect, useRef } from 'react' 
import './App.css'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Timer from './components/Timer' 

import { getSavedGallery } from './components/AgencyData'

export default function App() {
  const [products, setProducts] = useState(getSavedGallery);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    localStorage.setItem("galleria_exhibit_store", JSON.stringify(products));
  }, [products]); 

  const handleAddArtPiece = (e) => {
    e.preventDefault();
    const brandNewArtPiece = {
      id: Date.now(),
      title: title,
      artist: artist,
      year: parseInt(year),
      description: desc || "No description provided for this piece.",
      image: image || "https://www.pictorem.com/uploads/collection/N/NE8CBR2MRU/900_Towseef-Dar_Nairobi6.jpg"
    };

    setProducts([...products, brandNewArtPiece]);
    setTitle(""); setArtist(""); setYear(""); setDesc(""); setImage("");
  };

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="agency-app min-vh-100 bg-light" style={{ paddingBottom: '80px' }}>
      
      {isAdminOpen && (
        <main className="container my-4">
          <section className="bg-white border rounded p-4 mx-auto shadow-sm" style={{ maxWidth: '600px' }}>
            <h4 className="fw-bold mb-3 text-dark">Curator Desk</h4>
            <form onSubmit={handleAddArtPiece} className="d-flex flex-column gap-3">
              <input type="text" className="form-control" placeholder="Art Piece Title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
              <input type="text" className="form-control" placeholder="Artist Name..." value={artist} onChange={(e) => setArtist(e.target.value)} required />
              <input type="number" className="form-control" placeholder="Year Created..." value={year} onChange={(e) => setYear(e.target.value)} required />
              <input type="text" className="form-control" placeholder="Image URL link..." value={image} onChange={(e) => setImage(e.target.value)} />
              <textarea className="form-control" rows="2" placeholder="Archival Description..." value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
              <button type="submit" className="btn btn-primary fw-bold w-100">Publish to Gallery</button>
            </form>
          </section>
        </main>
      )}

      <NavBar 
        onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)} 
        searchInput={searchQuery}
        onSearchChange={setSearchQuery}
        isGalleryOpen={isGalleryOpen} 
      />

      <Hero products={products} onViewExhibition={scrollToGallery} />

      <Carousel ref={galleryRef} products={filteredProducts} />

      <Timer onStatusChange={setIsGalleryOpen} />

      <Footer />
    </div>
  )
}
