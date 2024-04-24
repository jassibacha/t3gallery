import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/303f4ede-52c9-4928-9a27-39407cfabb53-q3d8uc.jpg",
  "https://utfs.io/f/f878ef9f-23a3-43f3-bbed-7356b017215b-ku8nx1.jpg",
  "https://utfs.io/f/c60e2d37-4dd6-4409-b62b-46385856ba02-q6v345.jpg",
  "https://utfs.io/f/7114b9c6-5f4e-40e0-895d-1751c9c9b8de-qyacnm.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
