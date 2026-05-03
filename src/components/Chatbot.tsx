/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Check if script already exists to prevent duplicate injections
    if (document.querySelector('script[chatbotId="vWbACTV26Z2_yku5cTaqO"]')) {
      return;
    }

    // Optional: Chatbase config
    window.chatbaseConfig = {
      chatbotId: "vWbACTV26Z2_yku5cTaqO",
    };

    // Inject Chatbase script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "vWbACTV26Z2_yku5cTaqO");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;
    script.crossOrigin = "anonymous";
    
    // Attempt to handle any script load errors
    script.onerror = () => {
      console.warn("Chatbase script failed to load. This might be due to iframe restrictions or ad-blockers.");
    };

    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      const existingScript = document.querySelector('script[chatbotId="vWbACTV26Z2_yku5cTaqO"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Note: most chatbots leave global variables and DOM nodes, 
      // but we try to remove the script tag at least.
    };
  }, []);

  return null; // The script handles the UI
}

declare global {
  interface Window {
    chatbaseConfig: any;
  }
}
