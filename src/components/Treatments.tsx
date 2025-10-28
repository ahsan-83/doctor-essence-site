import { Heart, Activity, Droplet, Pill, Stethoscope, Thermometer, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Treatments = () => {
  const diseaseCategories = [
    {
      icon: Heart,
      title: "Cardiovascular Diseases",
      conditions: [
        {
          name: "Hypertension (High Blood Pressure)",
          procedures: [
            "Comprehensive blood pressure monitoring and assessment",
            "Lifestyle modification counseling (diet, exercise, stress management)",
            "Medication management with ACE inhibitors, beta-blockers, or diuretics",
            "Regular follow-up visits with 24-hour blood pressure monitoring",
            "Assessment of target organ damage (heart, kidneys, eyes)",
          ],
        },
        {
          name: "Coronary Artery Disease",
          procedures: [
            "Risk stratification using lipid panels and cardiac biomarkers",
            "EKG and stress testing coordination",
            "Statin therapy and antiplatelet medication management",
            "Cardiac rehabilitation program coordination",
            "Preventive care planning to reduce cardiovascular events",
          ],
        },
        {
          name: "High Cholesterol & Lipid Disorders",
          procedures: [
            "Advanced lipid panel testing (LDL, HDL, triglycerides, lipoprotein-a)",
            "Personalized dietary counseling and nutrition planning",
            "Statin and PCSK9 inhibitor therapy when indicated",
            "Monitoring for medication side effects and efficacy",
            "Family screening for inherited lipid disorders",
          ],
        },
      ],
    },
    {
      icon: Droplet,
      title: "Metabolic & Endocrine Disorders",
      conditions: [
        {
          name: "Type 2 Diabetes Mellitus",
          procedures: [
            "HbA1c monitoring and glucose management optimization",
            "Insulin and oral medication titration (Metformin, GLP-1 agonists, SGLT2 inhibitors)",
            "Diabetic complication screening (retinopathy, neuropathy, nephropathy)",
            "Continuous glucose monitoring device prescription and management",
            "Nutritional counseling and diabetes self-management education",
          ],
        },
        {
          name: "Metabolic Syndrome",
          procedures: [
            "Comprehensive metabolic panel assessment",
            "Body composition analysis and weight management programs",
            "Insulin resistance testing and management",
            "Coordinated care for associated conditions (hypertension, dyslipidemia)",
            "Exercise prescription and lifestyle intervention programs",
          ],
        },
        {
          name: "Thyroid Disorders",
          procedures: [
            "Thyroid function testing (TSH, Free T4, T3, antibodies)",
            "Thyroid ultrasound coordination for nodules",
            "Levothyroxine dosing and monitoring for hypothyroidism",
            "Anti-thyroid medication management for hyperthyroidism",
            "Endocrinology referral coordination when needed",
          ],
        },
      ],
    },
    {
      icon: Activity,
      title: "Respiratory Conditions",
      conditions: [
        {
          name: "Chronic Obstructive Pulmonary Disease (COPD)",
          procedures: [
            "Pulmonary function testing (spirometry) and monitoring",
            "Inhaler therapy optimization (bronchodilators, corticosteroids)",
            "Smoking cessation counseling and pharmacotherapy",
            "Oxygen therapy assessment and prescription",
            "Pulmonary rehabilitation program referrals",
          ],
        },
        {
          name: "Asthma",
          procedures: [
            "Peak flow monitoring and asthma action plan development",
            "Controller and rescue medication management",
            "Allergy testing coordination and trigger identification",
            "Biologic therapy evaluation for severe asthma",
            "Patient education on proper inhaler technique",
          ],
        },
      ],
    },
    {
      icon: Pill,
      title: "Autoimmune & Inflammatory Conditions",
      conditions: [
        {
          name: "Rheumatoid Arthritis",
          procedures: [
            "Inflammatory marker monitoring (CRP, ESR, RF, anti-CCP)",
            "Disease-modifying antirheumatic drug (DMARD) therapy",
            "Biologic medication coordination with rheumatology",
            "Joint protection strategies and physical therapy referrals",
            "Regular monitoring for medication side effects",
          ],
        },
        {
          name: "Inflammatory Bowel Disease",
          procedures: [
            "Symptom monitoring and disease activity assessment",
            "Immunosuppressive medication management",
            "Nutritional support and dietary counseling",
            "Gastroenterology co-management and colonoscopy coordination",
            "Monitoring for extra-intestinal manifestations",
          ],
        },
      ],
    },
    {
      icon: Stethoscope,
      title: "Preventive Medicine",
      conditions: [
        {
          name: "Annual Wellness Examinations",
          procedures: [
            "Comprehensive physical examination and vital sign assessment",
            "Age-appropriate cancer screening (colonoscopy, mammography, etc.)",
            "Vaccination updates (flu, pneumonia, shingles, COVID-19)",
            "Cardiovascular risk assessment using Framingham or ASCVD calculators",
            "Mental health screening and counseling",
          ],
        },
        {
          name: "Health Maintenance",
          procedures: [
            "Chronic disease prevention counseling",
            "Bone density screening for osteoporosis",
            "Falls risk assessment in elderly patients",
            "Cognitive screening and dementia evaluation",
            "Advance care planning discussions",
          ],
        },
      ],
    },
    {
      icon: Thermometer,
      title: "Women's Health",
      conditions: [
        {
          name: "Menopause Management",
          procedures: [
            "Hormone level assessment and symptom evaluation",
            "Hormone replacement therapy (HRT) counseling and prescription",
            "Non-hormonal treatment options for hot flashes",
            "Bone density screening and osteoporosis prevention",
            "Cardiovascular risk reassessment during menopausal transition",
          ],
        },
        {
          name: "Osteoporosis Prevention & Treatment",
          procedures: [
            "DEXA scan coordination and interpretation",
            "Calcium and vitamin D supplementation recommendations",
            "Bisphosphonate or other bone-strengthening medication therapy",
            "Fall prevention strategies and balance training",
            "Fracture risk assessment using FRAX tool",
          ],
        },
      ],
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Disease Treatment & Medical Procedures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based treatment protocols tailored to your individual health needs with comprehensive procedural approaches
            </p>
          </div>

          <Tabs defaultValue="cardiovascular" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12 h-auto">
              {diseaseCategories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {diseaseCategories.map((category, categoryIndex) => (
              <TabsContent
                key={categoryIndex}
                value={category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                className="space-y-6"
              >
                {category.conditions.map((condition, conditionIndex) => (
                  <Card key={conditionIndex} className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        {condition.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-lg mb-4 text-foreground">Treatment Procedures & Protocols:</h4>
                      <ul className="space-y-3">
                        {condition.procedures.map((procedure, procedureIndex) => (
                          <li key={procedureIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">{procedure}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 bg-gradient-section rounded-2xl p-8 md:p-12 shadow-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Comprehensive Care Approach
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Every treatment plan is personalized based on your medical history, current health status, and individual goals
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Patient-Centered</h4>
                <p className="text-sm text-muted-foreground">Individualized treatment plans focused on your unique needs and preferences</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Evidence-Based</h4>
                <p className="text-sm text-muted-foreground">Treatment protocols grounded in the latest medical research and clinical guidelines</p>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Coordinated Care</h4>
                <p className="text-sm text-muted-foreground">Seamless collaboration with specialists to ensure comprehensive health management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
