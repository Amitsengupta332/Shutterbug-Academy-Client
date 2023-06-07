<div className="navbar fixed top-0 left-0 z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
  <div className="navbar-start">
    <div className="dropdown relative">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <Link to="/">
      <img
        src="https://i.ibb.co/nn8fPHd/DALL-E-2023-06-06-23-54-13-photography-logo.png"
        alt=""
        className="avatar mr-2"
        width="50px"
        height="50px"
      />
    </Link>
    <Link to="/">Photography School</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
    <div>
      {user && !loading && (
        <>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 h-12 rounded-full">
              {user.photoURL == null && (
                <img
                  src="https://i.ibb.co/3YZNVgN/pro.png"
                  className="w-full h-full rounded-full"
                  alt="User Avatar"
                />
              )}
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full"
                  alt="User Avatar"
                  title={user.displayName}
                />
              )}
            </div>
          </label>
        </>
      )}
    </div>
  </div>
</div>
