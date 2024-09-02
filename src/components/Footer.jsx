import Container from "./ui/Container";

function Footer() {
  return (
    <footer className="text-white bg-gray-fontSecondary py-6 border-t">
      <Container className="flex justify-between">
        <h3 className="text-base font-bold font-primary">Cars Spot</h3>
        <a className="text-base underline font-primary" href="#privacy_policy">
          Polityka prywatności
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
