export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  tags: string[];
  description: string;
};

export const books: Book[] = [
  {
    id: "ts-handbook",
    title: "TypeScript Handbook",
    author: "Microsoft",
    price: 19.99,
    image: "https://via.placeholder.com/400x260?text=TypeScript+Handbook",
    tags: ["typescript", "language", "reference"],
    description:
      "A concise, practical guide to TypeScript types, tooling, and patterns.",
  },
  {
    id: "next-in-action",
    title: "Next.js in Action",
    author: "Jane Dev",
    price: 29.0,
    image: "https://via.placeholder.com/400x260?text=Next.js+in+Action",
    tags: ["nextjs", "react", "fullstack"],
    description:
      "Build production-grade apps with the App Router, server components, and edge features.",
  },
  {
    id: "react-patterns",
    title: "React Patterns",
    author: "Michael Chan",
    price: 24.5,
    image: "https://via.placeholder.com/400x260?text=React+Patterns",
    tags: ["react", "patterns"],
    description:
      "Battle-tested component and state patterns for scalable React apps.",
  },
  {
    id: "node-mastery",
    title: "Node.js Mastery",
    author: "Ada Backend",
    price: 27.99,
    image: "https://via.placeholder.com/400x260?text=Node.js+Mastery",
    tags: ["node", "backend", "apis"],
    description:
      "Deep dive into Node runtime, streams, clustering, and robust API design.",
  },
];
