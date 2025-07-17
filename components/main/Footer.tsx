import {Layers} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div
                                className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <Layers className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-2xl font-bold">BgStudio</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            The most advanced AI-powered background removal and replacement tool.
                            Transform your images with professional quality results.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Features</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Background Removal</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Custom Backgrounds</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Batch Processing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Company</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Support</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                    <p>&copy; 2024 BgStudio. All rights reserved. Made with ❤️ for creators worldwide.</p>
                </div>
            </div>
        </footer>
    )
}