import { Label, ProgressBar } from "@heroui/react";

export default function LoadingProgressBar() {
    return (
      <ProgressBar isIndeterminate aria-label="Loading" className="w-64">
        <Label>Loading...</Label>
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
    );
  }