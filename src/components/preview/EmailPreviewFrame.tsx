"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { preparePreviewHtml } from "@/lib/preview-html";
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
  const previewHtml = preparePreviewHtml(html);

  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-muted/40 p-6">
      <div className="mx-auto max-w-4xl space-y-4">
        <Link
          href="/templates"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          <ArrowLeft className="mr-2 size-4" />
          Open template library
        </Link>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle>{name}</CardTitle>
            <Badge variant="secondary">{category}</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              title={`${name} preview`}
              srcDoc={previewHtml}
              className="h-[720px] w-full border-0"
              sandbox="allow-same-origin allow-scripts"
              referrerPolicy="no-referrer"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}