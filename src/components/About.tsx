import { Heart, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient receives personalized attention and empathetic treatment tailored to their unique needs.",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Building lasting relationships based on trust, communication, and collaborative decision-making.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Committed to the highest standards of medical practice, staying current with latest advancements.",
    },
    {
      icon: TrendingUp,
      title: "Preventive Focus",
      description: "Emphasizing proactive health management to help patients achieve optimal long-term wellness.",
    },
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Dr. Mitchell</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to providing exceptional medical care through expertise, innovation, and genuine compassion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Professional Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in internal medicine, I believe that excellent healthcare 
                combines scientific rigor with genuine human connection. Every patient deserves to be heard, 
                understood, and treated with the highest level of medical expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach focuses on preventive care, early detection, and comprehensive treatment plans 
                that address not just symptoms, but the whole person. I work collaboratively with each patient 
                to develop strategies that fit their lifestyle and health goals.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Areas of Expertise</h3>
              <ul className="space-y-3">
                {[
                  "Chronic Disease Management",
                  "Preventive Medicine & Wellness",
                  "Cardiovascular Health",
                  "Diabetes Care & Education",
                  "Hypertension Management",
                  "General Internal Medicine",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="shadow-card hover:shadow-hover transition-smooth border-border">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
