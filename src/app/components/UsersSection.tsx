import { User } from "../../types/user";

type UsersSectionProps = {
  users: User[];
};

export default function UsersSection({ users }: UsersSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Our Users</h2>
      <ul className="grid gap-6 sm:grid-cols-3">
        {users.map((user) => (
          <li key={user.id} className="rounded-lg border p-4 bg-white shadow-sm dark:bg-neutral-900">
            <div className="font-bold text-lg mb-1">{user.name}</div>
            <div className="text-sm mb-1">{user.email}</div>
          </li>
        ))}
      </ul>
    </section>
  );
} 