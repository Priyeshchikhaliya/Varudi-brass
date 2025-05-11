import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import Layout from "../Layout/Layout";

// Assets
import phone_icon from "../assets/phone_icon.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";

function ContactUs() {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    // This ensures we only load the script once
    const existingScript = document.getElementById("google-maps-script");
    if (existingScript) {
      // If script is already loading, wait for it to load
      existingScript.addEventListener("load", initializeMap);
      return;
    }

    // Function to initialize the map
    function initializeMap() {
      if (!mapRef.current || !window.google) return;

      try {
        // Coordinates for the address: GIDC Phase III, Jamnagar, Gujarat
        const location = { lat: 22.411289, lng: 70.050362 }; // These are approximate coordinates

        const mapOptions = {
          center: location,
          zoom: 15,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        // Add marker
        const marker = new window.google.maps.Marker({
          position: location,
          map: map,
          title: "Sardar Industries",
        });

        // Add info window
        const infowindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 240px;">
              <h3 style="font-weight: bold; margin-bottom: 5px; font-size: 16px;">Sardar Industries</h3>
              <p style="font-size: 14px; line-height: 1.4;">Plot no.4586, S road, GIDC Phase III, GIDC Phase-2, Dared, Jamnagar, Gujarat 361005, India</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });

        // Open info window by default
        infowindow.open(map, marker);

        // Add a custom control for navigation
        const navigationControlDiv = document.createElement("div");
        navigationControlDiv.className = "custom-map-control";
        navigationControlDiv.style.backgroundColor = "#EA580C";
        navigationControlDiv.style.borderRadius = "3px";
        navigationControlDiv.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
        navigationControlDiv.style.cursor = "pointer";
        navigationControlDiv.style.marginRight = "10px";
        navigationControlDiv.style.textAlign = "center";
        navigationControlDiv.title = "Navigate to this location";

        const controlUI = document.createElement("div");
        controlUI.style.color = "#fff";
        controlUI.style.fontFamily = "Roboto,Arial,sans-serif";
        controlUI.style.fontSize = "16px";
        controlUI.style.lineHeight = "38px";
        controlUI.style.paddingLeft = "5px";
        controlUI.style.paddingRight = "5px";
        controlUI.innerHTML = "Get Directions";
        navigationControlDiv.appendChild(controlUI);

        navigationControlDiv.addEventListener("click", () => {
          window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&destination_place_id=Sardar+Industries`,
            "_blank"
          );
        });

        map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(
          navigationControlDiv
        );
      } catch (error) {
        console.error("Google Maps initialization error:", error);
        // Set state to show fallback content
        setMapError(true);
      }
    }

    // Load Google Maps API script without API key (for development only)
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = "https://maps.google.com/maps/api/js?sensor=false";

    // Add error handling for script loading
    script.onerror = () => {
      console.error("Failed to load Google Maps API");
      setMapError(true);
    };

    script.onload = initializeMap;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const mapScript = document.getElementById("google-maps-script");
      if (mapScript) {
        mapScript.removeEventListener("load", initializeMap);
      }
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Sardar Industries - Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with Sardar Industries for all your inquiries about high-quality brass products. Contact us via phone, email, or visit us in Jamnagar, Gujarat."
        />
        <link rel="canonical" href="https://yourwebsite.com/contact-us" />
        <meta property="og:title" content="Contact Sardar Industries" />
        <meta
          property="og:description"
          content="Reach out to Sardar Industries for more information on our products and services. We're here to help with your brass product needs."
        />
        <meta property="og:url" content="https://yourwebsite.com/contact-us" />
      </Helmet>

      <div className="flex flex-col gap-4 max-w-[960px] px-4 py-2 mx-auto">
        <h1 className="text-[24px] font-bold text-center">Contact Us</h1>
        <h2 className="text-[18px] font-bold text-center">
          We're Here to Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info Section */}
          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={phone_icon} alt="Phone Icon - Contact us by phone" />
            </div>
            <div>
              <p className="text-[18px] font-semibold">+91 90335 15720</p>
              <p className="text-[14px] text-[#96874F]">
                Monday - Friday: 8am - 5pm IST
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img src={mail_icon} alt="Mail Icon - Contact us via email" />
            </div>
            <div>
              <p className="text-[18px] font-semibold">General Inquiries</p>
              <p className="text-[14px] text-[#96874F]">
                <a
                  href="mailto:mail@sardar-brass.com"
                  className="hover:underline"
                >
                  info@sardarind.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="bg-[#F2F0E8] rounded-xl h-[48px] w-[48px] flex justify-center items-center">
              <img
                src={location_icon}
                alt="Location Icon - Visit us in Jamnagar, Gujarat"
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Sardar Industries</p>
              <p className="text-[14px] text-[#96874F]">
                Plot no.4586, S road, GIDC Phase III, GIDC Phase-2, Dared,
                Jamnagar, Gujarat 361005, India
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-8">
          <h3 className="text-[18px] font-bold mb-4">Visit Our Location</h3>
          {mapError ? (
            <div className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md bg-gray-100 p-4 flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-red-600 mb-2">
                Could not load Google Maps
              </p>
              <p className="text-gray-700 text-center">
                Please try again later or contact us directly for directions.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=22.411289,70.050362&destination_place_id=Sardar+Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Get Directions
              </a>
            </div>
          ) : (
            <div
              ref={mapRef}
              className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md"
              aria-label="Map showing Sardar Industries location in Jamnagar, Gujarat"
            ></div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
