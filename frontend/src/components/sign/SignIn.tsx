"use client";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function SignIn() {
  return (
    <div className="flex w-screen h-screen justify-center overflow-hidden font-[Syne,sans-serif]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
