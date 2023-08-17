<template>
  <div class=" w-screen bg-[#1A1A1A] text-white">
    <ClientOnly>
      <NuxtPage />
      <A-Menu v-if="menuState" />
      <A-Cities v-if="citiesState"> </A-Cities>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "@studio-freight/lenis";
import axios from "axios";
import 'vue3-lottie/dist/style.css'
const menuState = useState('menu', () => false)
const citiesState = useState("citiesState", () => false);
const quizState = useState("quizState", () => 1);
gsap.registerPlugin(ScrollTrigger);
const route = useRoute()




window.addEventListener("unload", function (event) {
  // Perform your actions here synchronously using Axios

  // Retrieve sessions from localStorage
  //@ts-ignore
  let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

  // Call postTracking function synchronously using Axios
  postTracking(sessions)
    .then(() => {
      // Tracking request completed successfully
    })
    .catch((error) => {
      // Error occurred during the tracking request
      console.log("Error during tracking:", error);
    });

  // Synchronous request using Axios
  //@ts-ignore
  function postTracking(data) {
    try {
      const url = "https://api.sqordbot.com/api/post-trackinginfo";
      return axios.post(url, data);
    } catch (error) {
      console.log("Error occurred while making the POST request:", error);
      throw error;
    }
  }
});


onMounted(async () => {
  const lenis = new Lenis()
  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  requestAnimationFrame(raf)
  //data collection starts here
  {

    interface SessionData {
      clientId: string;
      sessionId: string;
      startTime: number;
      endTime?: number;
      paths: { [path: string]: number };
      ipAddress?: string;
      location?: string;
      userAgent?: string;
      screenWidth?: number;
      screenHeight?: number;
      timezoneOffset?: number;
      language?: string;
    }

    // Function to generate a unique client ID or retrieve it from local storage
    function getClientId(): string {
      const existingClientId = localStorage.getItem('clientId');
      if (existingClientId) {
        return existingClientId;
      } else {
        const newClientId = crypto.randomUUID();
        localStorage.setItem('clientId', newClientId);
        return newClientId;
      }
    }

    // Function to fetch the IP Geolocation data from the provided API endpoint
    async function fetchGeolocation(): Promise<any> {
      try {
        const response = await fetch('https://geolocation-db.com/jsonp/');
        if (response.ok) {
          const data = await response.text();
          const jsonpCallbackRegex = /^callback\((.*)\);$/
          const match = data.match(jsonpCallbackRegex);
          if (match && match[1]) {
            const geolocationData = JSON.parse(match[1]);
            return geolocationData;
          }
        }
        throw new Error('Failed to fetch geolocation data');
      } catch (error) {
        console.log('Error fetching geolocation:', error);
      }
      return null;
    }

    // Get the existing sessions from local storage or initialize an empty array
    //@ts-ignore
    let sessions: SessionData[] = JSON.parse(localStorage.getItem('sessions')) || [];

    // Generate a new session ID using crypto.randomUUID()
    const sessionId = crypto.randomUUID();

    // Start a new session
    const newSession: SessionData = {
      clientId: getClientId(),
      sessionId,
      startTime: Date.now(),
      paths: {}
    };

    // Fetch geolocation data only once
    fetchGeolocation()
      .then(geolocationData => {
        if (geolocationData) {
          newSession.ipAddress = geolocationData.IPv4;
          newSession.location = `${geolocationData.city}, ${geolocationData.country_name}`;
        } else {
          // Provide default values for geolocation
          newSession.ipAddress = 'Unknown';
          newSession.location = 'Unknown';
        }
      })
      .catch(error => {
        console.log('Error fetching geolocation:', error);
        // Provide default values for geolocation
        newSession.ipAddress = 'Unknown';
        newSession.location = 'Unknown';
      })
      .finally(() => {
        // Additional details
        newSession.userAgent = navigator.userAgent;
        newSession.screenWidth = window.screen.width;
        newSession.screenHeight = window.screen.height;
        newSession.timezoneOffset = new Date().getTimezoneOffset();
        newSession.language = navigator.language;

        // Push the new session to the sessions array
        sessions.push(newSession);
        let count = 0;
        // Save the updated sessions array in local storage
        localStorage.setItem('sessions', JSON.stringify(sessions));

        // Track the page paths and durations in the current session
        let previousPath = route.path;
        let startTime = Date.now();

        setInterval(async () => {
          count++
          const currentTime = Date.now();
          const duration = Math.floor((currentTime - startTime) / 1000); // Duration in seconds

          if (route.path !== previousPath) {
            // Save previous path and its duration in session data
            const previousPathDuration = newSession.paths[previousPath] || 0;
            newSession.paths[previousPath] = previousPathDuration + duration;

            // Update previousPath and startTime with the new values
            previousPath = route.path;
            startTime = currentTime;

            // Save the updated sessions array in local storage
            localStorage.setItem('sessions', JSON.stringify(sessions));
          }
          if (count >= 5) {
            const tempDoc = {
              clientId: localStorage.getItem('clientId'),
              //@ts-ignore
              sessions: JSON.parse(localStorage.getItem('sessions'))
            }
            //@ts-ignore
            await postTracking(tempDoc)
            count = 0
          }

        }, 1000);
      });

  }



});



</script>

 
<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

.no-scroll {
  overflow: hidden;
}

html,
body {
  width: 100%;
  overflow-x: clip;
  font-family: 'Biennale', 'Biennale Book';
}



html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>