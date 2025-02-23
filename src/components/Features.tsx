
import { Shield, Wallet, RefreshCw, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Your assets are protected with military-grade encryption and multi-signature security"
  },
  {
    icon: Wallet,
    title: "Multiple Payment Options",
    description: "Seamless integration with ApplePay, PayPal, Stripe, and WISE"
  },
  {
    icon: RefreshCw,
    title: "Instant Swaps",
    description: "Exchange XUSD tokens with other cryptocurrencies instantly"
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Protected by advanced security protocols and regular audits"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-xusd-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xusd-navy mb-4">
            Why Choose XUSD Bank
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of traditional banking security and cryptocurrency innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <feature.icon className="w-12 h-12 text-xusd-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-xusd-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
