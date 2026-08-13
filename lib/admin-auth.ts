export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "admin1234";

const AUTH_KEY = "laguna_admin_authenticated_v1";

export function setAdminAuthenticated(value: boolean): void {
  if (typeof window === "undefined") return;
  try {
    if (value) {
      localStorage.setItem(AUTH_KEY, "true");
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  } catch (err) {
    console.error("Failed to update admin auth state:", err);
  }
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(AUTH_KEY) === "true";
  } catch {
    return false;
  }
}
