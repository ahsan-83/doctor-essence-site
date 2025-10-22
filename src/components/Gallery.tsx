import clinicInterior from "@/assets/clinic-interior.jpg";
import examRoom from "@/assets/exam-room.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const Gallery = () => {
  const images = [
    {
      src: clinicInterior,
      alt: "Modern medical clinic waiting room with comfortable seating and natural lighting",
      title: "Reception & Waiting Area",
    },
    {
      src: examRoom,
      alt: "Professional medical examination room with modern equipment",
      title: "Examination Room",
    },
    {
      src: consultationRoom,
      alt: "Private consultation office for patient discussions",
      title: "Consultation Office",
    },
  ];

  return (
    <section id="gallery" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Facility
            </h2>
            <p className="text-xl text-muted-foreground">
              A modern, comfortable environment designed for your care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-smooth"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our state-of-the-art facility is designed to provide a comfortable and welcoming 
              environment while maintaining the highest standards of medical care and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
