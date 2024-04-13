import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell">Data</TableHead>
            <TableHead>Condominio</TableHead>
            <TableHead>Apt</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium hidden sm:table-cell">
              11/04/24
            </TableCell>
            <TableCell className="font-medium">Alta Vista</TableCell>
            <TableCell className="font-bold">C1204</TableCell>
            <TableCell className="font-medium hidden sm:table-cell">
              <Badge>Ativo</Badge>
            </TableCell>
            <TableCell className="text-end">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="/Party/10"
              >
                <ArrowRight />
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
