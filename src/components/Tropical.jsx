import { useState } from "react";

function Tropical() {
  const [torche1, setTorche1] = useState(false);
  const [torche2, setTorche2] = useState(false);
  const [torche3, setTorche3] = useState(false);

  let message1, message2, message3;

  if (torche1) {
    message1 = "🌋 Torche du volcan allumée !";
  } else {
    message1 = null;
  }

  if (torche2) {
    message2 = "🏝️ Torche de la plage activée !";
  } else {
    message2 = null;
  }

  if (torche3) {
    message3 = "💨 Torche des vents sacrés brûle doucement...";
  } else {
    message3 = null;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🕯️ Torches de l’archipel mystique 🕯️</h2>

      <button onClick={() => setTorche1(!torche1)}>Torche 1 🔥</button>
      <button onClick={() => setTorche2(!torche2)}>Torche 2 🔥</button>
      <button onClick={() => setTorche3(!torche3)}>Torche 3 🔥</button>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {message1}
        {message2}
        {message3}
      </div>
    </div>
  );
}

export default Tropical;