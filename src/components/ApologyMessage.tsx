import React, { useState } from 'react';
import { Heart, Star, Clock, MessageCircle, Coffee, Gift, Video } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ApologyMessage() {
  const [showMore, setShowMore] = useState(false);

  const sendWhatsAppMessage = (option: string) => {
    const phoneNumber = '7985013913'; // Replace with your actual phone number
    const message = encodeURIComponent(`Response to apology: ${option}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    if (option === "I forgive you ❤️") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
        {/* Couple Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <img
            src="/meNu.jpg"
            alt="Our Beautiful Moment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="text-center mb-12 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <Heart className="w-24 h-24 text-pink-500 animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6 pt-12">My Dearest Love</h1>
          
          {/* Video Message */}
          <div className="mb-8">
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <video
                className="h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1518895949257-7621c3c786d7"
              >
                <source src="/sorry.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-16 h-16 text-white/80" />
              </div> */}
            </div>
          </div>

          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Anu, mujhe neend nhi aa rhi thi... kaise aati, tumpe chilla diya tha. i know jo boldiya ussey wapas nhi le sakta, but i am sorry for everything. i love you so much aur i promise i will never do this again. i am sorry.
            </p>
            {showMore && (
              <div className="animate-fade-in">
                <p className="text-gray-700 leading-relaxed mt-4">
                  kitne din hogye na mile huye... yaad aa rhi h. Anu, tum sabkuch ho mera, everything. tumpe hi shuru tumpe hi khatam. galtiyan krdeta hu, bar bar... But trust me, i never mean to hurt you. dimaag kmm h mere aandr, jo mai kabhi maanta nahi.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Anu, mai tumhe hamesha khush dekhna chahta hu... yehi promise bhi h mera aur pati hone ka farz bhi, kabhi kabhi zyada pareshan krdeta hu na... pleasee maaf krdo.
                </p>
              </div>
            )}
          </div>
          <button 
            onClick={() => setShowMore(!showMore)}
            className="text-pink-600 hover:text-pink-700 mt-4 font-medium"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl transform hover:scale-105 transition-all">
            <Star className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">My Promise</h3>
            <p className="text-gray-600">To prioritize our love and make you feel special every single day.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl transform hover:scale-105 transition-all">
            <Clock className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Time</h3>
            <p className="text-gray-600">I'll dedicate more time for us, creating beautiful memories together.</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl transform hover:scale-105 transition-all">
            <MessageCircle className="w-8 h-8 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Better Communication</h3>
            <p className="text-gray-600">Apne baat krne ka tareeka sundharunga... aur kuchbhi aaisa nahi karunga jo tumhe pasand na ho. i promise.</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
            <Coffee className="w-6 h-6 text-pink-500" />
            <p className="text-gray-700">Kl chalogi kya golgappe khane? pleaseee.</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <Gift className="w-6 h-6 text-purple-500" />
            <p className="text-gray-700">I have a special surprise planned to show you how much I care. (aur haa, isme mere paise nhi lge, gussa nhi krna)</p>
          </div>
        </div>

        {/* Response Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button 
            onClick={() => sendWhatsAppMessage("I forgive you ❤️")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-lg"
          >
            I forgive you ❤️
          </button>
          <button 
            onClick={() => sendWhatsAppMessage("I hate you 😠")}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-6 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg"
          >
            I hate you 😠
          </button>
          <button 
            onClick={() => sendWhatsAppMessage("Try harder 😤")}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 px-6 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg"
          >
            Try harder 😤
          </button>
        </div>
      </div>
      <center>Suno na... <Heart className="w-6 h-6 text-pink-500 animate-pulse" />raat me thoda der se soya hu, jga dena jb bhi dekhna </center>
    </div>
  );
}