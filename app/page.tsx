"use client";

import HeroSection from "@/components/HeroSection";
import ToolLogoSection from "@/components/ToolLogoSection";
import PainPointSection from "@/components/PainPointSection";
import WhySection from "@/components/WhySection";
import OutcomeSection from "@/components/OutcomeSection";
import CurriculumSection from "@/components/CurriculumSection";
import WorksSection from "@/components/WorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FaqSection from "@/components/FaqSection";
import MidCta from "@/components/MidCta";
import FloatingCta from "@/components/FloatingCta";

import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Enhancements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 blueprint-grid opacity-[0.4]" />
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[60%] rounded-full bg-indigo-200/20 floating-aura" />
        <div className="absolute top-[40%] -right-[10%] h-[50%] w-[70%] rounded-full bg-purple-200/20 floating-aura" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="relative z-10">
        <HeroSection />

        <ToolLogoSection />
        <SectionDivider from="surface" to="white" shape="fade" />
        <PainPointSection />

        <SectionDivider from="surface" to="white" shape="fade" />
        <WhySection />

        <SectionDivider from="white" to="surface" shape="fade" />
        <MidCta message="まずは公式LINEで詳細をチェック" />
        <SectionDivider from="surface" to="white" shape="fade" />
        <OutcomeSection />

        <SectionDivider from="white" to="surface" shape="fade" />
        <CurriculumSection />

        <SectionDivider from="surface" to="white" shape="fade" />
        <WorksSection />

        <SectionDivider from="white" to="white" shape="fade" />
        <ComparisonSection />

        <SectionDivider from="white" to="white" shape="fade" />
        <TestimonialSection />



        <SectionDivider from="white" to="surface" shape="fade" />
        <PricingSection />

        <SectionDivider from="surface" to="white" shape="fade" />
        <FaqSection />

        <SectionDivider from="white" to="white" shape="fade" />
        <FinalCtaSection />
      </div>

      <FloatingCta />
    </main>
  );
}
