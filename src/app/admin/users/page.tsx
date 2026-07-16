import Link from 'next/link';
import AdminGuard from '@/components/auth/AdminGuard';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const AdminUsersPage = () => {
  return (
    <AdminGuard>
      <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
        <Container>
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">User Management</h1>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  View all registered users and perform administrative actions.
                </p>
              </div>
              <Link href="/admin">
                <Button type="button">Back to admin</Button>
              </Link>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900">Name</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900">Email</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900">Company</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900">Role</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {[
                    { name: 'Sonia Patel', email: 'sonia@example.com', company: 'Sage Ventures', role: 'user' },
                    { name: 'Rohan Sharma', email: 'rohan@example.com', company: 'Sharma LLP', role: 'user' },
                    { name: 'Admin User', email: 'admin@example.com', company: 'WalTax India', role: 'admin' },
                  ].map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-slate-700">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{user.company}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 capitalize">{user.role}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        <div className="flex flex-wrap gap-2">
                          <Button className="px-3 py-2 text-sm">Edit</Button>
                          <Button className="px-3 py-2 text-sm bg-red-600 hover:bg-red-700">Remove</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    </AdminGuard>
  );
};

export default AdminUsersPage;
