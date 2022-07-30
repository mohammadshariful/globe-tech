import React from "react";

const Login = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-1/4 px-4 hidden lg:block ">
        <h3 className="text-3xl text-primary text-center font-medium py-6">
          Globetech Company Limited
        </h3>
        <p className="text-center text-base font-thin">
          Make yourself digitalized & more effecient
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#C0CDD3",
        }}
        className="w-full h-screen lg:w-3/4 flex items-center justify-center"
      >
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-center text-gray-500 lg:text-2xl">Welcome</h2>
            <p className="text-center text-gray-500 ">Sing into your account</p>
            <form className="text-black font-semibold">
              <div className="form-control mt-4">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
