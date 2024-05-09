import React from 'react';

const ProtectedPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <header style={{ padding: '20px', backgroundColor: '#f2f2f2', position: 'sticky', top: 0, zIndex: 999 }}>
        <h1 style={{ textAlign: 'center', color: '#333', margin: 0 }}>Welcome to the Blogs</h1>
      </header>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '10px', marginBottom: '50px' }}>
        <div className="blog" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px', marginTop: '0' }}>Discovering the World: Embarking on the Journey of Travel Exploration by-NebulaNomad
</h2>
          <img src="https://static.wixstatic.com/media/11062b_d7739529f2c246fab664dd7609b60134~mv2.jpeg/v1/fill/w_925,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d7739529f2c246fab664dd7609b60134~mv2.jpeg" alt="Blog Post Image" style={{ marginBottom: '10px', display: 'block', maxWidth: '100%' }} />
          <p style={{ marginBottom: '10px' }}>Ah, the allure of travel – an enchanting call beckoning adventurers to distant lands, captivating cultures, and awe-inspiring landscapes. It's a pursuit that ignites the soul, broadens the mind, and leaves indelible imprints of memories that last a lifetime.</p>
          <a href="https://www.leisureapes.com/post/discovering-the-world-embarking-on-the-journey-of-travel-exploration" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            read more...
          </a>
        </div>
        <div className="blog" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2 style={{ marginBottom: '10px', marginTop: '0', color: '#333' }}>Meet Larry Connor, the thrill-seeking luxury real estate billionaire giving Blackstone, Brookfield a run for their money
</h2>
        <img src="https://www.forbesindia.com/media/images/2024/May/img_233739_changpengzhao_gettyimages-1795092396_bg.jpg" alt="Blog Post Image" style={{ marginBottom: '10px', display: 'block', maxWidth: '100%' }} />
        <p style={{ marginBottom: '10px' }}>Thrill-seeking billionaire Larry Connor made a fortune in luxury apartments by obsessing over the smallest transaction. His strategy has paid off for years, but now that the market has shifted, how close to the edge is he willing to go?</p>
          <a href="https://www.forbesindia.com/article/billionaires/meet-larry-connor-the-thrillseeking-luxury-real-estate-billionaire-giving-blackstone-brookfield-a-run-for-their-money/92925/1" target='blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          read more...
          </a>
        </div>
        <div className="blog" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2 style={{ marginBottom: '10px', marginTop: '0' }}>Embracing the Future: Digital Automation at Home</h2>
          <img src="https://static.wixstatic.com/media/11062b_b8e8cc5a0f14423590591aac8e0672f5~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b8e8cc5a0f14423590591aac8e0672f5~mv2.jpg" alt="Blog Post Image" style={{ marginBottom: '10px', display: 'block', maxWidth: '100%' }} />
          <p style={{ marginBottom: '10px' }}>In the fast-paced digital era, technology has become an integral part of our daily lives, transforming the way we work, communicate, and even manage our homes. Digital automation at home has emerged as a revolutionary trend, offering convenience, efficiency, and a touch of futuristic living. </p>
          <a href="https://www.leisureapes.com/post/embracing-the-future-digital-automation-at-home" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            read more...
          </a></div>
      </div>
      <div className="blog" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px', marginTop: '0' }}>Unleash Your Style: Fitville's Spectacular Discounts Await!</h2>
          <img src="https://static.wixstatic.com/media/604354_ecc691bb0f3b40de9b73b6e6715870de~mv2.png/v1/fill/w_925,h_461,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/604354_ecc691bb0f3b40de9b73b6e6715870de~mv2.png" alt="Blog Post Image" style={{ marginBottom: '10px', display: 'block', maxWidth: '100%' }} />
          <p style={{ marginBottom: '10px' }}>In the world of fashion, finding the perfect blend of comfort and style often comes with a hefty price tag. However, at Fitville, we believe that fabulous footwear should not break the bank. Get ready to elevate your style without compromising your budget as we unveil the spectacular discounts that make Fitville your go-to destination for fashion-forward and budget-friendly footwear.</p>
          <a href="https://www.forbesindia.com/article/cryptocurrency/bitcoin-trader-laments-70-million-loss-from-incorrect-address-entry/92967/1" target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            read more...
          </a>  </div>
      <footer style={{ textAlign: 'center', backgroundColor: '#f2f2f2', padding: '20px 0', position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 999 }}>
        <nav>
          <a href="LoginForm.js" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '10px 20px', color: '#333', backgroundColor: '#fff', border: '1px solid #333', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default ProtectedPage;
