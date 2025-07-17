import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ImageRevealSlider from "@/components/ImageComparison";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        {/*<Badge*/}
                        {/*    className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200 px-4 py-2">*/}
                        {/*    <Sparkles className="w-4 h-4 mr-2"/>*/}
                        {/*    AI-Powered Image Background Editor*/}
                        {/*</Badge>*/}
                        <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                          Transform Your Images
                        </span>
                            <br/>
                            <span
                                className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Instantly</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Remove backgrounds or add stunning custom backgrounds to your images with our tool. Perfect
                            for
                            e-commerce, social media, and professional photography.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full max-w-3xl mx-auto">
                    <ImageRevealSlider img1={"/cars/porsche 911.png"} img2={"/cars/porsche 911 output.png"}/>
                </div>

                <div className="flex justify-center mt-10">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-4 text-lg"
                        onClick={() => window.location.href = '/custom-background'}
                    >
                        Start Removing Backgrounds <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}