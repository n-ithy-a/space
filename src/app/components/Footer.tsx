import { Video, Mail, Phone, MapPin, RocketIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <RocketIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">Space</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming visions into stunning video content that captivates and inspires.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Color Grading</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">VFX</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:hello@visioncut.com" className="hover:text-purple-400 transition-colors">
                  hello@visioncut.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+15551234567" className="hover:text-purple-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span>123 Creative Street, Los Angeles, CA 90001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 VisionCut. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
