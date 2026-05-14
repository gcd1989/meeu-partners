export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0A0A0A",
        color: "#F5F2EA",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "80px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "40px",
          }}
        >
          Middle East — Europe
        </div>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1",
            fontWeight: "300",
            marginBottom: "40px",
            maxWidth: "1000px",
          }}
        >
          MEEU Partners
        </h1>

        <p
          style={{
            fontSize: "28px",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "900px",
            marginBottom: "120px",
          }}
        >
          Independent advisory and investment platform operating across hospitality, real assets, entertainment, technology and industrial sectors.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "120px",
          }}
        >
          {[
            {
              title: "Greenwood",
              text: "Hospitality, leisure and experiential real estate.",
            },
            {
              title: "SOCIETY",
              text: "Entertainment, venue activations and cultural infrastructure.",
            },
            {
              title: "METAFEST",
              text: "Event-commerce and venue technology infrastructure.",
            },
            {
              title: "Fibosa Global",
              text: "Food processing and industrial operations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "40px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "300",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "80px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "30px",
            }}
          >
            Contact
          </div>

          <h3
            style={{
              fontSize: "48px",
              lineHeight: "1.2",
              fontWeight: "300",
              marginBottom: "40px",
              maxWidth: "900px",
            }}
          >
            For partnerships, advisory mandates and selected investment opportunities.
          </h3>

          <div
            style={{
              fontSize: "22px",
              lineHeight: "2",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            info@meeupartners.com
            <br />
            Doha — Barcelona — Madrid
          </div>
        </div>
      </div>
    </main>
  );
}
