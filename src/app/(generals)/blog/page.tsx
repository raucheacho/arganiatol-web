import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Author {
  name: string;
  role: string;
  imageUrl: string;
}

interface Post {
  title: string;
  description: string;
  image: string;
  author: Author;
  date: string;
  category: string;
}

const posts: Post[] = [
  {
    title: "Boost your conversion rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    image: "/assets/images/gal1.webp",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "/assets/svgs/user.svg",
    },
    date: "Mar 16, 2020",
    category: "Marketing",
  },
  {
    title: "How to use search engine optimization to drive sales",
    description:
      "Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.",
    image: "/assets/images/gal2.webp",
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl: "/assets/svgs/user.svg",
    },
    date: "Mar 10, 2020",
    category: "Sales",
  },
  {
    title: "The Secret to Radiant Skin: The Magic of Argan Oil",
    description:
      "Discover the ancient beauty secret of Moroccan women and how argan oil can transform your skin, leaving it hydrated, nourished, and glowing.",
    image: "/assets/images/gal3.webp",
    author: {
      name: "Admin",
      role: "Content Writer",
      imageUrl: "/assets/svgs/user.svg",
    },
    date: "May 29, 2024",
    category: "Beauty",
  },
];

const BlogPage: FC = () => {
  const slugify = (text: string) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text

  return (
    <div className="bg-[#FFF6DA]  ">
      <div className="relative bg-black py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src={"/assets/images/gal4.webp"}
            alt="Blog background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#E5BC38]  sm:text-5xl lg:text-6xl quentin">
            Our Blog
          </h1>
          <p className="mt-4 text-xl  poppins text-[#E5BC38]">
            Your source for the latest news and tips on beauty and skincare.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <Link key={post.title} href={`/blog/${slugify(post.title)}`}>
              <article
                className="flex max-w-xl flex-col items-start justify-between lg:flex-row lg:items-center lg:gap-x-8"
              >
                <div className="flex-shrink-0 lg:w-1/3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className=" object-cover"
                  />
                </div>
                <div className="group relative lg:w-2/3">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-black">
                      {post.date}
                    </time>
                    <div
                      className="relative z-10 rounded-full bg-[#E5BC38] px-3 py-1.5 font-medium text-black hover:bg-[#E5BC38]"
                    >
                      {post.category}
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-black group-hover:text-black">
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-black">
                    {post.description}
                  </p>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-black"
                      width={40}
                      height={40}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-black">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default BlogPage;

