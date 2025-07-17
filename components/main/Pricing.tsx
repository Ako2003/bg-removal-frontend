import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function Pricing (){
    return(
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-slate-800">Simple, Transparent Pricing</h2>
              <p className="text-xl text-slate-600">Choose the plan that fits your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  period: "forever",
                  features: [
                    "10 images per month",
                    "Background removal",
                    "Basic backgrounds",
                    "PNG export",
                    "Email support"
                  ],
                  popular: false,
                  color: "emerald"
                },
                {
                  name: "Professional",
                  price: "$19",
                  period: "per month",
                  features: [
                    "500 images per month",
                    "Background removal & replacement",
                    "Premium background library",
                    "All export formats",
                    "Batch processing",
                    "Priority support"
                  ],
                  popular: true,
                  color: "emerald"
                },
                {
                  name: "Business",
                  price: "$49",
                  period: "per month",
                  features: [
                    "Unlimited images",
                    "All features included",
                    "Custom backgrounds upload",
                    "API access",
                    "Team collaboration",
                    "24/7 dedicated support"
                  ],
                  popular: false,
                  color: "emerald"
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-8 h-full relative transition-all duration-300 ${
                    plan.popular 
                      ? 'border-2 border-emerald-300 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50' 
                      : 'border border-slate-200 hover:shadow-lg bg-white'
                  }`}>
                    {plan.popular && (
                      <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">{plan.name}</h3>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-slate-800">{plan.price}</span>
                        <span className="text-slate-600 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
                    }`}>
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    )
}