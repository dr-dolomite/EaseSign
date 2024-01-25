import Image from "next/image";
import { Hero, Form } from "@/components";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <Form/>
    </main>
  );
}
