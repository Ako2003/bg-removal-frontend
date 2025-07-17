import { Badge } from "@/components/ui/badge";
import { Camera, Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ImageRevealSlider from "@/components/ImageComparison";

export default function Examples(){
    return (
        <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Badge
                        className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200 px-4 py-2">
                        <Camera className="w-4 h-4 mr-2"/>
                        See It In Action
                    </Badge>
                    <h2 className="text-5xl font-bold mb-6 text-slate-800">Perfect Results for Every Image Type</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Our AI handles all types of images with precision - from portraits to products, pets to vehicles
                    </p>
                </div>

                <Tabs defaultValue="people" className="w-full">
                    <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-slate-100 h-12">
                        <TabsTrigger value="people"
                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
                            People
                        </TabsTrigger>
                        <TabsTrigger value="animals"
                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
                            Animals
                        </TabsTrigger>
                        <TabsTrigger value="cars"
                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
                            Cars
                        </TabsTrigger>
                        <TabsTrigger value="products"
                                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white">
                            Products
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="people">
                        <div>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className="w-full max-w-3xl mx-auto"
                            >
                                <ImageRevealSlider img1={"/people/friends.jpg"} img2={"/people/friends output.png"} portrait={false} />

                            </motion.div>
                        </div>
                    </TabsContent>

                    <TabsContent value="animals">
                        <div>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className="w-full max-w-3xl mx-auto"
                            >
                                <ImageRevealSlider img2={"/animals/cat.png"} img1={"/animals/cat output.jpg"} />

                            </motion.div>
                        </div>
                    </TabsContent>

                    <TabsContent value="cars">
                        <div>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className="w-full max-w-3xl mx-auto"
                            >
                                <ImageRevealSlider img1={"/cars/white car.jpg"} img2={"/cars/white car output.png"}/>

                            </motion.div>
                        </div>
                    </TabsContent>

                    <TabsContent value="products">
                        <div>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className="w-full max-w-3xl mx-auto"
                            >
                                <ImageRevealSlider img2={"/products/sneakers output.png"} img1={"/products/sneakers.jpg"}/>

                            </motion.div>
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-4 text-lg"
                        onClick={() => window.location.href = '/remove-background'}
                    >
                        Try It Yourself <ArrowRight className="w-5 h-5 ml-2"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}