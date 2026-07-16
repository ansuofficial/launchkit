import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-[var(--lk-max-width)] flex-col items-center justify-center px-6 py-16">
        <Badge variant="secondary" className="mb-4">
          Phase 2 — Elements Foundation
        </Badge>
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl">
          <span className="text-primary">LaunchKit</span>
        </h1>
        <p className="mb-8 max-w-xl text-center text-lg text-muted-foreground">
          Professional email &amp; document templates for modern software
          teams. Web UI powered by shadcn/ui. Templates powered by Elements.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/preview/email/hello"
            className={cn(buttonVariants())}
          >
            Preview Hello Email
          </Link>
          <Link
            href="/templates"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Browse Templates
          </Link>
        </div>

        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Phase 2 checkpoint</CardTitle>
            <CardDescription>
              Shared Elements blocks + renderToHtml preview pipeline
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Visit{" "}
            <Link
              href="/preview/email/hello"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              /preview/email/hello
            </Link>{" "}
            to verify the hello template renders via Elements.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}