import { NavLink } from "react-router";

const SignInForm = () => (
  <form>
    <div className="flex flex-col gap-1.5 mb-5">
      <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
        Email address
      </label>
      <input
        required
        type="email"
        placeholder="you@example.com"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-all duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)]"
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
        Password
      </label>
      <input
        type="password"
        placeholder="••••••••"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-all duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)]"
      />
    </div>

    <div className="flex items-center justify-between mb-7">
      <label className="flex items-center gap-2 text-[12px] text-zinc-500 cursor-pointer">
        <input type="checkbox" className="accent-lime-400 rounded" checked />
        Remember me
      </label>
      <NavLink
        to="/forgot-password"
        className="text-[12px] text-zinc-500 hover:text-lime-400 transition-colors duration-150"
      >
        Forgot password?
      </NavLink>
    </div>

    <button
      type="submit"
      className="w-full h-10.5 bg-lime-400 text-zinc-950 text-[12px] font-bold uppercase tracking-widest rounded-[9px] mb-7 cursor-pointer transition-all duration-150 hover:opacity-90 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
    >
      Sign in
    </button>
  </form>
);

export default SignInForm;
