import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/landing/Container";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { templates } from "@/lib/templates";

const categories = ["Product", "Marketing", "Business"] as const;

export default function TemplatesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-background py-12 md:py-16">
        <Container>
          <div className="mb-12 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Template Library
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse email and document templates by category. More templates
              ship in Phases 4–5.
            </p>
          </div>

          {categories.map((category) => {
            const categoryTemplates = templates.filter(
              (t) => t.category === category,
            );
            return (
              <section key={category} className="mb-12">
                <h2 className="mb-6 text-xl font-semibold">{category}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryTemplates.map((template) => {
                    const href =
                      template.status === "ready"
                        ? `/preview/${template.type}/${template.slug}`
                        : "#";
                    return (
                      <Link
                        key={`${template.type}-${template.slug}`}
                        href={href}
                        className={template.status === "planned" ? "pointer-events-none" : ""}
                      >
                        <Card className={template.status === "planned" ? "opacity-70" : "hover:ring-primary/30"}>
                          <CardHeader>
                            <div className="flex items-start justify-between gap-2">
                              <CardTitle className="text-base">{template.name}</CardTitle>
                              <Badge variant="outline" className="shrink-0 text-xs">
                                {template.type}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              {template.description}
                            </p>
                            {template.status === "planned" && (
                              <Badge variant="secondary" className="mt-3">
                                Coming soon
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </Container>
      </main>
      <Footer />
    </>
  );
}