export default function App() {
  const artworks = [
    {
      id: 1,
      title: "the last sun breather (tanjiro kamado)",
      price: "₹500",
      img: "/art1.jpg"
      desc: "A powerful action artwork capturing Tanjiro Kamado in his fiery battle stance. The dynamic sword movement and vibrant flame effects bring energy and emotion to the piece, making it a standout anime artwork. "
    },
    {
      id: 2,
      title: "strongest swordmen (zoro)",
      price: "₹500",
      img: "/art2.jpg"
      desc:" A fierce and determined portrayal of Roronoa Zoro, showcasing his warrior spirit and swordsmanship. The bold strokes and rich green tones add depth and strength to the artwork, ideal for One Piece fans."
    },
    {
      id: 3,
      title: "strongest sorcerer (gojo saturo)",
      price: "₹500",
      img: "/art3.jpg"
      desc: "stylish and intense portrait of Gojo Satoru, highlighting his sharp blue eyes and cool attitude. The smooth color blending and fine detailing give this artwork a bold anime aesthetic, perfect for anime lovers and collectors"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Header */}
      <header style={{ padding: 20, background: "#fff", borderBottom: "1px solid #ddd" }}>
        <h1>🎨 Cartoon Artist 10M</h1>
      </header>

      {/* Hero */}
      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Anime Art Paintings for True Fans</h2>
        <p>Exclusive hand-painted anime artworks</p>
      </section>

      {/* Gallery */}
      <section style={{ padding: 20, display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {artworks.map((art) => (
          <div key={art.id} style={{ border: "1px solid #ddd", borderRadius: 10 }}>
            <img src={art.img} alt={art.title} style={{ width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            <h3>{art.title}</h3>

            <p style={{ fontSize: "14px", color: "#555" }}>
            Size: A5 <br />
            Quality: A4 sheet quality <br />
            Finish: Laminated <br />
            Made with: Alcohol markers, pencil colours & acrylic markers
            </p>
            <div style={{ padding: 15 }}>
              <h3>{art.title}</h3>
              <p>{art.price}</p>
              <a
                href="https://wa.me/919876614958?text=Hello%20Cartoon%20Artist%2010M,%20I%20want%20to%20buy%20this%20anime%20artwork"
                target="_blank"
                rel="noreferrer"
              >
                <button style={{ width: "100%", padding: 10 }}>Buy on WhatsApp</button>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* About */}
      <section style={{ padding: 40, background: "#f9f9f9", textAlign: "center" }}>
        <h2>About Me</h2>
        <p>
          I am Cartoon Artist 10M, creating original anime-style painted artworks
          inspired by anime culture and storytelling.
        </p>
      </section>

      {/* Contact */}
      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: cartoonartist10m@gmail.com</p>
        <p>Instagram: @cartoonartist10m</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: 20, textAlign: "center", background: "#eee" }}>
        © 2025 Cartoon Artist 10M
      </footer>

    </div>
  );
                      }
