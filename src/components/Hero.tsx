import { MapPin, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCA0Yy0xLjEwNSAwLTIgLjg5NS0yIDJzLjg5NSAyIDIgMiAyLS44OTUgMi0yLS44OTUtMi0yLTJ6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Board Certified Physician
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Dr. Sarah Mitchell
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Internal Medicine Specialist
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Providing compassionate, comprehensive care with over 15 years of clinical excellence. 
              Your health and well-being are my highest priority.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Experience</p>
                  <p className="font-semibold">15+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Education</p>
                  <p className="font-semibold">MD, FACP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <p className="font-semibold">New York</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 shadow-hover"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={doctorPortrait}
                alt="Dr. Sarah Mitchell - Board Certified Internal Medicine Specialist"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-card hidden md:block">
              <p className="text-3xl font-bold text-primary">5,000+</p>
              <p className="text-muted-foreground">Patients Treated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
