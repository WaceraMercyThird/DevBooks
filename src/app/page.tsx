import BookCard from "@/Components/BookCard";
import { books } from "@/lib/books";

export default function Home({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const q = (searchParams?.q ?? "").toLowerCase().trim();

  const filtered = q
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      )
    : books;

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {q ? `Results for “${q}”` : "Featured Dev Books"}
        </h1>
        <p className="text-sm text-gray-600">{filtered.length} item(s)</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
