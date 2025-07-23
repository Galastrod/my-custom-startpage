const schemes = [
  {
    name: "warm-dark",
    vars: {
      "--bg": "#463d3d",
      "--bg2": "#645a5a",
      "--bg-tr": "#33333399",
      "--fg": "#bba4a4",
      "--fg-a": "#c46a65",
      "--shd": "#00000066"
    }
  },
  {
    name: "cool-blue",
    vars: {
      "--bg": "#2b3a42",
      "--bg2": "#3f5765",
      "--bg-tr": "#2b3a4299",
      "--fg": "#bdd4de",
      "--fg-a": "#6fb1fc",
      "--shd": "#00000055"
    }
  },
  {
    name: "forest-green",
    vars: {
      "--bg": "#2e3d30",
      "--bg2": "#3e5c43",
      "--bg-tr": "#2e3d3099",
      "--fg": "#b8d8ba",
      "--fg-a": "#8bcf9b",
      "--shd": "#00000066"
    }
  },
  {
    name: "neon-night",
    vars: {
      "--bg": "#0f0f23",
      "--bg2": "#1f1f3a",
      "--bg-tr": "#0f0f2399",
      "--fg": "#d8f3ff",
      "--fg-a": "#00f7ff",
      "--shd": "#00ffff33"
    }
  },
  {
    name: "sunset",
    vars: {
      "--bg": "#402218",
      "--bg2": "#865439",
      "--bg-tr": "#40221899",
      "--fg": "#ffcab0",
      "--fg-a": "#ff9e80",
      "--shd": "#00000044"
    }
  },
  {
    name: "lavender-dream",
    vars: {
      "--bg": "#2f2940",
      "--bg2": "#4f4563",
      "--bg-tr": "#2f294099",
      "--fg": "#d3c1e5",
      "--fg-a": "#b282f2",
      "--shd": "#00000055"
    }
  },
  {
    name: "coffee-cream",
    vars: {
      "--bg": "#3b2f2f",
      "--bg2": "#6f4e37",
      "--bg-tr": "#3b2f2f99",
      "--fg": "#f3e9dc",
      "--fg-a": "#d6a77a",
      "--shd": "#00000033"
    }
  },
  {
    name: "icy-light",
    vars: {
      "--bg": "#e0f7fa",
      "--bg2": "#b2ebf2",
      "--bg-tr": "#e0f7fa99",
      "--fg": "#37474f",
      "--fg-a": "#0097a7",
      "--shd": "#00000022"
    }
  }
];


const randomScheme = schemes[Math.floor(Math.random() * schemes.length)];

for (let [key, value] of Object.entries(randomScheme.vars)) {
  document.documentElement.style.setProperty(key, value);
}
