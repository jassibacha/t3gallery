import Link from "next/link";
import { db } from "~/server/db";

// Force dynamic so that the page is always reloaded on refresh
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  //console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index}>
            <div className="w-48">
              <img src={image.url} />
            </div>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
