"use client"
import {motion} from "framer-motion";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ChevronDown, Sparkles} from "lucide-react";
import {useState} from "react";

export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <Badge
                        className="mb-6 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 text-slate-700 border-slate-200 px-4 py-2">
                        <Sparkles className="w-4 h-4 mr-2"/>
                        Got Questions?
                    </Badge>
                    <h2 className="text-5xl font-bold mb-6 text-slate-800">Frequently Asked Questions</h2>
                    <p className="text-xl text-slate-600">Everything you need to know about BgRemover</p>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            question: "How accurate is the background removal?",
                            answer: "Our AI achieves 99.5%+ accuracy on most images. Complex backgrounds or fine details like hair are handled with precision using advanced edge detection algorithms. We continuously improve our AI models to handle even the most challenging images."
                        },
                        {
                            question: "Can I use my own custom backgrounds?",
                            answer: "Yes! You can upload your own custom backgrounds and apply them to your images. Choose from solid colors, gradients, or upload your own background images. Perfect for creating consistent branding across your product photos."
                        },
                        {
                            question: "What image formats are supported?",
                            answer: "We support JPG, PNG, WebP, and most common image formats up to 10MB each. Output can be saved as PNG with transparency, JPG with solid background, or WebP for web optimization. All formats maintain high quality."
                        },
                        {
                            question: "Is my data secure and private?",
                            answer: "Absolutely! All image processing happens locally in your browser using WebAssembly. Your images are never uploaded to our servers or stored anywhere. Complete privacy guaranteed - your images never leave your device."
                        },
                        {
                            question: "Can I process multiple images at once?",
                            answer: "Yes! You can upload and process up to 15 images simultaneously with our batch processing feature. Perfect for e-commerce product photos, social media content, or any bulk image editing needs."
                        },
                        {
                            question: "Do I need to create an account?",
                            answer: "No account required! You can start using BgRemover immediately without any signup process. Just visit the tool, upload your images, and start removing backgrounds right away."
                        },
                        {
                            question: "What's the difference between background removal and blur?",
                            answer: "Background removal completely removes the background making it transparent, perfect for product photos and logos. Background blur keeps the background but blurs it for artistic portrait effects, similar to professional camera bokeh."
                        },
                        {
                            question: "Are there any usage limits?",
                            answer: "The free version allows processing up to 15 images at once with full quality results. No daily limits or restrictions - process as many batches as you need, completely free."
                        }
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.05}}
                            viewport={{once: true}}
                        >
                            <Card
                                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-slate-200">
                                <div
                                    className="p-6 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                                                openFAQ === index ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </div>
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFAQ === index ? 'auto' : 0,
                                        opacity: openFAQ === index ? 1 : 0
                                    }}
                                    transition={{duration: 0.3, ease: 'easeInOut'}}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}