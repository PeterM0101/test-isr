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
            <div className="text-sm text-gray-500 mb-2">@{user.username}</div>
            <div className="text-sm mb-1">{user.email}</div>
            <div className="text-xs text-gray-400 mb-1">{user.address.city}</div>
            <div className="text-xs text-gray-400">{user.company.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
} 