import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

// Force dynamic so that the page is always reloaded on refresh
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return images.map((image, index) => (
    <div key={image.id}>
      <div className="w-72">
        <img src={image.url} />
      </div>
      <div className="max-w-72 overflow-hidden text-ellipsis whitespace-nowrap">
        {image.name}
      </div>
    </div>
  ));
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
