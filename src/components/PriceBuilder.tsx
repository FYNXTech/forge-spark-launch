import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

type PageTier = "starter" | "standard" | "professional" | "custom";

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

const addOns: AddOn[] = [
  { id: "tikz", name: "TikZ Diagrams", price: 20, description: "Professional diagram recreation" },
  { id: "beamer", name: "Beamer Slides", price: 30, description: "Presentation-ready LaTeX slides" },
  { id: "bibtex", name: "BibTeX Integration", price: 15, description: "Bibliography setup and formatting" },
  { id: "styling", name: "Custom Styling", price: 10, description: "Personalized document formatting" },
  { id: "scikit", name: "SciKit-Plots Pro", price: 35, description: "Hand-drawn ML sketches → Python plots in LaTeX" },
  { id: "rush", name: "Rush (24h for ≤30 pages)", price: 30, description: "Priority processing" },
];

export const PriceBuilder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<PageTier | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [displayTotal, setDisplayTotal] = useState(0);
  const [actualTotal, setActualTotal] = useState(0);

  const pageTiers = [
    { id: "starter" as PageTier, pages: "≤15 pages", price: 30 },
    { id: "standard" as PageTier, pages: "16–30 pages", price: 70 },
    { id: "professional" as PageTier, pages: "31–60 pages", price: 120 },
    { id: "custom" as PageTier, pages: "60+", price: 0 },
  ];

  useEffect(() => {
    let total = 0;
    if (selectedTier) {
      const tier = pageTiers.find((t) => t.id === selectedTier);
      if (tier && tier.price > 0) {
        total = tier.price;
      }
    }

    selectedAddOns.forEach((addonId) => {
      const addon = addOns.find((a) => a.id === addonId);
      if (addon) total += addon.price;
    });

    setActualTotal(total);

    // Animate number counting
    const duration = 300;
    const steps = 15;
    const increment = (total - displayTotal) / steps;
    let current = displayTotal;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplayTotal(total);
        clearInterval(timer);
      } else {
        setDisplayTotal(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [selectedTier, selectedAddOns]);

  const toggleAddOn = (addonId: string) => {
    const newSelected = new Set(selectedAddOns);
    if (newSelected.has(addonId)) {
      newSelected.delete(addonId);
    } else {
      newSelected.add(addonId);
    }
    setSelectedAddOns(newSelected);
  };

  const handleProceed = () => {
    if (!selectedTier || selectedTier === "custom") {
      toast.error("Please select a page tier to continue");
      return;
    }

    navigate("/order-form");
  };

  return (
    <section id="services" className="py-12 sm:py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Build Your <span className="text-gradient">Custom Order</span>
          </h2>
          <p className="text-[clamp(14px,2.5vw,18px)] text-muted-foreground mb-2">
            Upload <strong>any</strong> handwritten math notes. We deliver publication-ready <code>.tex</code> + <strong>optional SciKit-Learn plots</strong> for ML diagrams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Left: Page Selection & Add-ons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Page Tiers */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Select Page Count</h3>
              <div className="space-y-3">
                {pageTiers.map((tier) => (
                  <label
                    key={tier.id}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all min-h-[60px] ${
                      selectedTier === tier.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="pageTier"
                        checked={selectedTier === tier.id}
                        onChange={() => setSelectedTier(tier.id)}
                        className="w-5 h-5"
                      />
                      <span className="font-semibold">{tier.pages}</span>
                    </div>
                    <span className="text-xl font-bold text-accent">
                      {tier.price > 0 ? `$${tier.price}` : "Custom quote"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Add Premium Features</h3>
              <div className="space-y-3">
                {addOns.map((addon) => (
                  <label
                    key={addon.id}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all min-h-[60px] ${
                      selectedAddOns.has(addon.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Checkbox
                      checked={selectedAddOns.has(addon.id)}
                      onCheckedChange={() => toggleAddOn(addon.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="font-semibold flex items-center gap-2">
                          {addon.name}
                          {addon.id === "scikit" && (
                            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                              NOW FOR ALL ORDERS
                            </span>
                          )}
                        </span>
                        <span className="text-lg font-bold text-accent">+${addon.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{addon.description}</p>
                      {addon.id === "scikit" && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                          <Info className="w-3 h-3" />
                          <span>Loss curves, trees, PCA → Python + Matplotlib in LaTeX</span>
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Total & Proceed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-4 h-fit"
          >
            <div className="bg-gradient-to-br from-card to-primary/5 border-2 border-primary rounded-xl p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">ORDER TOTAL</h3>
                <motion.div
                  key={displayTotal}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                  className={`text-5xl font-heading font-bold ${
                    actualTotal > 100 ? "text-gold" : "text-gradient"
                  }`}
                >
                  ${displayTotal}
                </motion.div>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[56px] text-lg font-bold disabled:opacity-50"
                disabled={!selectedTier || selectedTier === "custom"}
                onClick={handleProceed}
              >
                PROCEED TO ORDER
              </Button>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>✓ 24-hour turnaround</p>
                <p>✓ LaTeX source + PDF</p>
                <p>✓ One revision included</p>
                {selectedAddOns.has("scikit") && <p className="text-primary font-semibold">✓ SciKit-Learn plots included</p>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Sticky Total Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary p-4 shadow-2xl z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted-foreground">TOTAL</div>
            <div className="text-2xl font-heading font-bold text-gradient">${displayTotal}</div>
          </div>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 min-h-[48px] px-6"
            disabled={!selectedTier || selectedTier === "custom"}
            onClick={handleProceed}
          >
            PROCEED
          </Button>
        </div>
      </div>
    </section>
  );
};
