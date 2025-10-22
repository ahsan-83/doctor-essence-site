import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Johns Hopkins School of Medicine",
      year: "2005",
      description: "Graduated with honors, Dean's List all four years",
    },
    {
      degree: "Bachelor of Science in Biology",
      institution: "Stanford University",
      year: "2001",
      description: "Summa Cum Laude, Phi Beta Kappa",
    },
  ];

  const residency = [
    {
      program: "Internal Medicine Residency",
      institution: "Massachusetts General Hospital",
      years: "2005 - 2008",
      description: "Chief Resident, 2007-2008",
    },
  ];

  const certifications = [
    {
      title: "Board Certified in Internal Medicine",
      organization: "American Board of Internal Medicine",
      year: "2008",
    },
    {
      title: "Fellow, American College of Physicians (FACP)",
      organization: "American College of Physicians",
      year: "2012",
    },
    {
      title: "Advanced Cardiac Life Support (ACLS)",
      organization: "American Heart Association",
      year: "2024",
    },
    {
      title: "Basic Life Support (BLS)",
      organization: "American Heart Association",
      year: "2024",
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Education & Training
            </h2>
            <p className="text-xl text-muted-foreground">
              A foundation of excellence from leading medical institutions
            </p>
          </div>

          {/* Medical Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Medical Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <Card key={edu.degree} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                      <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Residency */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Residency</h3>
            </div>
            <div className="grid gap-6">
              {residency.map((res) => (
                <Card key={res.program} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-lg text-foreground">{res.program}</h4>
                      <span className="text-sm text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                        {res.years}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{res.institution}</p>
                    <p className="text-sm text-muted-foreground">{res.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.title} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground pr-4">{cert.title}</h4>
                      <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
