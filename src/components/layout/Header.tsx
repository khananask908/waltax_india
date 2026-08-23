'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { UserButton, useClerk, useUser } from '@clerk/nextjs';
import Logo from './Logo';
import { useCartStore } from '../../store/cartStore';
import CartDropdown from '../cart/CartDropdown';
import { getCurrentUser, logoutUser } from '@/lib/auth';

interface HeaderProps {
  isScrolled: boolean;
}

const menuItems = {
  startups: {
    title: 'Startups',
    path: '/startups',
    items: [
      { name: 'Proprietorship', path: '/services/proprietorship' },
      { name: 'Partnership', path: '/services/partnership' },
      { name: 'One Person Company', path: '/services/one-person-company' },
      { name: 'Limited Liability Partnership', path: '/services/llp' },
      { name: 'Private Limited Company', path: '/services/private-limited' },
      { name: 'Section 8 Company', path: '/services/section-8' },
      { name: 'Trust Registration', path: '/services/trust-registration' },
      { name: 'Public Limited Company', path: '/services/public-limited' },
      { name: 'Producer Company', path: '/services/producer-company' },
      { name: 'Indian Subsidiary', path: '/services/indian-subsidiary' },
    ]
  },
  registration: {
    title: 'Registration',
    path: '/registration',
    items: [
      { name: 'Startup India', path: '/services/startup-india' },
      { name: 'Trade License', path: '/services/trade-license' },
      { name: 'FSSAI Registration/License', path: '/services/fssai' },
      { name: 'Import Export Code', path: '/services/import-export-code' },
      { name: 'ISO Registration', path: '/services/iso-registration' },
      { name: 'PF/ESI Registration', path: '/services/pf-esi' },
      { name: '12A and 80G Registration', path: '/services/12a-80g' },
      { name: 'Darpan Registration', path: '/services/darpan' },
      { name: 'Shop Act Registration', path: '/services/shop-act' },
      { name: 'Udyam Registration', path: '/services/udyam' },
      { name: 'FCRA Registration', path: '/services/fcra' },
      { name: 'Trademark Registration', path: '/services/trademark' },
    ]
  },
  gst: {
    title: 'GST',
    path: '/gst',
    items: [
      { name: 'GST Registration', path: '/services/gst-registration' },
      { name: 'GST Return Filing by Accountant', path: '/services/gst-filing' },
      { name: 'GST Compliance', path: '/services/gst-compliance' },
    ]
  },
  incomeTax: {
    title: 'Income Tax',
    path: '/income-tax',
    items: [
      { name: 'Income Tax E-filing', path: '/services/income-tax-filing' },
      { name: 'Business Tax Filing', path: '/services/business-tax-filing' },
      { name: 'ITR 1 Return Filing', path: '/services/itr-1' },
      { name: 'ITR 2 Return Filing', path: '/services/itr-2' },
      { name: 'ITR 3 Return Filing', path: '/services/itr-3' },
      { name: 'ITR 4 Return Filing', path: '/services/itr-4' },
      { name: 'ITR 5 Return Filing', path: '/services/itr-5' },
      { name: 'ITR 6 Return Filing', path: '/services/itr-6' },
      { name: 'ITR 7 Return Filing', path: '/services/itr-7' },
      { name: '15CA-15CB Filing', path: '/services/15ca-15cb' },
      { name: 'TAN Registration', path: '/services/tan-registration' },
      { name: 'TDS Return Filing', path: '/services/tds-filing' },
      { name: 'Income Tax Notice', path: '/services/income-tax-notice' },
    ]
  },
  compliance: {
    title: 'Compliance',
    path: '/compliance',
    items: [
      { name: 'Proprietorship Compliance', path: '/services/proprietorship-compliance' },
      { name: 'Partnership Compliance', path: '/services/partnership-compliance' },
      { name: 'One Person Company Compliance', path: '/services/opc-compliance' },
      { name: 'LLP Compliance', path: '/services/llp-compliance' },
      { name: 'Private Limited Compliance', path: '/services/pvt-ltd-compliance' },
      { name: 'Section 8 Company Compliance', path: '/services/section-8-compliance' },
      { name: 'Trust Registration Compliance', path: '/services/trust-compliance' },
      { name: 'Public Limited Compliance', path: '/services/public-ltd-compliance' },
      { name: 'Producer Company Compliance', path: '/services/producer-compliance' },
      { name: 'Indian Subsidiary Compliance', path: '/services/subsidiary-compliance' },
      { name: 'Book-keeping', path: '/services/book-keeping' },
    ]
  }
};

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const { items } = useCartStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const syncAuthState = () => {
      setIsAdmin(getCurrentUser()?.role === 'admin');
    };

    syncAuthState();

    window.addEventListener('storage', syncAuthState);
    window.addEventListener('waltax-auth-state-changed', syncAuthState);

    return () => {
      window.removeEventListener('storage', syncAuthState);
      window.removeEventListener('waltax-auth-state-changed', syncAuthState);
    };
  }, []);

  const isHomePage = pathname === '/';
  const authenticated = isAdmin || (isLoaded && isSignedIn);
  const isSolidHeader = isScrolled || !isHomePage;

  const handleLogout = async () => {
    if (isAdmin) {
      logoutUser();
    } else {
      await signOut({ redirectUrl: '/' });
    }
    setIsAdmin(false);
    router.push(isAdmin ? '/admin-login' : '/');
  };

  const headerClass = isSolidHeader
    ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200 py-2'
    : 'bg-transparent py-3';
  const textColor = isSolidHeader ? 'text-gray-700' : 'text-white';
  const hireTeamClass = isSolidHeader
    ? 'text-gray-700 bg-transparent border-none'
    : 'text-white bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg';
  const linkClass = (path: string, extra = '') =>
    `${extra} ${pathname === path ? 'text-primary-700 bg-primary-50' : textColor}`;

  return (
    <header className={`${headerClass} fixed w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-lg font-display font-semibold text-primary-900">WalTax India</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-4">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(key)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={menu.path}
                  className={linkClass(menu.path, 'relative font-medium transition-all duration-300 flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm group-hover:text-primary-600 group-hover:bg-primary-50')}
                >
                  {menu.title}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </Link>
                <div className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 transition-all duration-300 ${hoveredMenu === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="grid grid-cols-1 gap-1">
                    {menu.items.map((item) => (
                      <Link key={item.path} href={item.path} className="px-3 py-1.5 text-xs text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link href="/hire-team" className={linkClass('/hire-team', `relative font-medium transition-all duration-300 px-3 py-2 rounded-lg text-sm animate-pulse hover:animate-none group ${hireTeamClass}`)}>Hire a Team</Link>
            <Link href="/blog" className={linkClass('/blog', 'relative font-medium transition-all duration-300 px-2 py-1.5 rounded-lg text-sm group')}>Blog</Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              <button
                onClick={() => {
                  if (!authenticated) {
                    router.push('/login?redirect=%2Fdashboard');
                    return;
                  }
                  setShowCartDropdown(!showCartDropdown);
                }}
                className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isScrolled ? 'bg-primary-100 text-primary-600 hover:bg-primary-200' : 'bg-white/20 text-white hover:bg-white/30'}`}
                title={authenticated ? 'Cart' : 'Login to access cart'}
              >
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">{items.length}</span>}
              </button>
              {showCartDropdown && authenticated && <CartDropdown onClose={() => setShowCartDropdown(false)} />}
            </div>
            <Link href={authenticated ? '/dashboard' : '/login?redirect=%2Fdashboard'} className="px-3 py-1.5 bg-white border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm">Dashboard</Link>
            {isAdmin && (
              <Link href="/admin" className="px-3 py-1.5 bg-white border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm">Admin</Link>
            )}
            {authenticated ? (
              isAdmin ? (
                <button onClick={() => void handleLogout()} className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm">Logout</button>
              ) : <UserButton />
            ) : (
              <Link href="/login" className="px-3 py-1.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm">Login</Link>
            )}
          </div>

          <button className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-2">
            <nav className="flex flex-col space-y-4 p-4">
              {Object.entries(menuItems).map(([key, menu]) => (
                <div key={key}>
                  <Link href={menu.path} className="font-medium text-gray-700 block py-2" onClick={() => setIsMenuOpen(false)}>{menu.title}</Link>
                  <div className="ml-4 space-y-1">
                    {menu.items.map((item) => <Link key={item.path} href={item.path} className="block py-1 text-sm text-gray-600 hover:text-primary-600" onClick={() => setIsMenuOpen(false)}>{item.name}</Link>)}
                  </div>
                </div>
              ))}
              <Link href="/hire-team" className="font-medium text-gray-700 animate-pulse" onClick={() => setIsMenuOpen(false)}>Hire a Team</Link>
              <Link href="/blog" className="font-medium text-gray-700" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href={authenticated ? '/dashboard' : '/login?redirect=%2Fdashboard'} className="py-2 px-4 bg-primary-600 text-white rounded-md text-center" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              {isAdmin && (
                <Link href="/admin" className="py-2 px-4 bg-white border border-primary-600 text-primary-600 rounded-md text-center" onClick={() => setIsMenuOpen(false)}>Admin</Link>
              )}
              {authenticated ? (
                <button onClick={() => { void handleLogout(); setIsMenuOpen(false); }} className="py-2 px-4 bg-red-600 text-white rounded-md text-center hover:bg-red-700 transition-colors">Logout</button>
              ) : (
                <Link href="/login" className="py-2 px-4 bg-primary-600 text-white rounded-md text-center" onClick={() => setIsMenuOpen(false)}>Login</Link>
              )}
              <button
                onClick={() => {
                  if (!authenticated) {
                    router.push('/login?redirect=%2Fdashboard');
                    return;
                  }
                  setShowCartDropdown(!showCartDropdown);
                }}
                className="flex items-center gap-2 w-full p-3 bg-primary-100 text-primary-700 rounded-lg"
                title={authenticated ? 'Cart' : 'Login to access cart'}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({items.length})</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
