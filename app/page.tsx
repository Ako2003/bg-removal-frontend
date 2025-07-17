"use client";

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Zap, 
  Download, 
  Star, 
  Check, 
  Play, 
  Shield, 
  Sparkles,
  Image as ImageIcon,
  Clock,
  Users,
  ChevronDown,
  Scissors,
  Palette,
  ArrowRight,
  Wand2,
  Camera,
  Layers
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageRevealSlider from "@/components/ImageComparison";
import Hero from "@/components/main/Hero";
import Features from "@/components/main/Features";
import HowItWorks from "@/components/main/HowItWorks";
import Pricing from "@/components/main/Pricing";
import Testimonials from "@/components/main/Testimonials";
import FAQ from "@/components/main/FAQ";
import Tools from "@/components/main/Tools";
import Examples from "@/components/main/Examples";

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeFeature, setActiveFeature] = useState<'remove' | 'replace'>('remove');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setOriginalImage(imageUrl);
      setIsProcessing(true);

      // Simulate processing time
      setTimeout(() => {
        setProcessedImage(imageUrl);
        setIsProcessing(false);
      }, 3000);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1
  });

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        {/*<HowItWorks />*/}

        {/* Examples */}
        <Examples />
        {/* Our tools */}
        <Tools />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        {/*<Pricing />*/}

        {/* FAQ Section */}
        <FAQ />
      </div>
  );
}