import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Mail, Home } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-12 shadow-2xl text-center space-y-6">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="relative">
              <CheckCircle2 className="h-24 w-24 text-accent" />
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              You're All Set!
            </h1>
            <p className="text-xl text-muted-foreground">
              Your order has been received successfully
            </p>
          </div>

          {/* Email Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-accent/10 border border-accent/20 rounded-xl p-6 space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-accent">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">Check your email</span>
            </div>
            <p className="text-sm text-muted-foreground">
              We've sent you a confirmation email with further instructions and next steps
            </p>
          </motion.div>

          {/* Additional Info */}
          <div className="space-y-2 pt-4">
            <p className="text-sm text-muted-foreground">
              Our team will review your request and get back to you shortly
            </p>
            <p className="text-sm text-muted-foreground">
              Typical response time: <span className="text-primary font-semibold">24-48 hours</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              size="lg"
              className="flex-1 gap-2"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
            <Button
              onClick={() => navigate("/order-form")}
              size="lg"
              className="flex-1"
            >
              Place Another Order
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
