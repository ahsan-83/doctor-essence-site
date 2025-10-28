import { Calendar, Clock, Video, BookOpen, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const articles = [
    {
      type: "article",
      title: "Understanding Heart Disease: Prevention and Early Detection",
      excerpt: "Learn about the latest cardiovascular health guidelines and how lifestyle modifications can significantly reduce your risk of heart disease.",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Cardiology",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    },
    {
      type: "video",
      title: "Managing Type 2 Diabetes: A Complete Guide",
      excerpt: "Watch this comprehensive video on diabetes management, including medication options, diet strategies, and monitoring techniques.",
      author: "Dr. Sarah Mitchell",
      date: "March 10, 2024",
      duration: "15 min",
      category: "Endocrinology",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      type: "article",
      title: "Women's Health After 50: Essential Screenings and Care",
      excerpt: "A comprehensive guide to navigating menopause, bone health, and preventive care for women in their golden years.",
      author: "Dr. Sarah Mitchell",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Women's Health",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    },
    {
      type: "video",
      title: "Hypertension Management: What You Need to Know",
      excerpt: "Expert insights on controlling high blood pressure through medication, lifestyle changes, and regular monitoring.",
      author: "Dr. Sarah Mitchell",
      date: "February 28, 2024",
      duration: "12 min",
      category: "Cardiology",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80",
    },
    {
      type: "article",
      title: "Preventive Care: Your Annual Physical Examination Checklist",
      excerpt: "Discover what tests and screenings you should have at different ages and how preventive care can save lives.",
      author: "Dr. Sarah Mitchell",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Preventive Medicine",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    },
    {
      type: "video",
      title: "Understanding Cholesterol: The Good, The Bad, and The Treatment",
      excerpt: "Learn about lipid panels, cholesterol management, and when medication might be necessary for your heart health.",
      author: "Dr. Sarah Mitchell",
      date: "February 15, 2024",
      duration: "10 min",
      category: "Cardiology",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Health Articles & Video Content
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert medical insights, educational videos, and articles to help you make informed decisions about your health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-hover transition-smooth group flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-smooth">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Video className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    {item.type === "article" ? (
                      <BookOpen className="w-4 h-4 text-primary" />
                    ) : (
                      <Video className="w-4 h-4 text-primary" />
                    )}
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.excerpt}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.type === "article" ? item.readTime : item.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" className="w-full group/btn">
                    {item.type === "article" ? "Read Article" : "Watch Video"}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Stay Informed About Your Health
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to receive the latest health articles, educational videos, and medical insights directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-11 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button className="w-full sm:w-auto px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
