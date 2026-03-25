import AboutShort from "@/components/AboutShort/AboutShort";
import Hero from "@/components/Hero/Hero";
import JoinUs from "@/components/JoinUs/JoinUs";
import Newsletter from "@/components/Newsletter/Newsletter";
import QuickLinks from "@/components/QuickLinks/QuickLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutShort />
      <QuickLinks />
      <Newsletter />
      <JoinUs />
    </>
  );
}
