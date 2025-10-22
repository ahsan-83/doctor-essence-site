import { Heart, Activity, Droplet, Pill, Stethoscope, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Treatments = () => {
  const treatments = [
    {
      icon: Heart,
      title: "Cardiovascular Care",
      description: "Comprehensive management of heart conditions including hypertension, high cholesterol, and coronary artery disease prevention.",
    },
    {
      icon: Droplet,
      title: "Diabetes Management",
      description: "Expert care for Type 1 and Type 2 diabetes, including medication management, lifestyle counseling, and complication prevention.",
    },
    {
      icon: Activity,
      title: "Preventive Medicine",
      description: "Annual physicals, health screenings, vaccinations, and personalized wellness plans to maintain optimal health.",
    },
    {
      icon: Pill,
      title: "Chronic Disease Management",
      description: "Ongoing care for conditions like COPD, asthma, thyroid disorders, and autoimmune diseases.",
    },
    {
      icon: Stethoscope,
      title: "General Internal Medicine",
      description: "Diagnosis and treatment of adult diseases, acute illnesses, and complex multi-system conditions.",
    },
    {
      icon: Thermometer,
      title: "Women's Health",
      description: "Specialized care addressing unique health concerns including menopause management and osteoporosis prevention.",
    },
  ];

  const specialties = [
    "Hypertension Management",
    "Lipid Disorders",
    "Metabolic Syndrome",
    "Obesity Management",
    "Geriatric Medicine",
    "Preventive Cardiology",
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Treatments & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive medical services tailored to your individual health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {treatments.map((treatment) => (
              <Card
                key={treatment.title}
                className="shadow-card hover:shadow-hover transition-smooth group"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <treatment.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
              Additional Specialties
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialties.map((specialty) => (
                <div
                  key={specialty}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
