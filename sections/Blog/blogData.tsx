import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The best UI components for modern websites",
    paragraph:
      "Elevate user experiences with modern, intuitive UI components that seamlessly blend form and function for captivating websites.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["design"],
    publishDate: "19 Feb 2024",
  },
  {
    id: 2,
    title: "11 simple ways to enhance your web coding skills",
    paragraph:
      "Master the art of clean, efficient coding through these practical tips to level up your web development skills.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["Website"],
    publishDate: "01 Feb 2024",
  },
  {
    id: 3,
    title: "17 Tips to swiftly enhance your SEO keyword strategy",
    paragraph:
      "Unlock the power of strategic keyword optimization with these actionable insights to boost your online visibility and search rankings.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["seo"],
    publishDate: "28 Jan 2024",
  },
];
export default blogData;
