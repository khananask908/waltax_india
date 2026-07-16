import Link from 'next/link';
import AdminGuard from '@/components/auth/AdminGuard';
import AdminUploadsPanel from '@/components/admin/AdminUploadsPanel';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const AdminPage = () => {
  return (
    <AdminGuard>
      <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
        <Container>
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  Manage users, review signups, and monitor platform activity from a secure admin panel.
                </p>
              </div>
              <Link href="/admin/users">
                <Button type="button" className="whitespace-nowrap">
                  Manage Users
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">Total Users</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">--</p>
              </div>
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">Pending Approvals</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">--</p>
              </div>
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">Recent Signups</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">--</p>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-6">
              <AdminUploadsPanel />
            </div>

            <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Recent activity</h2>
              <div className="mt-6 space-y-4">
                {[
                  { title: 'New user registered', detail: 'A new client account was created earlier today.' },
                  { title: 'Service request submitted', detail: 'GST registration request pending review.' },
                  { title: 'Payment processed', detail: 'Invoice payment completed for user Raman K.' },
                ].map((item, index) => (
                  <div key={index} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </AdminGuard>
  );
};

export default AdminPage;
