import harikaLogo from '../assets/HarikaHairOil.jpg';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#a3b18a',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '4px solid #588157',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={harikaLogo}
          alt="Harika Logo"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            marginRight: '15px',
          }}
        />
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#fff' }}>
            Harika Hair Oil
          </h1>
          <p style={{ margin: 0, color: '#fefae0' }}>
            100% natural hair oil from Wayanad
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
