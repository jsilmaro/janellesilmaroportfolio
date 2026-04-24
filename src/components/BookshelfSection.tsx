import { useState } from "react";
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

const books = [
  { title: "Throne of Glass", author: "Sarah J. Maas", cover: bookThroneOfGlass, category: "Sarah J. Maas" },
  { title: "Crown of Midnight", author: "Sarah J. Maas", cover: bookCrownOfMidnight, category: "Sarah J. Maas" },
  { title: "Heir of Fire", author: "Sarah J. Maas", cover: bookHeirOfFire, category: "Sarah J. Maas" },
  { title: "Queen of Shadows", author: "Sarah J. Maas", cover: bookQueenOfShadows, category: "Sarah J. Maas" },
  { title: "Empire of Storms", author: "Sarah J. Maas", cover: bookEmpireOfStorms, category: "Sarah J. Maas" },
  { title: "Tower of Dawn", author: "Sarah J. Maas", cover: bookTowerOfDawn, category: "Sarah J. Maas" },
  { title: "Kingdom of Ash", author: "Sarah J. Maas", cover: bookKingdomOfAsh, category: "Sarah J. Maas" },
  { title: "The Lightning Thief", author: "Rick Riordan", cover: bookLightningThief, category: "Rick Riordan" },
  { title: "The Cruel Prince", author: "Holly Black", cover: bookCruelPrince, category: "Holly Black" },
  { title: "The Queen of Nothing", author: "Holly Black", cover: bookQueenOfNothing, category: "Holly Black" },
  { title: "Love is the Resistance", author: "Ashley Abercrombie", cover: bookLoveResistance, category: "Others" },
  { title: "The Misfit Table", author: "Tiffany", cover: bookMisfitTable, category: "Others" },
  { title: "Take Charge, Give All", author: "Bo Sanchez", cover: bookTakeChargeGiveAll, category: "Bo Sanchez" },
  { title: "The Abundance Formula", author: "Bo Sanchez", cover: bookAbundanceFormula, category: "Bo Sanchez" },
];

const categories = ["All", "Sarah J. Maas", "Rick Riordan", "Holly Black", "Bo Sanchez", "Others"];

const BookshelfSection = () => {
  const { ref, visible } = useScrollReveal();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? books : books.filter((b) => b.category === active);

  return (
    <section id="bookshelf" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className={`text-xs font-semibold tracking-[0.25em] uppercase text-primary text-center mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Bookshelf
        </p>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          My <span className="text-gradient-accent">Bookshelf</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-xl mx-auto mb-10 transition-all duration-700 delay-100 leading-relaxed ${visible ? "opacity-100" : "opacity-0"}`}>
          Books that shaped my thinking. Reading is one of the best investments I make in myself.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                active === cat
                  ? "bg-gradient-primary text-primary-foreground shadow-[0_0_20px_hsl(330_70%_70%/0.35)]"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {filtered.map((book, i) => (
            <div
              key={book.title}
              className={`glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 relative ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: visible ? `${i * 50 + 200}ms` : "0ms" }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img src={book.cover} alt={book.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-0.5">{book.title}</h3>
                <p className="text-xs text-primary/80">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookshelfSection;
