
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "yogabalajiramesh@gmail.com",
      href: "mailto:yogabalajiramesh@gmail.com",
      color: "text-red-400"
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

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            onClick={() => window.open("mailto:yogabalajiramesh@gmail.com", "_blank")}
          >
            <Mail className="h-5 w-5 mr-2" />
            Let's Work Together
          </Button>
        </div>
        
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
