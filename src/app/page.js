import { redirect } from "next/navigation";

export default function Home() {
  // Automatyczne przekierowanie na /o-mnie
  redirect("/o-mnie");
}
