function WhatsAppButton() {
    const phoneNumber = '918590196846'; // Replace with your sister’s WhatsApp number
    const message = 'Hello, I’m interested in Harika Hair Oil!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <div className="container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button>Chat on WhatsApp</button>
        </a>
      </div>
    );
  }
  
  export default WhatsAppButton;
  