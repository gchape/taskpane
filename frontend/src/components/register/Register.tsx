import { NavLink } from "react-router";
import LeftPanelBackground from "../sign/LeftPanelBackground";
import RightPanel from "../sign/RightPanel";
import RegisterForm from "./RegisterForm";

const RegisterLeftPanel = () => (
  <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 lg:min-w-105 px-8 sm:px-16 pt-24 pb-12 bg-[#09090b] overflow-y-hidden overflow-x-hidden">
    <LeftPanelBackground />

    <div className="relative z-10 max-w-sm w-full mx-auto lg:mx-0">
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
        Create your
        <br />
        account
      </h1>
      <p className="text-[13px] text-zinc-500 mb-10">
        Already have one?{" "}
        <NavLink
          to="/get-started"
          className="text-lime-400 font-semibold hover:underline"
        >
          Sign in
        </NavLink>
      </p>

      <RegisterForm />
    </div>
  </div>
);

export default function Register() {
  return (
    <div className="flex w-screen min-h-screen lg:h-screen lg:overflow-hidden font-[Syne,sans-serif]">
      <RegisterLeftPanel />
      <div className="hidden lg:flex flex-1">
        <RightPanel />
      </div>
    </div>
  );
}
