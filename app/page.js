export default function Home() {
  const sectionTitle = {
    fontSize: '12px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '30px'
  }

  const cardStyle = {
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '28px',
    padding: '40px',
    background: 'rgba(255,255,255,0.02)'
  }

  return (
    <main style={{
      background: '#0A0A0A',
      color: '#F5F2EA',
      minHeight: '100vh',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }}>

      <section style={{
        padding: '140px 60px 120px',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>

          <div style={{
            marginBottom: '40px',
            fontSize: '12px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)'
          }}>
            Middle East — Europe
          </div>

          <h1 style={{
            fontSize: '84px',
            lineHeight: '0.95',
            fontWeight: '300',
            maxWidth: '1200px',
            marginBottom: '40px'
          }}>
            Independent advisory and investment platform operating across hospitality, real assets, entertainment, technology and industrial sectors.
          </h1>

          <p style={{
            fontSize: '24px',
            lineHeight: '1.7',
            maxWidth: '900px',
            color: 'rgba(255,255,255,0.65)'
          }}>
            MEEU Partners originates, structures, advises on, and selectively co-invests in opportunities where operational expertise, strategic relationships and cross-border positioning create differentiated value.
          </p>
        </div>
      </section>

      <section style={{
        padding: '120px 60px',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>

        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <div style={sectionTitle}>Platforms & Strategic Interests</div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px'
          }}>

            <div style={cardStyle}>
              <h3 style={{ fontSize: '40px', fontWeight: '300', marginBottom: '20px' }}>
                Greenwood
              </h3>

              <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                Hospitality, leisure and experiential real estate platform focused on destination repositioning, wellness, F&B and year-round activation strategies.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: '40px', fontWeight: '300', marginBottom: '20px' }}>
                SOCIETY
              </h3>

              <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                Vertically integrated entertainment and lifestyle platform operating across Spain and Qatar through venue activations and cultural programming.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: '40px', fontWeight: '300', marginBottom: '20px' }}>
                METAFEST
              </h3>

              <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                Event-commerce and venue technology infrastructure platform powering ticketing, access control and transactional ecosystems.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: '40px', fontWeight: '300', marginBottom: '20px' }}>
                Fibosa Global
              </h3>

              <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
                International food technology and industrial processing solutions group specialized in dairy, meat processing and modular food infrastructure.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section style={{
        padding: '140px 60px'
      }}>

        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          <div style={sectionTitle}>Contact</div>

          <h2 style={{
            fontSize: '72px',
            lineHeight: '1',
            fontWeight: '300',
            maxWidth: '1100px',
            marginBottom: '50px'
          }}>
            For partnerships, advisory mandates and selected investment opportunities.
          </h2>

          <div style={{
            fontSize: '22px',
            lineHeight: '2',
            color: 'rgba(255,255,255,0.65)'
          }}>
            info@meeupartners.com
            <br />
            Doha — Barcelona — Madrid
          </div>

        </div>
      </section>

    </main>
  )
}
