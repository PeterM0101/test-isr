import { User } from "../../types/user";
import { Post } from "../../types/post";
import { supabase } from "../../lib/supabaseClient";

export async function getUsers(): Promise<User[]> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .limit(3);
  if (error || !data) throw new Error('Failed to fetch users');
  return data as User[];
}

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .limit(2);
  if (error || !data) throw new Error('Failed to fetch posts');
  return data as Post[];
} 