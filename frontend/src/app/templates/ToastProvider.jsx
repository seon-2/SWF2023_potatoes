"use client";

import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return <ToastContainer autoClose={2000} theme="dark" />;
}
