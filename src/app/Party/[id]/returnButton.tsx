"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function ReturnButton() {
  const { back } = useRouter();
  return (
    <Button variant="outline" onClick={back} className="px-2">
      <ArrowLeft />
    </Button>
  );
}
