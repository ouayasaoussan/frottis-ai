
import React, { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [lang, setLang] = useState('fr');

  const labels = {
    fr: {
      title: "Analyse de frottis cervico-utérin",
      upload: "Téléverser une image",
      result: "Résultat :",
      normal: "Normal",
      suspect: "Suspect",
      switch: "Passer à l'anglais",
    },
    en: {
      title: "Cervical Smear Analysis",
      upload: "Upload an image",
      result: "Result:",
      normal: "Normal",
      suspect: "Suspicious",
      switch: "Switch to French",
    },
  };

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    simulatePrediction(uploadedFile);
  };

  const simulatePrediction = (file) => {
    if (!file) return;
    const prediction = Math.random() > 0.5 ? "normal" : "suspect";
    setTimeout(() => setResult(prediction), 1000);
  };

  const currentLabels = labels[lang];

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>{currentLabels.title}</h1>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {result && (
        <div style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: result === "normal" ? "#c8f7c5" : "#f7c5c5",
          color: result === "normal" ? "#2d7a2d" : "#7a2d2d"
        }}>
          {currentLabels.result} {currentLabels[result]}
        </div>
      )}
      <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} style={{ marginTop: 20 }}>
        {currentLabels.switch}
      </button>
    </div>
  );
}
