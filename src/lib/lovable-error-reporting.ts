type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ErrorEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ErrorReportOptions,
  ) => void;
};

declare global {
  interface Window {
    __errorEvents?: ErrorEvents;
  }
}

/**
 * Reports an error to the workspace error tracking system
 * @param error - The error to report
 * @param context - Additional context about the error
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  
  // Log to console for development
  console.error("Error reported:", error, context);
  
  // Call error tracking if available
  window.__errorEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}

// Export with original name for backward compatibility
export const reportLovableError = reportError;
