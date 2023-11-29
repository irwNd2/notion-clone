"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  useRouter().push("/en");
  return <main></main>;
}
