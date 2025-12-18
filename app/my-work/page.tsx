import { theme } from "@/app/theme/theme";
import AppLayout from "../components/AppLayout";

export default function MyWorkPage() {
  return (
    <div className="relative z-20">
      <AppLayout>
        <div>
          <h2
            className="text-lg font-semibold"
            style={{ color: theme.text.primary }}
          >
            My Work
          </h2>
          <p style={{ color: theme.text.secondary }}>
            Tasks, assignments, and progress will appear here.
          </p>
        </div>
      </AppLayout>
    </div>
  );
}
