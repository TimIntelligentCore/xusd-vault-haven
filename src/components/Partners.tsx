
const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-xusd-navy mb-4">
            Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've partnered with leading payment providers to offer you seamless transactions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {['ApplePay', 'PayPal', 'Stripe', 'WISE'].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-xusd-gray rounded-lg p-8 w-full hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-xl font-semibold text-xusd-navy">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
