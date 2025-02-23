
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="lovable-uploads/68f120d4-f503-4c1a-be37-6dc2d920e7e2.png" 
          alt="Vault" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-xusd-navy/90 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Welcome to the Future of Banking
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Premier crypto and fiat banking services with seamless wallet integrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button className="bg-xusd-gold text-xusd-navy px-8 py-3 rounded-md hover:bg-white transition-colors duration-300 font-semibold">
              Open Vault Account
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
