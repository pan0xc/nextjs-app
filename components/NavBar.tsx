import Link from 'next/link';

function Navbar() {
  return (
    <nav className='navbar shadow-sm border-x border-b rounded-b-2xl'>
      <Link className='navbar-start btn btn-ghost text-2xl' href='/'>
        Panic Short URL
      </Link>
    </nav>
  );
}

export default Navbar;
