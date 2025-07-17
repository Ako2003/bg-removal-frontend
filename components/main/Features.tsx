import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    Camera,
    Clock,
    Download,
    Image as ImageIcon,
    Layers,
    Palette,
    Scissors,
    Shield,
    Sparkles,
    Users,
    Wand2,
    Zap
} from "lucide-react";
import {motion} from "framer-motion";
import {Card} from "@/components/ui/card";

export default function Features(){
    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-slate-800">Powerful Features</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Everything you need for professional image background editing
                    </p>
                </div>

                <Tabs defaultValue="remove" className="w-full">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-100">
                        <TabsTrigger value="remove"
                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
                            Background Removal
                        </TabsTrigger>
                        <TabsTrigger value="replace"
                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
                            Background Replacement
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="remove">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Scissors className="w-8 h-8 text-emerald-500"/>,
                                    title: "Precise Edge Detection",
                                    description: "Advanced AI algorithms detect even the finest details like hair and fur"
                                },
                                {
                                    icon: <Zap className="w-8 h-8 text-emerald-500"/>,
                                    title: "Instant Processing",
                                    description: "Remove backgrounds in seconds with our optimized AI engine"
                                },
                                {
                                    icon: <Shield className="w-8 h-8 text-emerald-500"/>,
                                    title: "Privacy Protected",
                                    description: "All processing happens locally - your images never leave your device"
                                },
                                {
                                    icon: <Download className="w-8 h-8 text-emerald-500"/>,
                                    title: "High-Quality Output",
                                    description: "Export in PNG with perfect transparency or JPG with solid colors"
                                },
                                {
                                    icon: <Users className="w-8 h-8 text-emerald-500"/>,
                                    title: "Batch Processing",
                                    description: "Process multiple images simultaneously to save time"
                                },
                                {
                                    icon: <Clock className="w-8 h-8 text-emerald-500"/>,
                                    title: "Always Available",
                                    description: "24/7 access from any device, anywhere in the world"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                    viewport={{once: true}}
                                >
                                    <Card
                                        className="p-6 h-full hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="replace">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Palette className="w-8 h-8 text-emerald-500"/>,
                                    title: "Custom Backgrounds",
                                    description: "Choose from thousands of professional backgrounds or upload your own"
                                },
                                {
                                    icon: <Wand2 className="w-8 h-8 text-emerald-500"/>,
                                    title: "Smart Blending",
                                    description: "AI automatically adjusts lighting and shadows for realistic results"
                                },
                                {
                                    icon: <Camera className="w-8 h-8 text-emerald-500"/>,
                                    title: "Studio Quality",
                                    description: "Create professional product photos and portraits instantly"
                                },
                                {
                                    icon: <Sparkles className="w-8 h-8 text-emerald-500"/>,
                                    title: "Creative Effects",
                                    description: "Add artistic filters, gradients, and special effects"
                                },
                                {
                                    icon: <Layers className="w-8 h-8 text-emerald-500"/>,
                                    title: "Layer Control",
                                    description: "Fine-tune positioning, scaling, and blending of backgrounds"
                                },
                                {
                                    icon: <ImageIcon className="w-8 h-8 text-emerald-500"/>,
                                    title: "Multiple Formats",
                                    description: "Export in various formats optimized for different platforms"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                    viewport={{once: true}}
                                >
                                    <Card
                                        className="p-6 h-full hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200">
                                        <div className="mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}