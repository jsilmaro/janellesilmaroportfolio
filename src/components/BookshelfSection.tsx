import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import bookThroneOfGlass from "@/assets/book-throne-of-glass.jpg";
import bookCrownOfMidnight from "@/assets/book-crown-of-midnight.jpg";
import bookHeirOfFire from "@/assets/book-heir-of-fire.jpg";
import bookQueenOfShadows from "@/assets/book-queen-of-shadows.jpg";
import bookEmpireOfStorms from "@/assets/book-empire-of-storms.jpg";
import bookTowerOfDawn from "@/assets/book-tower-of-dawn.jpg";
import bookKingdomOfAsh from "@/assets/book-kingdom-of-ash.jpg";
import bookLightningThief from "@/assets/book-lightning-thief.jpg";
import bookCruelPrince from "@/assets/book-cruel-prince.jpg";
import bookQueenOfNothing from "@/assets/book-queen-of-nothing.jpg";
import bookLoveResistance from "@/assets/book-love-resistance.jpg";
import bookMisfitTable from "@/assets/book-misfit-table.jpg";
import bookTakeChargeGiveAll from "@/assets/book-take-charge-give-all.webp";
import bookAbundanceFormula from "@/assets/book-abundance-formula.jpg";
import bookAlchemist from "@/assets/book-alchemist.jpg";
import bookAtomicHabits from "@/assets/book-atomic-habits.jpg";
import bookCleanCode from "@/assets/book-clean-code.jpg";
import bookRichDad from "@/assets/book-rich-dad.jpg";

interface Book {
  title: string;
  author: string;
  cover: string;
  category: string;
  spine: string; // spine color
}

const books: Book[] = [
  { title: "Throne of Glass", author: "Sarah J. Maas", cover: bookThroneOfGlass, category: "Sarah J. Maas", spine: "#2d4a3e" },
  { title: "Crown of Midnight", author: "Sarah J. Maas", cover: bookCrownOfMidnight, category: "Sarah J. Maas", spine: "#1a2a3a" },
  { title: "Heir of Fire", author: "Sarah J. Maas", cover: bookHeirOfFire, category: "Sarah J. Maas", spine: "#3a1a0a" },
  { title: "Queen of Shadows", author: "Sarah J. Maas", cover: bookQueenOfShadows, category: "Sarah J. Maas", spine: "#1a1a2e" },
  { title: "Empire of Storms", author: "Sarah J. Maas", cover: bookEmpireOfStorms, category: "Sarah J. Maas", spine: "#0a1a2a" },
  { title: "Tower of Dawn", author: "Sarah J. Maas", cover: bookTowerOfDawn, category: "Sarah J. Maas", spine: "#2a1a0a" },
  { title: "Kingdom of Ash", author: "Sarah J. Maas", cover: bookKingdomOfAsh, category: "Sarah J. Maas", spine: "#1a0a0a" },
  { title: "The Lightning Thief", author: "Rick Riordan", cover: bookLightningThief, category: "Rick Riordan", spine: "#0a2a3a" },
  { title: "The Cruel Prince", author: "Holly Black", cover: bookCruelPrince, category: "Holly Black", spine: "#2a0a1a" },
  { title: "The Queen of Nothing", author: "Holly Black", cover: bookQueenOfNothing, category: "Holly Black", spine: "#1a0a2a" },
  { title: "Love is the Resistance", author: "Ashley Abercrombie", cover: bookLoveResistance, category: "Others", spine: "#2a0a0a" },
  { title: "The Misfit Table", author: "Tiffany", cover: bookMisfitTable, category: "Others", spine: "#1a2a1a" },
  { title: "Take Charge, Give All", author: "Bo Sanchez", cover: bookTakeChargeGiveAll, category: "Bo Sanchez", spine: "#2a1a00" },
  { title: "The Abundance Formula", author: "Bo Sanchez", cover: bookAbundanceFormula, category: "Bo Sanchez", spine: "#1a2a00" },
];

const SHELF_SIZE = 7; // books per shelf row
const categories = ["All", "Sarah J. Maas", "Rick Riordan", "Holly Black", "Bo Sanchez", "Others"];

// Split books into shelf rows
const toShelves = (list: Book[]) => {
  const shelves: Book[][] = [];
  for (let i = 0; i < list.length; i += SHELF_SIZE) {
    shelves.push(list.slice(i, i + SHELF_SIZE));
  }
  return shelves;
};

// Single book spine standing on shelf
const BookSpine = ({ book, onClick, index, visible }: {
  book: Book;
  onClick: () => void;
  index: number;
  visible: boolean;
}) => (
  <button
    onClick={onClick}
    className="group relative flex flex-col items-center focus:outline-none"
    style={{
      transitionDelay: visible ? `${index * 40}ms` : "0ms",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}
    aria-label={`Open ${book.title}`}
  >
    {/* Book body */}
    <div
      className="relative cursor-pointer"
      style={{
        width: 52,
        height: 130,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Spine side — visible at rest */}
      <div
        className="absolute inset-0 rounded-sm overflow-hidden group-hover:opacity-0 transition-opacity duration-200"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, ${book.spine} 15%, ${book.spine} 85%, rgba(0,0,0,0.3) 100%)`,
          boxShadow: "2px 0 8px rgba(0,0,0,0.5), inset 1px 0 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Spine title — rotated */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[8px] font-medium text-center leading-tight px-1"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              color: "rgba(212,175,55,0.85)",
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.05em",
              maxHeight: "90%",
              overflow: "hidden",
            }}
          >
            {book.title}
          </span>
        </div>
        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(212,175,55,0.4)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(212,175,55,0.4)" }} />
      </div>

      {/* Cover — revealed on hover, tilted like pulling off shelf */}
      <div
        className="absolute inset-0 rounded-sm overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-250"
        style={{
          transform: "perspective(300px) rotateY(-15deg) translateX(-6px)",
          boxShadow: "-4px 4px 20px rgba(0,0,0,0.7)",
        }}
      >
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ boxShadow: "0 0 20px rgba(212,175,55,0.25)" }}
      />
    </div>
  </button>
);

// Open book modal
const BookModal = ({ book, onClose }: { book: Book; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: "rgba(4,3,2,0.88)" }}
    onClick={onClose}
  >
    <div
      className="relative max-w-sm w-full"
      style={{ animation: "book-open 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}
      onClick={e => e.stopPropagation()}
    >
      {/* Book cover */}
      <div
        className="rounded-sm overflow-hidden"
        style={{
          boxShadow: "0 30px 80px rgba(0,0,0,0.9), -8px 0 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.15)",
          border: "1px solid rgba(212,175,55,0.3)",
        }}
      >
        <img src={book.cover} alt={book.title} className="w-full h-auto object-cover" />
      </div>

      {/* Info panel — like inside cover */}
      <div
        className="mt-4 p-5 rounded-sm"
        style={{
          background: "linear-gradient(135deg, rgba(8,6,3,0.95), rgba(12,8,4,0.95))",
          border: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        {/* Gold divider top */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5))" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "rgba(212,175,55,0.6)" }} />
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.5), transparent)" }} />
        </div>

        <h3
          className="text-lg font-bold mb-1 text-center"
          style={{ fontFamily: "'Cinzel', serif", color: "#d4af37" }}
        >
          {book.title}
        </h3>
        <p
          className="text-sm text-center mb-3"
          style={{ color: "rgba(212,175,55,0.6)", fontFamily: "'IM Fell English', serif" }}
        >
          {book.author}
        </p>

        {/* Gold divider bottom */}
        <div className="flex items-center gap-2">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3))" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "rgba(212,175,55,0.4)" }} />
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.3), transparent)" }} />
        </div>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          background: "rgba(8,6,3,0.95)",
          border: "1px solid rgba(212,175,55,0.4)",
          color: "rgba(212,175,55,0.8)",
        }}
        aria-label="Close"
      >
        <X size={14} />
      </button>
    </div>
  </div>
);

const BookshelfSection = () => {
  const { ref, visible } = useScrollReveal();
  const [active, setActive] = useState("All");
  const [openBook, setOpenBook] = useState<Book | null>(null);

  const filtered = active === "All" ? books : books.filter(b => b.category === active);
  const shelves = toShelves(filtered);

  return (
    <section id="bookshelf" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className={`text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Bookshelf
        </p>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          My <span className="text-gradient">Library</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-10 transition-all duration-700 delay-100 leading-relaxed ${visible ? "opacity-100" : "opacity-0"}`}>
          Books that shaped my thinking. Hover to peek, click to open.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 text-xs font-medium transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.08em",
                background: active === cat
                  ? "linear-gradient(135deg, rgba(160,110,25,0.9), rgba(100,65,12,0.9))"
                  : "rgba(8,6,3,0.7)",
                color: active === cat ? "rgba(245,225,140,0.95)" : "rgba(180,140,60,0.6)",
                border: `1px solid ${active === cat ? "rgba(180,130,40,0.55)" : "rgba(180,130,40,0.2)"}`,
                boxShadow: active === cat ? "0 0 16px rgba(160,110,25,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Library shelves */}
        <div className="space-y-2">
          {shelves.map((shelf, si) => (
            <div key={si} className="relative">
              {/* Books row */}
              <div
                className="flex items-end gap-1 px-4 pb-3 pt-4"
                style={{
                  background: "linear-gradient(180deg, rgba(20,12,4,0.3) 0%, rgba(10,6,2,0.5) 100%)",
                  borderRadius: "4px 4px 0 0",
                }}
              >
                {shelf.map((book, bi) => (
                  <BookSpine
                    key={book.title}
                    book={book}
                    onClick={() => setOpenBook(book)}
                    index={si * SHELF_SIZE + bi}
                    visible={visible}
                  />
                ))}
              </div>

              {/* Shelf plank */}
              <div
                style={{
                  height: 14,
                  background: "linear-gradient(180deg, #3a2208 0%, #2a1804 50%, #1e1002 100%)",
                  borderRadius: "0 0 3px 3px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(212,175,55,0.12), inset 0 -1px 0 rgba(0,0,0,0.5)",
                  border: "1px solid rgba(100,60,10,0.4)",
                  borderTop: "1px solid rgba(180,120,30,0.3)",
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: "rgba(212,175,55,0.3)", fontFamily: "'Cinzel', serif", letterSpacing: "0.2em" }}>
          ✦ &nbsp; hover to peek · click to open &nbsp; ✦
        </p>
      </div>

      {/* Book open modal */}
      {openBook && <BookModal book={openBook} onClose={() => setOpenBook(null)} />}
    </section>
  );
};

export default BookshelfSection;
