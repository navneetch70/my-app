import BackgroundEffects from "../components/background/BackgroundEffects";
import AppLayout from "../components/AppLayout";

export default function MyWorkPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7]">
      <BackgroundEffects />

      <div className="relative z-20">
        <AppLayout>
          {/* 👉 Right-side content for My Work */}
          <div className="text-white">
            <h2 className="text-lg font-semibold">My Work</h2>
            <p>Tasks, assignments, and progress will appear here.</p>
          </div>
        </AppLayout>
      </div>
    </div>
  );
}
