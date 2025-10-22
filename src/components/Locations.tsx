import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Locations = () => {
  const locations = [
    {
      name: "Main Office - Manhattan",
      address: "525 East 68th Street, Suite 204",
      city: "New York, NY 10065",
      phone: "(212) 555-0123",
      hours: [
        { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
    {
      name: "Brooklyn Location",
      address: "450 Clarkson Avenue, Building B",
      city: "Brooklyn, NY 11203",
      phone: "(718) 555-0456",
      hours: [
        { day: "Monday, Wednesday, Friday", time: "9:00 AM - 4:00 PM" },
        { day: "Tuesday, Thursday", time: "12:00 PM - 7:00 PM" },
        { day: "Saturday - Sunday", time: "Closed" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Consultation Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              Convenient locations to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    {location.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-primary hover:underline"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start gap-3 mb-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-foreground">Office Hours</span>
                      </div>
                      <div className="ml-8 space-y-2">
                        {location.hours.map((hour, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{hour.day}</span>
                            <span className="text-foreground font-medium">{hour.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="shadow-card inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email for inquiries</p>
                    <a
                      href="mailto:dr.mitchell@example.com"
                      className="text-primary hover:underline font-medium"
                    >
                      dr.mitchell@example.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
