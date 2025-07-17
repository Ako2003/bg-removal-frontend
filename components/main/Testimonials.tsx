import {motion} from "framer-motion";
import {Card} from "@/components/ui/card";
import {Star} from "lucide-react";
import {Badge} from "@/components/ui/badge";

export default function Testimonials(){
    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-slate-800">What Our Users Say</h2>
                    <p className="text-xl text-slate-600">Join thousands of satisfied creators and businesses</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Johnson",
                            role: "E-commerce Manager",
                            company: "StyleCo",
                            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
                            content: "BgStudio transformed our product photography workflow. The background removal is incredibly accurate, and the custom backgrounds make our products look professional.",
                            rating: 5,
                            feature: "Background Tools"
                        },
                        {
                            name: "Mike Chen",
                            role: "Social Media Manager",
                            company: "TechStart",
                            avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
                            content: "The custom background feature is a game-changer for our social media content. We can create stunning visuals that match our brand perfectly.",
                            rating: 5,
                            feature: "Background Tools"
                        },
                        {
                            name: "Emily Rodriguez",
                            role: "Graphic Designer",
                            company: "Creative Agency",
                            avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
                            content: "As a designer, I'm very particular about quality. BgStudio delivers professional results every time, and the batch processing saves me hours.",
                            rating: 5,
                            feature: "Background Tools"
                        }
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <Card className="p-8 h-full hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-lg">{testimonial.name}</h4>
                                        <p className="text-slate-600">{testimonial.role}</p>
                                        <p className="text-sm text-slate-500">{testimonial.company}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400"/>
                                    ))}
                                </div>
                                <p className="text-slate-700 mb-4 leading-relaxed">{testimonial.content}</p>
                                <Badge
                                    className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200">
                                    {testimonial.feature}
                                </Badge>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}