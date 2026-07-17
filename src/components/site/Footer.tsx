import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { BLOG_POSTS } from "@/data/blogPosts";

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Skyexchid - Sky Exchange Login online cricket and casino platform" className="h-10 w-10" width={40} height={40} />
          <span className="text-xl font-extrabold text-gradient-gold">SKYEXCHID</span>
        </div>
        <p className="text-sm text-muted-foreground">Skyexchid (Sky Exchange Login) — India's most trusted online cricket & casino platform. Play live cricket betting in ₹, win big with fast withdrawal & 24x7 support.</p>
      </div>
      <div>
        <h4 className="font-bold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/cricket" className="hover:text-primary">Cricket Betting</Link></li>
          <li><Link to="/casino" className="hover:text-primary">Live Casino</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3">Popular Games</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/cricket" className="hover:text-primary">IPL 2026</Link></li>
          <li><Link to="/cricket" className="hover:text-primary">T20 World Cup</Link></li>
          <li><Link to="/casino" className="hover:text-primary">Andar Bahar</Link></li>
          <li><Link to="/casino" className="hover:text-primary">Teen Patti</Link></li>
          <li><Link to="/casino" className="hover:text-primary">Aviator</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3">Skyexchid Blog</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <Link to="/blog" className="hover:text-primary">All articles</Link>
          </li>
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="hover:text-primary">
                {p.title.split(" — ")[0].split(" (")[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Skyexchid. All rights reserved.</p>
        <p>18+ only · Play responsibly · Gambling can be addictive</p>
      </div>
    </div>
  </footer>
);
