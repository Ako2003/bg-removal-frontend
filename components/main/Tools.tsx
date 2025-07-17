import {ArrowRight, Droplet, Layers, MoveRight, Sparkles} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function Tools() {
    return(
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-slate-800">Explore Our Other Tools</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Discover more ways to enhance your images
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Layers className="w-8 h-8 text-emerald-500"/>,
                            title: "Add custom background",
                            description: "Replace removed backgrounds with stunning custom scenes, colors, or patterns.",
                            href: "/custom-background"
                        },
                        {
                            icon: <Droplet className="w-8 h-8 text-emerald-500"/>,
                            title: "Background Blur",
                            description: "Create professional depth-of-field effects by blurring image backgrounds.",
                            href: "/background-blur",
                        },
                        {
                            icon: <Sparkles className="w-8 h-8 text-emerald-500"/>,
                            title: "Object Remover",
                            description: "Remove unwanted objects, people, or text from your images seamlessly. ",
                            // href: "",
                        }
                    ].map((feature, index) => (
                        <motion.a
                            href={feature.href}
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-200 relative">
                                <div className="mb-4">{feature.icon}</div>
                                {feature.title === "Object Remover" &&
                                    <Badge className="absolute top-6 right-6 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border-amber-200">
                                        Coming Soon
                                    </Badge>
                                }
                                <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                                <div className="flex justify-end items-center gap-x-1 mt-3">
                                    <p className="text-emerald-500">Try It</p>
                                    <MoveRight className="w-4 h-4 text-emerald-500"/>
                                </div>
                            </Card>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}