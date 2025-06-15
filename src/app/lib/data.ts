import { User } from "../../types/user";
import { Photo } from "../../types/photo";

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch users');
  const users: User[] = await res.json();
  return users.slice(0, 3);
}

export async function getPhotos(): Promise<Photo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch photos');
  const photos: Photo[] = await res.json();
  return photos.slice(0, 2);
} 