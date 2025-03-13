"use client"

import { useState } from "react"
import { Plane, Train, Bus, Car, MapPin, Navigation, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function TravelGuideToNITRourkela() {
  const [activeTab, setActiveTab] = useState("air")

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 ">
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">How to Reach NIT Rourkela</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive guide to reaching the National Institute of Technology Rourkela campus from major
          transportation hubs
        </p>
      </div>
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-[300px] md:h-[400px] w-full bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6656366636!2d84.89992707596853!3d22.25301647934424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1710249639693!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NIT Rourkela Map"
            className="absolute inset-0"
          ></iframe>

          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 text-red-500 mr-1" />
              <span className="font-medium">NIT Rourkela, Odisha, India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`flex items-center px-4 py-3 font-medium ${activeTab === "air" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("air")}
          >
            <Plane className={`w-5 h-5 mr-2 ${activeTab === "air" ? "text-blue-600" : "text-gray-500"}`} />
            By Air
          </button>
          <button
            className={`flex items-center px-4 py-3 font-medium ${activeTab === "train" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("train")}
          >
            <Train className={`w-5 h-5 mr-2 ${activeTab === "train" ? "text-blue-600" : "text-gray-500"}`} />
            By Train
          </button>
          <button
            className={`flex items-center px-4 py-3 font-medium ${activeTab === "local" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("local")}
          >
            <Bus className={`w-5 h-5 mr-2 ${activeTab === "local" ? "text-blue-600" : "text-gray-500"}`} />
            Local Transport
          </button>
        </div>

        {/* Air Travel Content */}
        {activeTab === "air" && (
          <div className="py-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Plane className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Jharsuguda Airport (IXJ)</h3>
                    <p className="text-gray-500 text-sm">Closest airport - 84 km from NIT Rourkela</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10">
                  <li className="text-gray-700">
                    <span className="font-medium">Flight Connectivity:</span> Limited flights from Delhi, Kolkata, and
                    Hyderabad
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">To Campus:</span> Taxi services available (₹1,800-2,200, 2 hours)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Pre-booking:</span> Recommended as on-spot taxis may be limited
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Plane className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Ranchi Airport (IXR)</h3>
                    <p className="text-gray-500 text-sm">180 km from NIT Rourkela</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10">
                  <li className="text-gray-700">
                    <span className="font-medium">Flight Connectivity:</span> Better connectivity with major cities
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">To Rourkela:</span> Take a taxi to Ranchi station, then train to
                    Rourkela
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Direct Taxi:</span> Available but expensive (₹4,000-5,000, 4 hours)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-sm md:col-span-2">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Plane className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Bhubaneswar Airport (BBI)</h3>
                    <p className="text-gray-500 text-sm">340 km from NIT Rourkela</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-10">
                  <li className="text-gray-700">
                    <span className="font-medium">Flight Connectivity:</span> Excellent connectivity with all major
                    Indian cities
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">To Rourkela:</span> Take a taxi to Bhubaneswar station, then train to
                    Rourkela (multiple trains available)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Bus Option:</span> Direct buses available from Bhubaneswar to Rourkela
                    (7-8 hours journey)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Train Travel Content */}
        {activeTab === "train" && (
          <div className="py-6">
            <div className="bg-gray-50 rounded-lg p-5 shadow-sm mb-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Train className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Rourkela Railway Station (ROU)</h3>
                  <p className="text-gray-500 text-sm">Main station - 7 km from NIT Rourkela campus</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Major Train Connectivity:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-gray-700">From Delhi:</p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Purushottam Express (12802)</li>
                      <li>• Rajdhani Express (22811)</li>
                      <li>• Sambalpur-Jammu Tawi Express (18310)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-gray-700">From Kolkata:</p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Steel Express (12814)</li>
                      <li>• Shatabdi Express (12019)</li>
                      <li>• Ispat Express (18181)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-gray-700">From Mumbai:</p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Gitanjali Express (12860)</li>
                      <li>• LTT-Shalimar Express (18030)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-gray-700">From Chennai:</p>
                    <ul className="text-sm text-gray-600 space-y-1 mt-1">
                      <li>• Coromandel Express (12842)</li>
                      <li>• East Coast Express (18646)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">From Station to Campus:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Car className="w-4 h-4 text-gray-600 mt-1 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-medium">Auto-rickshaws:</span> Available outside the station (₹150-200)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Car className="w-4 h-4 text-gray-600 mt-1 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-medium">Taxis:</span> Pre-paid taxis available at the station (₹250-300)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Bus className="w-4 h-4 text-gray-600 mt-1 mr-2" />
                    <span className="text-gray-700">
                      <span className="font-medium">City Bus:</span> Bus no. 4 goes to NIT campus (₹15-20)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Pro Tip:</span> Book train tickets well in advance (60-90 days) as
                  trains to Rourkela are often fully booked, especially during academic session beginnings. Use IRCTC
                  website or app for bookings.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Local Transport Content */}
        {activeTab === "local" && (
          <div className="py-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Car className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">From Rourkela Station to Campus</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-1 mr-2 mt-1">
                      <Car className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Auto-rickshaws</p>
                      <p className="text-sm text-gray-600">₹150-200, 20-25 minutes</p>
                      <p className="text-xs text-gray-500 mt-1">Available right outside the station</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-1 mr-2 mt-1">
                      <Car className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Taxis/Cabs</p>
                      <p className="text-sm text-gray-600">₹250-300, 15-20 minutes</p>
                      <p className="text-xs text-gray-500 mt-1">Ola/Uber available in limited numbers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-1 mr-2 mt-1">
                      <Bus className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">City Bus</p>
                      <p className="text-sm text-gray-600">₹15-20, 30-40 minutes</p>
                      <p className="text-xs text-gray-500 mt-1">Bus no. 4 goes directly to NIT campus</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
                <div className="flex items-start mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Navigation className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Within Rourkela City</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-1 mr-2 mt-1">
                      <Car className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Auto-rickshaws</p>
                      <p className="text-sm text-gray-600">Most common mode of transport</p>
                      <p className="text-xs text-gray-500 mt-1">Negotiate fare before boarding</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-1 mr-2 mt-1">
                      <Bus className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">City Buses</p>
                      <p className="text-sm text-gray-600">Connect major parts of the city</p>
                      <p className="text-xs text-gray-500 mt-1">Economical but less frequent</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-1 mr-2 mt-1">
                      <Car className="w-3 h-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Rental Services</p>
                      <p className="text-sm text-gray-600">Bikes and cars available for rent</p>
                      <p className="text-xs text-gray-500 mt-1">Requires valid driving license</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <div className="flex">
                <MapPin className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Campus Entry Information</h4>
                  <p className="text-sm text-gray-700">
                    NIT Rourkela has security checkpoints at all entrances. Visitors need to provide identification and
                    purpose of visit. For new students arriving during admission, special help desks are usually set up
                    at the main gate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg text-gray-800 mb-3">Quick Reference</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-red-500 mr-2" />
            <span>NIT Rourkela, Odisha - 769008</span>
          </div>
          <div className="flex items-center">
            <Train className="w-4 h-4 text-green-600 mr-2" />
            <span>Nearest Station: Rourkela (7 km)</span>
          </div>
          <div className="flex items-center">
            <Plane className="w-4 h-4 text-blue-600 mr-2" />
            <span>Nearest Airport: Jharsuguda (84 km)</span>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a
          href="https://www.irctc.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <Train className="w-4 h-4 mr-1" />
          IRCTC Train Booking
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
        <a
          href="https://www.makemytrip.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <Plane className="w-4 h-4 mr-1" />
          Flight Booking
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>
      <div className="mt-10 pt-8 border-t border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Places to Visit Near NIT Rourkela</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore these attractions during your stay in Rourkela</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Hanuman Vatika */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741768700/IEEE/kixgqcwwq7t2z7pmct1q.jpg"
                alt="Hanuman Vatika"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                7 km from campus
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Hanuman Vatika</h3>
              <p className="text-sm text-gray-600 mb-3">
                Famous for its 75-foot-tall Hanuman statue, this park offers beautiful gardens and religious
                significance.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>Visiting hours: 6:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Vedvyas Temple */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741768538/IEEE/sml0tzedmq0cdnufy2d8.jpg"
                alt="Vedvyas Temple"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                10 km from campus
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Vedvyas Temple</h3>
              <p className="text-sm text-gray-600 mb-3">
                A sacred site where sage Ved Vyasa is believed to have written the epic Mahabharata, located at the
                confluence of rivers.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>Visiting hours: 5:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Mandira Dam */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741768835/IEEE/yesoexvgqvg7szkdodci.jpg"
                alt="Mandira Dam"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                20 km from campus
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Mandira Dam</h3>
              <p className="text-sm text-gray-600 mb-3">
                A picturesque reservoir with scenic views, perfect for picnics and nature photography. The dam supplies
                water to the Rourkela Steel Plant.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>Best time to visit: Early morning or sunset</span>
              </div>
            </div>
          </div>

          {/* Pitamahal Dam */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741769293/IEEE/livr2zwno0bejdgldsca.jpg"
                alt="Pitamahal Dam"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                15 km from campus
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Pitamahal Dam</h3>
              <p className="text-sm text-gray-600 mb-3">
                A serene spot surrounded by hills and forests, offering boating facilities and beautiful sunset views.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>Boating available: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Rourkela Steel Plant */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741768963/IEEE/aubujmtt8tszdyfqhwqt.jpg"
                alt="Rourkela Steel Plant"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                8 km from campus
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Rourkela Steel Plant</h3>
              <p className="text-sm text-gray-600 mb-3">
                One of India&apos;s largest integrated steel plants. Educational tours are available with prior permission.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>Tours: Weekdays, prior booking required</span>
              </div>
            </div>
          </div>

          {/* Indira Gandhi Park */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="h-48 overflow-hidden relative">
              <Image
                src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1741769103/IEEE/dd5afdk23dr6h9i2hpyc.jpg"
                alt="Indira Gandhi Park"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                5 km from campus
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Indira Gandhi Park</h3>
              <p className="text-sm text-gray-600 mb-3">
                A popular recreational spot with gardens, walking paths, and a musical fountain. Perfect for evening
                relaxation.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>Open: 5:00 AM - 8:00 PM, Musical fountain: 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

