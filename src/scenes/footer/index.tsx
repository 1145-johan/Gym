import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Welcome to EVOGYM, your premier fitness destination. Our expert trainers are here to guide you on your fitness journey, offering top-quality programs tailored to your needs. From weight training to yoga, we have something for everyone. Join us and discover the path to a healthier, happier you.
          </p>
          <p>© Johan Esguerra All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"><a href="https://startling-dolphin-c9bea7.netlify.app/#" target="_blank">Visit my website</a></p>
          <p className="my-5">Personal Trainer<a href="https://www.instagram.com/angela_bueno/?igsh=NG1vY2FrOGlkZmRx" target="_blank"> Angela Bueno</a></p>
          <p>We will response within 24 hours</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"><a href="https://www.instagram.com/johan_ms98?igsh=eWNiZm03c3hvZHo1&utm_source=qr" target="_blank">Johan</a></p>
          <p>(201)647-5481</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;