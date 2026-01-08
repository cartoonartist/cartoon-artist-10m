export default function App() {
  const artworks = [
    {
      id: 1,
      title: "The Last Sun Breather (Tanjiro Kamado)",
      price: "₹400",
      img: "/art1.jpg",
      sold: false,
      desc: "A powerful action artwork capturing Tanjiro Kamado in his fiery battle stance. Dynamic sword movement and vibrant flame effects bring intense energy to this piece."
    },
    {
      id: 2,
      title: "Strongest Swordsman (Zoro)",
      price: "₹400",
      img: "/art2.jpg",
      sold: false,
      desc: "A fierce portrayal of Roronoa Zoro showcasing his warrior spirit. Bold strokes and rich green tones highlight strength and determination."
    },
    {
      id: 3,
      title: "Strongest Sorcerer (Gojo Satoru)",
      price: "₹400",
      img: "/art3.jpg",
      sold: false,
      desc: "A stylish and intense portrait of Gojo Satoru. Sharp blue eyes, smooth color blending, and bold anime aesthetics make it a collector’s piece."
    },
    {
      id: 4,
      title: "shadow monarch sung jinwoo",
      price: "₹400",
      img: "/art4.jpg",
      sold: false,
      desc: "This striking anime artwork features an intense portrait of a powerful sorcerer, illustrated with bold lines and expressive detailing. The dominant purple background enhances the dramatic mood, while the sharp eyes and flowing hair bring depth and emotion to the character. Carefully blended alcohol markers create smooth gradients and strong contrasts, highlighting the character’s strength and mysterious aura. Finished with clean outlines and vibrant colors, this piece reflects precision, creativity, and a true anime aesthetic—perfect for collectors and anime enthusiasts. "
    },
    {
      id: 21,
      title: " young gojo satoru",
      price: "₹400",
      img: "/art21.jpg",
      sold: false,
      desc: "A stylish and intense portrait of young and prime Gojo Satoru. Sharp blue eyes, smooth color blending, and bold anime aesthetics make it a collector’s piece."
    },
    {
      id: 5,
      title: "founding Titan eren Yeager ",
      price: "₹400",
      img: "/art5.jpg",
      sold: false,
      desc: "A dark and emotional portrait reflecting inner conflict, strength, and determination through intense expression "
    },
    {
      id: 6,
      title: "okarun",
      price: "₹400",
      img: "/art6.jpg",
      sold: false,
      desc: "A bold and dynamic artwork showcasing intensity and sharp anime aesthetics with powerful color contrasts."
    },
    {
      id: 7,
      title: " Naruto uzumaki",
      price: "₹400",
      img: "/art7.jpg",
      sold: false,
      desc: " An energetic illustration highlighting Naruto’s never-give-up spirit and iconic ninja determination. "
    },
    {
      id: 8,
      title: " king of curses ryomen Sukuna",
      price: "₹400",
      img: "/art8.jpg",
      sold: false,
      desc: "A striking and intense portrait emphasizing Sukuna’s dark power, dominance, and menacing presence. "
    },
    {
      id: 51,
      title: " sayian prince vegeta",
      price: "₹400",
      img: "/art51.jpg",
      sold: false,
      desc: "A vibrant and cheerful artwork capturing super sayian vegeta fearless attitude and sayian pride."
    },
    {
      id: 49,
      title: " strongest worrier of universe Goku",
      price: "₹400",
      img: "/art49.jpg",
      sold: false,
      desc: "A powerful illustration of Goku in a battle-ready stance. Fiery tones and sharp shadows emphasize his warrior spirit, discipline, and endless drive to surpass his limits and protect the universe. "
    },
    {
      id: 53,
      title: " tanjiro kamado",
      price: "₹400",
      img: "/art53.jpg",
      sold: false,
      desc: " A joyful portrait of Tanjiro Kamado, capturing his pure heart and unbreakable spirit. Warm colors and expressive details highlight his resilience, kindness, and determination as a demon slayer who fights to protect others."
    },
    {
      id: 43,
      title: " DEKU",
      price: "₹400",
      img: "/art43.jpg",
      sold: false,
      desc: " A thoughtful portrait of Deku, showing determination mixed with vulnerability. Soft skies and green tones highlight his growth from a timid boy into a hopeful hero driven by courage and responsibility."
    },
    {
      id: 44,
      title: " muichiro tokito",
      price: "₹400",
      img: "/art44.jpg",
      sold: false,
      desc: " A calm yet powerful depiction of Muichiro Tokito, surrounded by mist-like blues. His distant gaze and flowing hair symbolize quiet strength, focus, and the deadly precision of the Mist Hashira."
    },
    {
      id: 46 ,
      title: " luffy vs kaido",
      price: "₹800",
      img: "/art46.jpg",
      sold: false,
      desc: " An intense action scene showing Monkey D. Luffy facing Kaido’s overwhelming power. Dynamic motion, bold blues, and fierce expressions reflect the clash of wills between freedom and tyranny in this epic battle. SIZE : A4 "
    },
    {
      id: 39,
      title: " king of hell zoro",
      price: "₹400",
      img: "/art39.jpg",
      sold: false,
      desc: "A focused and intense portrayal of Zoro, capturing his unwavering loyalty and strength. The green palette and sharp lines reflect his iron will, discipline, and the path of a true swordsman."
    },
    {
      id: 47,
      title: " lyffy gear 5",
      price: "₹400",
      img: "/art47.jpg",
      sold: false,
      desc: " An energetic depiction of Luffy in Gear 5, bursting with freedom and chaos. Vibrant colors and exaggerated expressions capture his limitless imagination, playful power, and god-like transformation."
    },
    {
      id: 9,
      title: " future pirate king Monkey D luffy",
      price: "₹400",
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
      price: "₹400",
      img: "/art11.jpg",
      sold: false,
      desc: "A striking portrait of Yoriichi Tsugikuni, capturing his calm yet unstoppable presence as the legendary Sun Breathing swordsman. The flowing red tones, intense gaze, and refined details reflect his unmatched strength, discipline, and timeless legacy."
    },
    {
      id: 52,
      title: " Goku ultra instinct ",
      price: "₹400",
      img: "/art52.jpg",
      sold: false,
      desc: "A powerful illustration of Goku in a battle-ready stance. Fiery tones and sharp shadows emphasize his warrior spirit, discipline, and endless drive to surpass his limits and protect the universe. "
    },
    {
      id:  50,
      title: " love hashira mitsuri kanroji",
      price: "₹400",
      img: "/art50.jpg",
      sold: false,
      desc: " A graceful and vibrant portrayal of Mitsuri Kanroji, combining strength with warmth. Soft pink hues and fluid lines reflect her loving nature, elegance, and the hidden power of the Love Hashira."
    },
    {
      id: 48 ,
      title: " pirate hunter zoro",
      price: "₹400",
      img: "/art48.jpg",
      sold: false,
      desc: "A focused and intense portrayal of Zoro, capturing his unwavering loyalty and strength. The green palette and sharp lines reflect his iron will, discipline, and the path of a true swordsman."
    },
    {
      id: 41,
      title: " yoichi isagi",
      price: "₹400",
      img: "/art41.jpg",
      sold: false,
      desc: "A focused and intense portrayal of Yoichi Isagi, capturing his sharp vision and competitive drive. The artwork reflects his evolving mindset, strategic brilliance, and relentless pursuit of becoming the ultimate striker. "
    },
    {
      id: 40,
      title: " gojo satoru.",
      price: "400",
      img: "/art40.jpg",
      sold: false,
      desc: "A stylish and intense portrait of Gojo Satoru. Sharp blue eyes, smooth color blending, and bold anime aesthetics make it a collector’s piece."
    },
    {
      id: 42,
      title: " momo ayase ",
      price: "₹400",
      img: "/art42.jpg",
      sold: false,
      desc: " A bold and expressive portrayal of Momo Ayase, blending confidence with supernatural intensity. Dynamic energy and sharp details highlight her fearless personality, psychic strength, and modern charm as she stands ready to face the unknown."
    },
    {
      id: 29 ,
      title: " inosuke hashibira ",
      price: "₹400",
      img: "/art29.jpg",
      sold: false,
      desc: "A wild and energetic depiction of Inosuke, bursting with raw power and untamed spirit. Bold strokes and dynamic motion capture his ferocity, confidence, and fearless approach to battle. "
    },
    {
      id: 28,
      title: " katsuki bakugo",
      price: "₹400",
      img: "/art28.jpg",
      sold: false,
      desc: "An explosive and intense portrayal of Katsuki Bakugo, capturing his fierce determination and volatile power. Sharp lines and fiery tones reflect his relentless drive, pride, and the raw force behind his combat style."
    },
    {
      id:26 ,
      title: " anya",
      price: "₹300",
      img: "/art26.jpg",
      sold: false,
      desc: " A cute and expressive illustration of Anya, radiating innocence and mischief. Soft colors and playful details showcase her cheerful personality, curiosity, and the charm that makes her irresistibly lovable."
    },
    {
      id: 25,
      title: " upper moon 3 akaza",
      price: "₹300",
      img: "/art25.jpg",
      sold: false,
      desc: " A menacing depiction of Akaza, embodying brutal strength and twisted honor. Bold patterns and chilling expressions highlight his martial prowess, unyielding spirit, and the deadly aura of an Upper Rank demon."
    },
    {
      id: 31,
      title: " vegeta UI",
      price: "₹400",
      img: "/art31.jpg",
      sold: false,
      desc: "A powerful depiction of Vegeta in Ultra Instinct, radiating calm fury and supreme focus. Sharp contrasts and intense energy capture his pride, discipline, and relentless evolution as he pushes beyond limits to rival the gods."
    },
    {
      id: 12,
      title: " tanjiro kamado",
      price: "₹400",
      img: "/art12.jpg",
      sold: false,
      desc: "A powerful action artwork capturing Tanjiro Kamado in his fiery battle stance. Dynamic sword movement and vibrant flame effects bring intense energy to this piece. "
    },
    {
      id: 13,
      title: " honoured one gojo satoru",
      price: "₹400",
      img: "/art13.jpg",
      sold: false,
      desc: "A stylish and intense portrait of Gojo Satoru. Sharp blue eyes, smooth color blending, and bold anime aesthetics make it a collector’s piece."
    },
    {
      id: 14,
      title: " insect hashira shinobu kocho",
      price: "₹400",
      img: "/art14.jpg",
      sold: false,
      desc: " A vibrant anime‑style portrait of Shinobu Kocho with teal hair, purple eyes, and a butterfly hair clip, set against a purple‑pink background with fluttering butterflies. The drawing uses markers and colored pencils to capture her elegant, youthful expression in a fantasy‑inspired design."
    },
    {
      id: 15,
      title: " nezuko kamado",
      price: "₹400",
      img: "/art15.jpg",
      sold: false,
      desc: "Nezuko Kamado is a character from _Demon Slayer: Kimetsu no Yaiba_. She’s a young girl turned demon who wears a pink kimono with a bamboo mouthpiece. Despite her demonic nature, she retains humanity and protects her brother, showcasing fierce loyalty and resilience in battle."
    },
    {
      id: 16,
      title: " izuku midoriya DEKU",
      price: "₹400",
      img: "/art16.jpg",
      sold: false,
      desc: "Izuku Midoriya (Deku) — a vibrant, anime‑style portrait with green‑ish hair, earnest eyes, and a determined expression. Rendered in bright markers and colored pencils, the drawing captures his signature look from _My Hero Academia_, set against a clean, blank background. "
    },
    {
      id: 17,
      title: " nezuko kamado ",
      price: "₹400",
      img: "/art17.jpg",
      sold: false,
      desc: "Nezuko Kamado is a character from _Demon Slayer: Kimetsu no Yaiba_. She’s a young girl turned demon who wears a pink kimono with a bamboo mouthpiece. Despite her demonic nature, she retains humanity and protects her brother, showcasing fierce loyalty and resilience in battle."
    },
    {
      id: 18,
      title: " momo ayase",
      price: "₹400",
      img: "/art18.jpg",
      sold: false,
      desc: " Momo Yaase from _Dandadan_ — an anime‑style portrait of a brown‑haired girl with expressive eyes, wearing a pink shirt, red bow, and blue earrings. Rendered with markers and colored pencils, the drawing focuses on her lively expression and soft color blending"
    },
    {
      id: 19,
      title: " water hashira",
      price: "₹400",
      img: "/art19.jpg",
      sold: false,
      desc: " The drawing is an anime-style illustration of *Giyu Tomioka* from _Demon Slayer_, depicted with black hair, blue eyes, a red haori, and holding a sword. The artwork uses vibrant markers and acrylics."
    },
    {
      id: 20,
      title: " okarun half yokai half human",
      price: "₹400",
      img: "/art20.jpg",
      sold: false,
      desc: "Okarun is a character from _Dandadan_ who is half‑human and half‑yokai. He has a split appearance: one side shows a human face with yellow eyes, the other side reveals his monstrous yokai form with sharp teeth and red markings. "
    },
    {
      id: 54,
      title: " kamado squad",
      price: "₹400",
      img: "/art54.jpg",
      sold: false,
      desc: " A lively and heartwarming illustration of the Kamado Squad, capturing their bond, humor, and shared struggles. Bright expressions and warm tones reflect friendship, courage, and hope, showcasing how unity and trust turn hardship into strength."
    },
    {
      id: 45,
      title: " aira yokai",
      price: "₹400",
      img: "/art45.jpg",
      sold: false,
      desc: " A striking depiction of Aira in her Yokai form, blending elegance with menace. Sharp details and dark tones highlight her supernatural power, fierce aura, and the haunting beauty of her transformation."
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
      <section style={{ padding: 40, background: "#f9f9f9", textAlign: "center" }}>
  <h2>🎨 Custom Artwork / Commission</h2>
  <p>
    Want your favorite character, portrait, or original idea?
    I create custom anime artworks made specially for you.
  </p>
</section>
      <a
  href="https://wa.me/919876614958?text=Hi!%20I%20want%20to%20order%20a%20custom%20artwork%20🎨%0A%0A1.%20Character%20or%20Idea:%0A2.%20Anime%20Style:%0A3.%20Size%20(A3/A4/Digital):%0A4.%20Colored%20or%20Black%20%26%20White:%0A5.%20deadline(optional):%0A6.%20Reference%20Image%20(if%20any):%0A%0APlease%20tell%20me%20price%20and%20delivery%20time."
  target="_blank"
  rel="noreferrer"
>
  <button
    style={{
      padding: "14px 20px",
      background: "#25D366",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      width: "100%"
    }}
  >
    ✏️ Order Custom Artwork on WhatsApp
  </button>
</a>

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
            {/* Image + badges */}
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

              {/* Sold badge */}
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

              <p style={{ fontSize: 14, color: "#555" }}>
                {art.desc}
              </p>

              <p style={{ fontSize: 14, color: "#555" }}>
                Size: A5 <br />
                Quality: A4 sheet quality <br />
                Finish: Laminated <br />
                Made with: Alcohol markers, pencil colours & acrylic markers
              </p>

              {/* WhatsApp Button with artwork name */}
              <a
                href={
                  art.sold
                    ? "#"
                    : `https://wa.me/919876614958?text=${encodeURIComponent(
                        `Hello Cartoon Artist 10M,
                        
I want to buy this artwork:

Name: ${art.title}
Price: ${art.price}`
                      )}`
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
          I am Cartoon Artist 10M, creating original anime-style artworks
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
