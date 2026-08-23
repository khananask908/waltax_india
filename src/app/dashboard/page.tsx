import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import DashboardPage from '@/views/DashboardPage';

export default async function DashboardRoute() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/login?redirect=%2Fdashboard');
  }

  return <DashboardPage />;
}
