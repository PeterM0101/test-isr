import { getUsers, getPhotos } from "./lib/data";
import UsersSection from "./components/UsersSection";
import { User } from "../types/user";
import { Photo } from "../types/photo";
import PhotosSection from "./components/PhotosSection";

export default async function Home() {
  let users: User[] = [];
  let photos: Photo[] = [];
  let error = false;
  try {
    [users, photos] = await Promise.all([getUsers(), getPhotos()]);
  } catch {
    error = true;
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-10 text-center">ISR Demo: Static Home Page</h1>
      {error ? (
        <div className="text-red-600 text-center">Failed to load data. Please try again later.</div>
      ) : (
        <>
          <UsersSection users={users} />
          <PhotosSection photos={photos} />
        </>
      )}
      <div className="mt-12 text-center text-xs text-gray-400">
        <span>Page generated at: {new Date().toLocaleString()}</span>
        <br />
        <span>Revalidates every 60 seconds (ISR)</span>
      </div>
    </main>
  );
}
