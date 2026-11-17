
import Link from "next/link";

function Header() {
  
  const navLins = <>
    <li>
          <Link href={'/'} className="rounded-[0.73rem] text-brand-heading"> Workouts</Link>
      </li>
      <li>
          <Link href={'/my-plan'} className="rounded-[0.73rem] text-brand-heading">My Plan</Link>
    </li>
  </>
  
  return (
    <header className="bg-brand-body border-b border-brand-border shadow-sm">
      <div className="navbar w-full max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              
            {navLins}

            </ul>
          </div>

          {/* Logo */}
          <Link href={'/'} className="text-xl tracking-wide uppercase font-heading flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4f000" strokeWidth="2" strokeLinejoin="round" className="lucide lucide-dumbbell preview-icon"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>
            FitLog
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLins}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn">Plan</button>
          <button className="btn">Saved</button>
        </div>
    </div>
    </header>
  );
}

export default Header;
