import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  Utensils, 
  Hotel, 
  Wifi, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck,
  Heart
} from 'lucide-react';

export default function MadhuramWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [currentReview, setCurrentReview] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Business Details
  const businessDetails = {
    name: "Madhuram Pure Veg Hotel & Restaurant",
    phone: "08305005751",
    address: "Shop no. S, 77, Nehru Nagar Main Rd, Kolar Rd, Bhopal, Madhya Pradesh 462003",
    tagline: "Experience the True Essence of Pure Vegetarian Dining & Comfort in Bhopal"
  };

  // Change nav background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuCategories = [
    { id: 'all', name: 'All Specialties' },
    { id: 'thali', name: 'Premium Thalis' },
    { id: 'paneer', name: 'Paneer Delights' },
    { id: 'local', name: 'Bhopali Special' }
  ];

  const menuItems = [
    { id: 1, category: 'thali', name: 'Madhuram Royal Special Thali', price: '₹280', desc: 'A grand platter featuring 3 curries, Dal Makhani, Choice of Breads, Pulao, Raita, and a premium sweet.' },
    { id: 2, category: 'paneer', name: 'Paneer Butter Masala', price: '₹220', desc: 'Fresh cottage cheese cubes cooked in a rich, creamy, and mildly sweet onion-tomato gravy.' },
    { id: 3, category: 'local', name: 'Bhopali Indori Poha & Jalebi Combo', price: '₹90', desc: 'Light, steamed flaked rice seasoned with unique spices, served with crispy, syrup-filled hot jalebis.' },
    { id: 4, category: 'paneer', name: 'Kadhai Paneer', price: '₹240', desc: 'Paneer tossed with bell peppers and freshly ground kadhai spices in an authentic thick tomato gravy.' },
    { id: 5, category: 'thali', name: 'Deluxe Executive Thali', price: '₹190', desc: 'Perfect everyday meal with 2 seasonal vegetables, Dal Tadka, Rice, 4 Rotis, and Salad.' },
    { id: 6, category: 'local', name: 'Shahi Tukda Madhuram Style', price: '₹120', desc: 'Rich, golden fried bread soaked in saffron syrup, topped generously with creamy rabdi and nuts.' }
  ];

  const amenities = [
    { icon: <Utensils className="w-8 h-8 text-[#D4A373]" />, title: 'AC Luxury Dining', desc: 'Family-friendly, completely separate fine dining atmosphere.' },
    { icon: <Hotel className="w-8 h-8 text-[#D4A373]" />, title: 'Elegant Stay Rooms', desc: 'Premium, well-ventilated, hygienic rooms for a peaceful stay.' },
    { icon: <Award className="w-8 h-8 text-[#D4A373]" />, title: 'Banquet & Events Hall', desc: 'Perfect venue for family gatherings, birthdays, and celebrations.' },
    { icon: <Wifi className="w-8 h-8 text-[#D4A373]" />, title: 'Free High-Speed Wi-Fi', desc: 'Stay connected effortlessly during your entire dining and stay experience.' }
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Local Guide",
      rating: 5,
      text: "The best authentic pure vegetarian taste in Bhopal! The Madhuram Special Thali is an absolute feast, and the hygiene level is top-notch. Highly recommended for family outings."
    },
    {
      name: "Anjali Mishra",
      role: "Local Guide",
      rating: 5,
      text: "Extremely clean rooms and a wonderful attached restaurant. The staff is polite, and the service is incredibly fast. Getting pure veg options of this quality on Kolar Road is a blessing."
    }
  ];

  const filteredMenu = activeTab === 'all' ? menuItems : menuItems.filter(item => item.category === activeTab);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="bg-[#FDFBF7] text-[#2B2D42] font-sans antialiased min-h-screen">
      
      {/* 1. STICKY NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1B4332]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#D4A373]">
              Madhuram
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#FDFBF7]/80 -mt-1">
              Pure Veg Hotel & Restaurant
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Menu', 'Amenities', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[#FDFBF7] hover:text-[#D4A373] font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Call CTA */}
          <div className="hidden md:block">
            <a 
              href={`tel:${businessDetails.phone}`}
              className="flex items-center gap-2 bg-[#D4A373] hover:bg-[#c29262] text-[#1B4332] font-semibold px-5 py-2.5 rounded-full transition-transform duration-200 transform hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FDFBF7] focus:outline-none p-1"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1B4332] border-t border-[#1B4332]/20 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            {['Home', 'About', 'Menu', 'Amenities', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#FDFBF7] hover:text-[#D4A373] text-lg font-medium py-2"
              >
                {item}
              </a>
            ))}
            <a 
              href={`tel:${businessDetails.phone}`}
              className="flex items-center justify-center gap-2 bg-[#D4A373] text-[#1B4332] font-semibold w-full py-3 rounded-xl mt-4 shadow-inner"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {businessDetails.phone}</span>
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Darkened overlay backdrop image */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transform transition-transform duration-10000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920')` }}
        />

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 mt-16">
          <span className="inline-flex items-center gap-2 bg-[#1B4332]/80 border border-[#D4A373]/40 text-[#D4A373] text-xs sm:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Heart className="w-3.5 h-3.5 fill-current text-green-500" /> 100% Pure Vegetarian
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#FDFBF7] mb-6 leading-tight">
            {businessDetails.tagline}
          </h1>
          <p className="text-base sm:text-xl text-[#FDFBF7]/80 max-w-2xl mx-auto mb-10 font-light">
            Indulge in authentic traditional flavors crafted with immaculate hygiene, and enjoy a premium, family-friendly hotel stay experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#menu" 
              className="bg-[#D4A373] hover:bg-[#c29262] text-[#1B4332] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 text-center shadow-lg"
            >
              Explore Our Menu
            </a>
            <a 
              href="https://maps.google.com/?q=Shop+no.+S,+77,+Nehru+Nagar+Main+Rd,+Kolar+Rd,+Bhopal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-transparent border-2 border-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#1B4332] text-[#FDFBF7] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-10 bg-[#D4A373]"></div>
              <span className="text-[#D4A373] font-semibold uppercase tracking-wider text-sm">Welcome to Madhuram</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Crafting Pristine Culinary Legacies & Exceptional Hospitality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Rooted deeply in the heartbeat of Bhopal, Madhuram Pure Veg Hotel & Restaurant stands as a sanctuary for food lovers who demand uncompromised purity and matchless flavor. Our kitchen is built on strict pure vegetarian guidelines, utilizing handpicked spices and traditional slow-cooking methodologies to produce genuine tastes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond exceptional dining, we offer elegant and immaculate accommodation features designed specifically with family dynamics in mind. Whether you are pausing for an authentic Bhopali breakfast, organizing an event in our elegant spaces, or checking in for a serene stay, you are embraced by genuine Indian hospitality.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1B4332] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">100% Zero Meat/Egg</h4>
                  <p className="text-xs text-gray-500">Strict separate processing unit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1B4332] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Hygienic & Fresh</h4>
                  <p className="text-xs text-gray-500">Premium locally sourced ingredients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#D4A373] rounded-3xl rotate-3 scale-102 opacity-20 group-hover:rotate-1 transition-transform duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
              alt="Premium dining ambiance" 
              className="relative z-10 rounded-3xl object-cover w-full h-[450px] shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* 4. MENU HIGHLIGHTS SECTION */}
      <section id="menu" className="bg-[#1B4332]/5 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">Our Signature Dishes</h2>
            <p className="text-gray-600 text-sm sm:text-base">Freshly made, packed with rich flavor profiles, and completely vegetarian.</p>
          </div>

          {/* Tab Selection Row */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-[#1B4332] text-[#FDFBF7] shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1B4332]/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-serif font-bold text-lg text-[#1B4332] group-hover:text-[#D4A373] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="text-base font-semibold text-[#D4A373] whitespace-nowrap bg-[#D4A373]/10 px-2.5 py-0.5 rounded-md">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="border-t border-dashed border-gray-100 pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-green-700 bg-green-50 font-semibold px-2 py-0.5 rounded border border-green-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span> Pure Veg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOTEL AMENITIES SECTION */}
      <section id="amenities" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4">Premium Guest Amenities</h2>
          <p className="text-gray-600">Enjoy curated comforts ensuring your family dining or hotel stay experiences are elegant.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-[#1B4332]/5 flex items-center justify-center rounded-2xl mb-5">
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-xl text-[#1B4332] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS SECTION */}
      <section id="reviews" className="bg-[#1B4332] text-[#FDFBF7] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-repeat bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=100')` }}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="text-[#D4A373] text-xs font-semibold tracking-widest uppercase block mb-2">Testimonials</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">What Our Guests Say</h2>
          </div>

          {/* Review Card Slider Frame */}
          <div className="relative min-h-[250px] flex items-center justify-center">
            {reviews.map((rev, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-500 absolute w-full max-w-2xl text-center px-4 ${
                  idx === currentReview ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                }`}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#D4A373]" />
                  ))}
                </div>
                <p className="font-serif text-lg sm:text-2xl italic leading-relaxed text-[#FDFBF7]/90 mb-6">
                  "{rev.text}"
                </p>
                <div>
                  <h4 className="font-bold text-[#D4A373] text-base">{rev.name}</h4>
                  <p className="text-xs text-[#FDFBF7]/60 tracking-wider uppercase mt-0.5">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-10">
            <button 
              onClick={prevReview}
              className="p-2.5 rounded-full border border-[#FDFBF7]/20 hover:border-[#D4A373] text-[#FDFBF7] hover:text-[#D4A373] transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextReview}
              className="p-2.5 rounded-full border border-[#FDFBF7]/20 hover:border-[#D4A373] text-[#FDFBF7] hover:text-[#D4A373] transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CONTACT & LOCATION FOOTER */}
      <footer id="contact" className="bg-[#1B4332]/5 pt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Quick Details Columns */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1B4332] mb-2">{businessDetails.name}</h3>
                <p className="text-gray-500 text-sm">Pure Vegetarian Hotel & Restaurant experience premium luxury and flavor in Bhopal.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#D4A373] shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm text-[#1B4332]">Address</h5>
                    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{businessDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#D4A373] shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm text-[#1B4332]">Reservations & Ordering</h5>
                    <a 
                      href={`tel:${businessDetails.phone}`} 
                      className="text-sm text-[#D4A373] hover:underline font-semibold block mt-0.5"
                    >
                      {businessDetails.phone} (Click to Call)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#D4A373] shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-sm text-[#1B4332]">Operating Hours</h5>
                    <p className="text-sm text-gray-600 mt-0.5">Open Daily: 7:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Frame Placeholder */}
            <div className="lg:col-span-7 h-80 rounded-2xl overflow-hidden shadow-md border border-gray-200 relative">
              {/* Clean Leaflet or Google Map Frame Embedding */}
              <iframe 
                title="Madhuram Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3927694382573!2d77.41913197587635!3d23.230623208593452!2m3!1f0!2f0!3f0!3m2!1i1242!2i768!4f13.1!3m3!1m2!1s0x397c43df1f04ef05%3A0xe21ba2bc421cc619!2sNehru%20Nagar%20Main%20Rd%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Final Copyright Row */}
          <div className="border-t border-gray-200 pt-8 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} {businessDetails.name}. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-500">♥</span> for Pure Vegetarian Diners
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
