import {Download, Upload, Wand2} from "lucide-react";
import {motion} from "framer-motion";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-slate-800">How It Works</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Transform your images in three simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            step: "01",
                            title: "Upload Your Image",
                            description: "Drag and drop or click to upload your image. We support all major formats including JPG, PNG, and WebP.",
                            icon: <Upload className="w-10 h-10 text-emerald-600"/>,
                            color: "emerald"
                        },
                        {
                            step: "02",
                            title: "Choose Your Action",
                            description: "Select whether you want to remove the background or replace it with a custom one from our library.",
                            icon: <Wand2 className="w-10 h-10 text-emerald-600"/>,
                            color: "emerald"
                        },
                        {
                            step: "03",
                            title: "Download Result",
                            description: "Get your professionally edited image with transparent or custom background in seconds.",
                            icon: <Download className="w-10 h-10 text-emerald-600"/>,
                            color: "emerald"
                        }
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                            viewport={{once: true}}
                            className="text-center bg-white rounded-xl p-6 border-2 border-emerald-100 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
                        >
                            <div className="relative mb-8">
                                <div
                                    className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-xl border border-slate-200">
                                    {step.icon}
                                </div>
                                <div className={`absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r ${
                                    step.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                                        step.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                                            'from-emerald-500 to-teal-600'
                                } rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                                    {step.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-slate-800">{step.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}