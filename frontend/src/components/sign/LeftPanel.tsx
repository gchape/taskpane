import { NavLink } from "react-router";
import GithubButton from "./GithubButton";
import GoogleButton from "./GoogleButton";
import SignInForm from "./SignInForm";
import LeftPanelBackground from "./LeftPanelBackground";

const LeftPanel = () => (
  <div className="relative flex flex-col justify-center w-1/2 min-w-105 px-16 py-14 bg-[#09090b] overflow-hidden">
    <LeftPanelBackground />

    <div className="relative z-10 max-w-sm w-full">
      <NavLink to="/" className="flex items-center gap-2 mb-12 no-underline">
        <span
          className="w-2 h-2 rounded-full bg-lime-400"
          style={{ boxShadow: "0 0 8px rgba(163,230,53,0.7)" }}
        />
        <span className="text-[15px] font-bold text-white tracking-tight">
          TaskPane
        </span>
      </NavLink>

      <h1 className="text-[28px] font-bold text-zinc-100 tracking-tight leading-tight mb-2">
        Sign in to
        <br />
        your account
      </h1>
      <p className="text-[13px] text-zinc-500 mb-10">
        No account?{" "}
        <NavLink
          to="/register"
          className="text-lime-400 font-semibold hover:underline"
        >
          Register for free
        </NavLink>
      </p>

      <SignInForm />

      <div className="flex items-center gap-3 mb-5">
        <span className="flex-1 h-px bg-white/[0.07]" />
        <span className="text-[11px] text-zinc-600 uppercase tracking-widest whitespace-nowrap">
          Or continue with
        </span>
        <span className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <GoogleButton />
        <GithubButton />
      </div>
    </div>
  </div>
);

export default LeftPanel;
