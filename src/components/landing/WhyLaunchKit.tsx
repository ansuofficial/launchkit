import { Rocket, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "./Container";
import { Section } from "./Section";

const values = [
  {
    icon: Zap,
    title: "Ship Faster",
    description: "Build and deploy in minutes, not weeks.",
  },
  {
    icon: Rocket,
    title: "Scale Smarter",
    description: "Infrastructure that grows with your team.",
  },
  {
    icon: Shield,
    title: "Stay Secure",
    description: "Enterprise-grade patterns from day one.",
  },
];

export function WhyLaunchKit() {
  return (
    <Section variant="light" id="why">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why LaunchKit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A cohesive design system—not isolated templates. Built for teams
            who care about craft.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-border/60">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}