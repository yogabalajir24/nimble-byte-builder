
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Mail, Phone, Linkedin, Github, Code, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "yogabalajiramesh@gmail.com",
      href: "mailto:yogabalajiramesh@gmail.com",
      color: "text-red-400",
      isEmail: true
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9894512828",
      href: "tel:+919894512828",
      color: "text-green-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "yogabalaji-ramesh",
      href: "https://linkedin.com/in/yogabalaji-ramesh-a51691255",
      color: "text-blue-400"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "yogabalajir24",
      href: "https://github.com/yogabalajir24",
      color: "text-purple-400"
    },
    {
      icon: <Code className="h-6 w-6" />,
      label: "LeetCode",
      value: "FwHPWvsZyx",
      href: "https://leetcode.com/u/FwHPWvsZyx",
      color: "text-yellow-400"
    }
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    
    try {
      // Updated template parameters to match your EmailJS template
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message
      };

      await emailjs.send(
        "service_gydezog",
        "template_gi4iyh8",
        templateParams,
        "5D1bR83hfcxEIcNpJ"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      form.reset();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailClick = (contact: any) => {
    if (contact.isEmail) {
      setIsDialogOpen(true);
    } else {
      window.open(contact.href, "_blank");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl transform rotate-45 animate-float"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/25 to-pink-600/25 rounded-2xl transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-green-400/20 to-teal-600/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-gradient-to-br from-orange-400/15 to-red-600/15 rounded-3xl transform rotate-12 animate-float delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-20 h-20 border-2 border-blue-400/30 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-purple-400/40 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`${contact.color}`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <button
                          onClick={() => handleEmailClick(contact)}
                          className="text-white hover:text-blue-400 transition-colors duration-200 font-medium text-left"
                        >
                          {contact.value}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <FormItem className="flex-1 flex flex-col">
                          <FormLabel className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message here..."
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px] flex-1"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 mt-auto"
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Email Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-gray-900 border-gray-700 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white">Send me a message</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Yogabalaji R. All rights reserved. Built with passion and React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
