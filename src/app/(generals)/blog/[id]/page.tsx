import Image from "next/image";
import { FC } from "react";

// This is a placeholder for the actual post data
// In a real application, you would fetch this data based on the [id] parameter
const post = {
  title: "Boost your conversion rate",
  description:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt. Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.",
  image: "/assets/images/gal1.webp",
  author: {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/assets/svgs/user.svg",
  },
  date: "Mar 16, 2020",
  category: "Marketing",
};

const BlogPostPage: FC = () => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        <div className="relative mt-8 flex items-center gap-x-4">
            <Image src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" width={40} height={40} />
            <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                    {post.author.name}
                </p>
                <p className="text-gray-600">{post.date}</p>
            </div>
        </div>
        <div className="mt-10">
            <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="rounded-2xl bg-gray-100 object-cover w-full"
            />
        </div>
        <div className="mt-10 max-w-2xl">
            <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
