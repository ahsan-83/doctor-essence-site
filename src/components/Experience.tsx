import { Briefcase, Users, Award as AwardIcon, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const positions = [
    {
      title: "Attending Physician, Internal Medicine",
      organization: "NewYork-Presbyterian Hospital",
      period: "2015 - Present",
      description: "Providing comprehensive outpatient and inpatient care. Leading quality improvement initiatives and mentoring resident physicians.",
      highlights: [
        "Over 5,000 patients under active care",
        "Patient satisfaction rating: 98%",
        "Quality care recognition award recipient",
      ],
    },
    {
      title: "Associate Physician",
      organization: "Mount Sinai Medical Center",
      period: "2010 - 2015",
      description: "Specialized in chronic disease management and preventive medicine. Developed patient education programs.",
      highlights: [
        "Established diabetes management program",
        "Published research on hypertension treatment",
        "Led multidisciplinary care teams",
      ],
    },
    {
      title: "Clinical Fellow",
      organization: "Massachusetts General Hospital",
      period: "2008 - 2010",
      description: "Advanced clinical training in internal medicine with focus on cardiovascular health and metabolic disorders.",
      highlights: [
        "Completed advanced cardiology rotation",
        "Participated in clinical research trials",
        "Teaching excellence award",
      ],
    },
  ];

  const memberships = [
    "American College of Physicians (Fellow)",
    "American Medical Association",
    "American Society of Internal Medicine",
    "New York State Medical Society",
    "American Heart Association",
    "Endocrine Society",
  ];

  const awards = [
    {
      title: "Top Doctor Award",
      organization: "Castle Connolly Medical Ltd.",
      year: "2020-2024",
    },
    {
      title: "Patient's Choice Award",
      organization: "Vitals",
      year: "2019-2024",
    },
    {
      title: "Compassionate Doctor Recognition",
      organization: "Vitals",
      year: "2018-2024",
    },
    {
      title: "Excellence in Teaching",
      organization: "NewYork-Presbyterian Hospital",
      year: "2021",
    },
  ];

  return (
    <section id="experience" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              A career dedicated to clinical excellence and patient care
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Career History</h3>
            </div>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-xl text-foreground mb-1">
                          {position.title}
                        </h4>
                        <p className="text-primary font-medium">{position.organization}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium bg-muted px-4 py-2 rounded-full mt-2 md:mt-0 inline-block">
                        {position.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="space-y-2">
                      {position.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Professional Memberships */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Professional Memberships</h3>
              </div>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {memberships.map((membership) => (
                      <li key={membership} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{membership}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Awards & Accomplishments */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <AwardIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Awards & Accomplishments</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">{award.title}</h4>
                          <p className="text-sm text-muted-foreground">{award.organization}</p>
                        </div>
                        <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          {award.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
