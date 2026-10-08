const stats = [
  { label: "Years of Experience", value: "12+" },
  { label: "Properties Sold", value: "850+" },
  { label: "Happy Clients", value: "98%" },
];

const values = [
  "Expert market guidance",
  "Transparent communication",
  "Tailored property solutions",
];

export default function About() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f6f4ef 0%, #ffffff 100%)",
      color: "#1c1c1c",
      padding: "48px 24px",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "40px",
            alignItems: "center",
            padding: "32px 0 48px",
          }}
        >
          <div>
            <p style={{ margin: 0, color: "#a06a2a", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px" }}>
              About Skyline Estates
            </p>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", lineHeight: 1.1, margin: "16px 0 20px", color: "#17212b" }}>
              Finding the right place to call home.
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#4c4c4c", marginBottom: "24px" }}>
              Skyline Estates helps buyers, sellers, and investors navigate the real estate market with confidence.
              From luxury villas to family homes and smart investment properties, we combine local expertise with
              personalized service to deliver exceptional results.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>
              <button style={{ background: "#1d3557", color: "#fff", border: "none", borderRadius: "999px", padding: "14px 22px", fontWeight: 700, cursor: "pointer" }}>
                Book a Consultation
              </button>
              <button style={{ background: "transparent", color: "#1d3557", border: "1px solid #1d3557", borderRadius: "999px", padding: "14px 22px", fontWeight: 700, cursor: "pointer" }}>
                View Listings
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(120px, 1fr))", gap: "16px" }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #e8e3db", borderRadius: "16px", padding: "18px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#1d3557" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "#5b6472", marginTop: "6px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Modern skyscrapers and luxury real estate buildings"
              style={{
                width: "100%",
                height: "640px",
                objectFit: "cover",
                borderRadius: "24px",
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
              }}
            />
          </div>
        </section>

        <section style={{ background: "#ffffff", border: "1px solid #eef1f5", borderRadius: "26px", padding: "40px 32px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.04)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "32px", alignItems: "center" }}>
            <div>
              <p style={{ margin: 0, color: "#a06a2a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "12px" }}>
                Our Mission
              </p>
              <h2 style={{ color: "#17212b", margin: "14px 0 16px", fontSize: "2.1rem" }}>
                Building lasting relationships through exceptional real estate service.
              </h2>
            </div>

            <div>
              <p style={{ color: "#4c4c4c", lineHeight: 1.8, fontSize: "1.05rem", margin: 0 }}>
                We believe every move should feel exciting, informed, and stress-free. Our team brings together
                deep market knowledge, strategic negotiation, and a client-first mindset to help people buy, sell,
                and invest with clarity.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px" }}>
            {values.map((value, index) => (
              <div key={value} style={{ background: "#f7f5f2", borderRadius: "18px", padding: "24px 20px", border: "1px solid #f0ece6" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#d7c7a7", color: "#1d3557", display: "grid", placeItems: "center", fontWeight: 700, marginBottom: "14px" }}>
                  {index + 1}
                </div>
                <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#1f2937" }}>{value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}