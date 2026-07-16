"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface EmailPreviewFrameProps {
  name: string;
  category: string;
  html: string;
}

export function EmailPreviewFrame({
  name,
  category,
  html,
}: EmailPreviewFrameProps) {
  return (
    <div className="min-h-screen bg-muted/40 p-6">
      <div className="mx-auto max-w-4xl space-y-4">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Link>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>{name}</CardTitle>
            <Badge variant="secondary">{category}</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              title={`${name} preview`}
              srcDoc={html}
              className="h-[720px] w-full border-0"
              sandbox="allow-same-origin"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}