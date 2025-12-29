export default function App() {
  const artworks = [
    {
      id: 1,
      title: "The Last Sun Breather (Tanjiro Kamado)",
      price: "₹500",
      img: "/art1.jpg",
      sold: false,
      desc: "A powerful action artwork capturing Tanjiro Kamado in his fiery battle stance. Dynamic sword movement and vibrant flame effects bring intense energy to this piece."
    },
    {
      id: 2,
      title: "Strongest Swordsman (Zoro)",
      price: "₹500",
      img: "/art2.jpg",
      sold: false,
      desc: "A fierce portrayal of Roronoa Zoro showcasing his warrior spirit. Bold strokes and rich green tones highlight strength and determination."
    },
    {
      id: 3,
      title: "Strongest Sorcerer (Gojo Satoru)",
      price: "₹500",
      img: "/art3.jpg",
      sold: false,
      desc: "A stylish and intense portrait of Gojo Satoru. Sharp blue eyes, smooth color blending, and bold anime aesthetics make it a collector’s piece."
    },
    {
      id: 4,
      title: "shadow monarch sung jinwoo",
      price: "₹500",
      img: "/art4.jpg",
      sold: false,
      desc: "This striking anime artwork features an intense portrait of a powerful sorcerer, illustrated with bold lines and expressive detailing. The dominant purple background enhances the dramatic mood, while the sharp eyes and flowing hair bring depth and emotion to the character. Carefully blended alcohol markers create smooth gradients and strong contrasts, highlighting the character’s strength and mysterious aura. Finished with clean outlines and vibrant colors, this piece reflects precision, creativity, and a true anime aesthetic—perfect for collectors and anime enthusiasts. "
    },
    {
      id: 5,
      title: "founding Titan eren Yeager ",
      price: "₹500",
      img: "/art5.jpg",
      sold: false,
      desc: "A dark and emotional portrait reflecting inner conflict, strength, and determination through intense expression "
    },
    {
      id: 6,
      title: "okarun",
      price: "₹500",
      img: "/art6.jpg",
      sold: false,
      desc: "A bold and dynamic artwork showcasing intensity and sharp anime aesthetics with powerful color contrasts."
    },
    {
      id: 7,
      title: " Naruto uzumaki",
      price: "₹500",
      img: "/art7.jpg",
      sold: false,
      desc: " An energetic illustration highlighting Naruto’s never-give-up spirit and iconic ninja determination. "
    },
    {
      id: 8,
      title: " king of curses ryomen Sukuna",
      price: "₹500",
      img: "/art8.jpg",
      sold: false,
      desc: "A striking and intense portrait emphasizing Sukuna’s dark power, dominance, and menacing presence. "
    },
    {
      id: 9,
      title: " future pirate king Monkey D luffy",
      price: "₹500",
      img: "/art9.jpg",
      sold: false,
      desc: "A vibrant and cheerful artwork capturing Luffy’s fearless attitude and adventurous soul."
    },
    {
      id: 10,
      title: "Hunter X Rumi",
      price: "₹300",
      img: "/art10.jpg",
      sold: false,
      desc: "A stylish anime portrait with soft tones and expressive detailing, capturing elegance and calm confidence. "
    },
    {
      id: 11,
      title: " first sun breathing user yorichii tsugikuni",
      price: "₹500",
      img: "/art11.jpg",
      sold: false,
      desc: "A striking portrait of Yoriichi Tsugikuni, capturing his calm yet unstoppable presence as the legendary Sun Breathing swordsman. The flowing red tones, intense gaze, and refined details reflect his unmatched strength, discipline, and timeless legacy."
    },
    {
      id: 12,
      title: " tanjiro kamado",
      price: "₹500",
      img: "/art12.jpg",
      sold: false,
      desc: "A powerful action artwork capturing Tanjiro Kamado in his fiery battle stance. Dynamic sword movement and vibrant flame effects bring intense energy to this piece. "
    },
    {
      id: 13,
      title: " honoured one gojo satoru",
      price: "₹500",
      img: "/art13.jpg",
      sold: false,
      desc: "A stylish and intense portrait of Gojo Satoru. Sharp blue eyes, smooth color blending, and bold anime aesthetics make it a collector’s piece."
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
      <section
        style={{
          padding: 20,
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}
      >
        {artworks.map((art) => (
          <div
            key={art.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              overflow: "hidden"
            }}
          >
            {/* Image with zoom & badges */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={art.img}
                alt={art.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              {/* Price badge */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "#fff",
                  padding: "5px 10px",
                  borderRadius: 20,
                  fontWeight: "bold",
                  fontSize: 14
                }}
              >
                {art.price}
              </div>

              {/* Sold out badge */}
              {art.sold && (
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "red",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: 5,
                    fontSize: 12
                  }}
                >
                  SOLD OUT
                </div>
              )}
            </div>

            {/* Details */}
            <div style={{ padding: 15 }}>
              <h3>{art.title}</h3>

              <p style={{ fontSize: "14px", color: "#555" }}>
                {art.desc}
              </p>

              <p style={{ fontSize: "14px", color: "#555" }}>
                Size: A5 <br />
                Quality: A4 sheet quality <br />
                Finish: Laminated <br />
                Made with: Alcohol markers, pencil colours & acrylic markers
              </p>

              <a
                href={
                  art.sold
                    ? "#"
                    : "https://wa.me/919876614958?text=Hello%20Cartoon%20Artist%2010M,%20I%20want%20to%20buy%20this%20anime%20artwork"
                }
                target="_blank"
                rel="noreferrer"
              >
                <button
                  disabled={art.sold}
                  style={{
                    width: "100%",
                    padding: 10,
                    background: art.sold ? "#999" : "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: 5,
                    cursor: art.sold ? "not-allowed" : "pointer"
                  }}
                >
                  {art.sold ? "Sold Out" : "Buy on WhatsApp"}
                </button>
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
        <p>Instagram: @kanishkv_456</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: 20, textAlign: "center", background: "#eee" }}>
        © 2025 Cartoon Artist 10M
      </footer>
    </div>
  );
                    }
