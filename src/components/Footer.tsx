export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center p-16">
      <div className="py-20">
        <p className="font-mono">Follow us</p>
        <a
          target="_blank"
          href="https://x.com/appetite_studio"
          className="text-3xl font-black hover:underline lg:text-5xl"
        >
          @appetite_studio
        </a>
      </div>
      <aside>
        <p className="font-bold">Appetite Studio</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}
