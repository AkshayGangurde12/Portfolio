import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get EmailJS configuration from environment variables
  const getEmailJSConfig = (): EmailJSConfig | null => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS not configured. Please add credentials to .env file.');
      return null;
    }

    return { serviceId, templateId, publicKey };
  };

  // Send email via EmailJS
  const sendEmailViaEmailJS = async (
    formData: ContactFormData,
    config: EmailJSConfig
  ): Promise<boolean> => {
    try {
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Akshay Gangurde',
      };

      await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      return true;
    } catch (error) {
      console.error('EmailJS error:', error);
      return false;
    }
  };

  // Mailto fallback (only used if EmailJS fails)
  const handleMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:akshay.gangurde@example.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let success = false;

      // Try EmailJS first (if configured)
      const emailJSConfig = getEmailJSConfig();
      if (emailJSConfig) {
        success = await sendEmailViaEmailJS(formData, emailJSConfig);
        
        if (success) {
          toast.success("Message sent successfully! I'll get back to you soon.");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        } else {
          // EmailJS failed, fall back to mailto
          toast.error("Failed to send message. Opening your email client...");
          handleMailto();
        }
      } else {
        // EmailJS not configured, use mailto
        toast.info("Opening your email client...");
        handleMailto();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact me directly.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshay.gangurde@example.com",
      href: "mailto:akshay.gangurde@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8010756378",
      href: "tel:+918010756378",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "https://maps.google.com/?q=Pune,Maharashtra,India",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshay-gangurde",
      href: "https://www.linkedin.com/in/akshay-gangurde-8b2714283",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/AkshayGangurde12",
      href: "https://github.com/AkshayGangurde12",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-primary">Me</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary">Get in Touch</h3>
              <p className="text-base md:text-lg text-muted-foreground/90 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg glass hover:glass-hover transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </motion.a>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1"
              >
                <a href="mailto:akshay.gangurde@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1"
              >
                <a href="https://www.linkedin.com/in/akshay-gangurde-8b2714283" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-10 glass hover:glass-hover transition-all duration-500 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm md:text-base font-semibold mb-3">
                      First name
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm md:text-base font-semibold mb-3">
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-semibold mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-semibold mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-elegant hover:shadow-glow transition-all text-base md:text-lg py-6 md:py-7"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs md:text-sm text-muted-foreground/80 text-center">
                  Your message will be sent directly without opening any email client.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
