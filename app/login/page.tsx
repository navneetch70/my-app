"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { theme } from "../theme/theme";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/home");
    }, 2000);
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-4"
      // style={{ backgroundColor: theme.page.bg }}
    >
      <div
        className="w-full max-w-md rounded-3xl p-8 shadow-sm"
        style={{
          backgroundColor: theme.surface.card,
          border: `1px solid ${theme.border.default}`,
        }}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h2
            className="text-2xl font-medium tracking-wide"
            style={{ color: theme.text.primary }}
          >
            Welcome back
          </h2>
          <p className="mt-2 text-sm" style={{ color: theme.text.muted }}>
            Sign in to continue your creative journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* EMAIL */}
          <div>
            <label
              className="mb-1 block text-xs font-medium uppercase tracking-wide"
              style={{ color: theme.text.secondary }}
            >
              Email address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: theme.icon.muted }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full rounded-lg py-2.5 pl-9 pr-3 text-sm outline-none transition"
                style={{
                  backgroundColor: theme.surface.card,
                  border: `1px solid ${theme.border.default}`,
                  color: theme.text.primary,
                }}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label
              style={{ color: theme.text.secondary }}
              className="mb-1 block text-xs font-medium uppercase tracking-wide"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: theme.icon.muted }}
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full rounded-lg py-2.5 pl-9 pr-10 text-sm outline-none transition"
                style={{
                  backgroundColor: theme.surface.card,
                  border: `1px solid ${theme.border.default}`,
                  color: theme.text.primary,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={16} style={{ color: theme.icon.muted }} />
                ) : (
                  <Eye size={16} style={{ color: theme.icon.muted }} />
                )}
              </button>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-xs">
            <label
              className="flex items-center gap-2"
              style={{ color: theme.text.secondary }}
            >
              <input
                type="checkbox"
                style={{ accentColor: theme.button.primary.bg }}
              />
              Remember me
            </label>
            <a href="#" style={{ color: theme.text.muted }}>
              Forgot password?
            </a>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-lg py-2.5 text-sm font-medium transition"
            style={{
              backgroundColor: theme.button.primary.bg,
              color: theme.button.primary.text,
            }}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </button>

          {/* SOCIAL */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm transition"
              style={{
                backgroundColor: theme.surface.card,
                border: `1px solid ${theme.border.default}`,
                color: theme.text.primary,
              }}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="h-4 w-4"
              />
              Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm transition"
              style={{
                backgroundColor: theme.surface.card,
                border: `1px solid ${theme.border.default}`,
                color: theme.text.primary,
              }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </button>
          </div>
        </form>

        {/* Footer */}
        <div
          className="mt-6 text-center text-xs"
          style={{ color: theme.text.muted }}
        >
          Don&apos;t have an account?{" "}
          <a href="#" style={{ color: theme.text.primary }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
