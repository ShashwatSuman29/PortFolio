import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    date: "March 28, 2025",
    description: "My journey into web development and the lessons I've learned along the way. From HTML basics to modern frameworks.",
    content: `Web development is an exciting journey that begins with understanding the fundamentals. Here's what I've learned:

### 1. Start with the Basics
HTML and CSS are the building blocks of the web. Here's a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
    <style>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website</h1>
        <p>This is where it all begins!</p>
    </div>
</body>
</html>
\`\`\`

### 2. JavaScript Fundamentals
Modern web development relies heavily on JavaScript. Here's a basic example:

\`\`\`javascript
// Understanding async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
\`\`\``,
    image: "/blog/web-development.jpg",
    tags: ["Web Development", "Learning", "Career"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Modern React Best Practices",
    date: "March 27, 2025",
    description: "Essential tips and tricks for building better React applications, focusing on hooks and performance optimization.",
    content: `Let's dive into some modern React best practices that will help you write better code:

### 1. Custom Hooks for Reusable Logic
Extract common logic into custom hooks:

\`\`\`typescript
// useLocalStorage hook
function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue] as const;
}
\`\`\`

### 2. Performance Optimization
Use React.memo for component memoization:

\`\`\`typescript
const ExpensiveComponent = React.memo(({ data }) => {
    return (
        <div>
            {/* Complex rendering logic */}
        </div>
    );
});
\`\`\`

### 3. Modern State Management
Consider using Context API with reducers for simpler state management:

\`\`\`typescript
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
\`\`\``,
    image: "/blog/react-best-practices.jpg",
    tags: ["React", "JavaScript", "Best Practices"],
    readTime: "8 min read"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f0fdf4] to-white pt-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto mb-12"
      >
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md text-gray-800 hover:text-emerald-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto max-w-4xl pt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                My
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-emerald-500"
              >
                Blog
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg"
          >
            Sharing my thoughts and experiences in web development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card className="overflow-hidden border border-gray-100 bg-white shadow-sm group-hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{post.readTime}</span>
                      <span className="text-sm font-medium">{post.date}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="border-b border-gray-50 bg-gradient-to-r from-emerald-50/50 to-transparent">
                  <div className="flex flex-col space-y-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index }}
                      className="flex items-center justify-between"
                    >
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </motion.div>
                    <div className="flex gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 * index + 0.1 * tagIndex }}
                          className="text-xs text-gray-500 px-2 py-1 bg-gray-50 rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 * index }}
                    className="text-gray-600 mb-4"
                  >
                    {post.description}
                  </motion.p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-emerald-500 hover:text-emerald-600 font-medium inline-flex items-center transition-colors"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="prose prose-emerald max-w-none">
                <h1>{selectedPost.title}</h1>
                <div className="flex items-center gap-4 text-gray-500 mb-6">
                  <span>{selectedPost.date}</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="markdown-content">
                  {selectedPost.content.split('```').map((segment, index) => {
                    if (index % 2 === 0) {
                      return <div key={index} dangerouslySetInnerHTML={{ __html: segment }} />;
                    } else {
                      const [language, ...code] = segment.split('\n');
                      return (
                        <SyntaxHighlighter
                          key={index}
                          language={language}
                          style={atomDark}
                          className="rounded-lg my-4"
                        >
                          {code.join('\n')}
                        </SyntaxHighlighter>
                      );
                    }
                  })}
                </div>
              </div>
              <button
                className="mt-6 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedPost(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
