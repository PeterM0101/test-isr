import { Photo } from "../../types/photo";
import Image from "next/image";

type PhotosSectionProps = {
  photos: Photo[];
};

export default function PhotosSection({ photos }: PhotosSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Our Photos</h2>
      <div className="flex gap-6 flex-wrap">
        {photos.map((photo) => (
          <figure key={photo.id} className="w-40">
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="rounded shadow border mb-2 w-full h-auto"
              width={150}
              height={150}
            />
            <figcaption className="text-xs text-gray-600 dark:text-gray-300">{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
} 