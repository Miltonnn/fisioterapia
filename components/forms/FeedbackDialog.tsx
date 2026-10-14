"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type FeedbackVariant = "success" | "error";

export interface Feedback {
  variant: FeedbackVariant;
  title: string;
  description: string;
  autoCloseMs?: number;
}

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feedback: Feedback | null;
}

export function useFeedback() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const showFeedback = useCallback((next: Feedback) => {
    setFeedback(next);
    setOpen(true);
  }, []);

  return {
    showFeedback,
    dialogProps: { open, onOpenChange: setOpen, feedback },
  };
}

export function FeedbackDialog({
  open,
  onOpenChange,
  feedback,
}: FeedbackDialogProps) {
  const autoCloseMs = feedback?.autoCloseMs;

  useEffect(() => {
    if (!open || !autoCloseMs) return;

    const timer = setTimeout(() => onOpenChange(false), autoCloseMs);

    return () => clearTimeout(timer);
  }, [open, autoCloseMs, onOpenChange]);

  if (!feedback) return null;

  const isError = feedback.variant === "error";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        role={isError ? "alertdialog" : "dialog"}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          (event.currentTarget as HTMLElement).focus();
        }}
        className="rounded-2xl text-center sm:max-w-sm"
      >
        <div className="flex flex-col items-center gap-4 py-6">
          <div
            className={cn(
              "feedback-icon size-20",
              isError ? "feedback-icon-error text-red-500" : "text-green-500"
            )}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 52 52"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-full overflow-visible"
            >
              <circle
                className="feedback-fill"
                cx="26"
                cy="26"
                r="25"
                fill="currentColor"
              />

              <circle
                className="feedback-ring"
                cx="26"
                cy="26"
                r="25"
                stroke="currentColor"
                strokeWidth="2"
                pathLength={1}
                transform="rotate(-90 26 26)"
              />

              {isError ? (
                <>
                  <path
                    className="feedback-mark"
                    d="M18 18l16 16"
                    stroke="white"
                    strokeWidth="4"
                    pathLength={1}
                  />
                  <path
                    className="feedback-mark feedback-mark-second"
                    d="M34 18L18 34"
                    stroke="white"
                    strokeWidth="4"
                    pathLength={1}
                  />
                </>
              ) : (
                <path
                  className="feedback-mark"
                  d="M15 27l7 7 15-15"
                  stroke="white"
                  strokeWidth="4"
                  pathLength={1}
                />
              )}
            </svg>
          </div>

          <DialogTitle className="text-xl">{feedback.title}</DialogTitle>

          <DialogDescription>{feedback.description}</DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
