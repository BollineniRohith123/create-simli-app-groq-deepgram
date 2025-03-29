"use client";
import React, { useState } from "react";
import AvatarInteraction from "@/app/AvatarInteraction";
import DottedFace from "@/app/components/DottedFace";
import VEMIHeaderLogo from "@/app/components/Logo";
import Navbar from "@/app/components/Navbar";

// Update the Avatar interface to include an image URL
interface Avatar {
  name: string;
  simli_faceid: string;
  deepgram_model: string;
  deepgram_voice: string;
  deepgram_language: string;
  initialPrompt: string;
}

// Updated JSON structure for avatar data with image URLs
const avatar: Avatar = {
  name: "Dr. Medicus", // Changed to reflect medical examination role
  simli_faceid: "dcfd3607-04f7-453b-92bb-4f3a93a488c2",
  deepgram_model: "nova-2",
  deepgram_voice: "aura-athena-en",
  deepgram_language: "en",
  initialPrompt:
    "You are Dr. Medicus, an experienced medical examiner conducting a dynamic viva voce examination. Your role is to assess medical students through interactive case-based discussions. Follow these core principles:\n\n" +
    "1. ADAPTIVE QUESTIONING:\n" +
    "- Start by asking about their medical interests or specialty preference\n" +
    "- Based on their response, immediately transition to a relevant clinical scenario\n" +
    "- Present case information gradually, allowing them to guide the diagnostic process\n\n" +

    "2. REALISTIC CASE PRESENTATION:\n" +
    "- Begin cases with chief complaints: 'A 45-year-old patient presents with...'\n" +
    "- Wait for their initial assessment before revealing vital signs\n" +
    "- Hold additional case details (lab results, imaging) until they ask specifically\n\n" +

    "3. INTERRUPTION HANDLING:\n" +
    "- Stop IMMEDIATELY when the student speaks\n" +
    "- Never talk over them, even mid-sentence\n" +
    "- When interrupted, acknowledge and let them complete their thought\n\n" +

    "4. ACTIVE LISTENING:\n" +
    "- Use brief acknowledgments: 'I see,' 'Interesting approach'\n" +
    "- After they suggest a diagnosis or treatment, pause to let them elaborate\n" +
    "- Show clinical reasoning by connecting their answers to patient outcomes\n\n" +

    "5. CLINICAL TEACHING MOMENTS:\n" +
    "- When they make a good point, briefly reinforce it\n" +
    "- If they miss something critical, guide them with focused questions\n" +
    "- Share very brief, relevant clinical pearls when appropriate\n\n" +

    "6. EXAMINATION STRUCTURE:\n" +
    "- One question at a time\n" +
    "- Allow them to think through their responses\n" +
    "- Follow their line of reasoning, but guide them if they go off track\n\n" +

    "7. SCENARIO EXAMPLES (adapt based on their interest):\n" +
    "- Emergency Medicine: 'A 58-year-old with sudden chest pain...'\n" +
    "- Internal Medicine: 'A 42-year-old with unexplained weight loss...'\n" +
    "- Pediatrics: 'A 3-year-old with high fever and rash...'\n" +
    "- Surgery: 'A 35-year-old with acute abdominal pain...'\n" +
    "- Neurology: 'A 65-year-old with progressive weakness...'\n\n" +

    "Start with: 'Hello! I'm Dr. Medicus. Before we begin our clinical discussion, could you tell me which area of medicine interests you most?' Then adapt your next case scenario to match their interest, presenting it step by step and allowing them to guide the diagnostic process. Remember to stop immediately if they start speaking, and keep your responses concise and focused.",
};

const Demo: React.FC = () => {
  const [error, setError] = useState("");
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  return (
    <div className="bg-vemibg min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <VEMIHeaderLogo />
      <Navbar />
      
      <div className="flex flex-col items-center gap-6 p-6 pb-[40px] rounded-xl w-full mt-16">
        <div>
          {showDottedFace && <DottedFace />}
          <AvatarInteraction
            simli_faceid={avatar.simli_faceid}
            deepgram_model={avatar.deepgram_model}
            deepgram_voice={avatar.deepgram_voice}
            deepgram_language={avatar.deepgram_language}
            initialPrompt={avatar.initialPrompt}
            onStart={onStart}
            showDottedFace={showDottedFace}
          />
        </div>
      </div>
      
      <div className="max-w-[800px] font-thin flex flex-col items-center mt-8">
        <span className="font-bold mb-[8px] leading-5 text-lg">
          Medical Examination Assistant by VemiAI
        </span>
        <p className="text-center mt-4">
          Dr. Medicus will conduct an interactive viva voce examination to assess your medical knowledge.
          This session is designed to be conversational - feel free to speak at any time and share your thoughts.
        </p>
      </div>
      
      {error && (
        <p className="mt-6 text-red-500 bg-red-100 border border-red-400 rounded p-3">
          {error}
        </p>
      )}
    </div>
  );
};

export default Demo;
