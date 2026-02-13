import { NavLink } from "react-router";

const RegisterForm = () => (
  <form method="post" className="w-full">
    {/* First name */}
    <div className="flex flex-col gap-1.5 mb-5">
      <label
        htmlFor="firstName"
        className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest"
      >
        First name
      </label>
      <input
        required
        type="text"
        id="firstName"
        placeholder="Jane"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)] invalid:border-red-900"
      />
    </div>

    {/* Last name */}
    <div className="flex flex-col gap-1.5 mb-5">
      <label
        htmlFor="lastName"
        className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest"
      >
        Last name
      </label>
      <input
        required
        type="text"
        id="lastName"
        placeholder="Smith"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)] invalid:border-red-900"
      />
    </div>

    {/* Company */}
    <div className="flex flex-col gap-1.5 mb-5">
      <label
        htmlFor="company"
        className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest"
      >
        Company name
      </label>
      <input
        required
        type="text"
        id="company"
        placeholder="Acme Inc."
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)] invalid:border-red-900"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1.5 mb-5">
      <label
        htmlFor="email"
        className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest"
      >
        Email address
      </label>
      <input
        required
        type="email"
        id="email"
        placeholder="you@example.com"
        title="Please enter a valid email address."
        aria-describedby="emailHelp"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)] invalid:border-red-900"
      />
      <p id="emailHelp" className="text-xs text-zinc-500">
        Enter a valid email (e.g., you@example.com).
      </p>
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1.5 mb-5">
      <label
        htmlFor="password"
        className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest"
      >
        Password
      </label>
      <input
        required
        id="password"
        type="password"
        placeholder="••••••••"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        title="Password must contain at least 1 uppercase letter, 1 special symbol, 1 number and be at least 8 characters long."
        aria-describedby="passwordHelp"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)] invalid:border-red-900"
      />
      <p id="passwordHelp" className="text-xs text-zinc-500">
        Min. 8 characters with uppercase, number and special symbol.
      </p>
    </div>

    {/* Confirm password */}
    <div className="flex flex-col gap-1.5 mb-7">
      <label
        htmlFor="confirmPassword"
        className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest"
      >
        Confirm password
      </label>
      <input
        required
        id="confirmPassword"
        type="password"
        placeholder="••••••••"
        className="h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-lime-400/40 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.07)] invalid:border-red-900"
      />
    </div>

    {/* Terms */}
    <label className="flex items-start gap-2.5 text-[12px] text-zinc-500 cursor-pointer mb-7">
      <input
        required
        defaultChecked
        type="checkbox"
        className="accent-lime-400 rounded mt-0.5 shrink-0"
      />
      <span>
        I agree to the{" "}
        <NavLink to="/terms" className="text-lime-400 hover:underline">
          Terms of Service
        </NavLink>{" "}
        and{" "}
        <NavLink to="/privacy" className="text-lime-400 hover:underline">
          Privacy Policy
        </NavLink>
      </span>
    </label>

    <button
      type="submit"
      className="w-full h-10.5 bg-lime-400 text-zinc-950 text-[12px] font-bold uppercase tracking-widest rounded-[9px] mb-7 cursor-pointer transition-all duration-150 hover:opacity-90 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
    >
      Create account
    </button>
  </form>
);

export default RegisterForm;
