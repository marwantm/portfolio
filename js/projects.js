// projects.js – data for all four portfolio projects
const PROJECTS = [
  {
    id: "nano-clone",
    title: "Arduino Nano Clone",
    badge: "Independent Design",
    badgeClass: "badge‑independent",
    specs: {
      "MCU": "ATmega328P",
      "Layers": "2‑layer",
      "Design Status": "Verified (DRC/ERC clean)",
      "Manufacturing": "Planned – not yet undertaken",
      "Tool": "KiCad 9"
    },
    images: {
      schematic: [
        "assets/images/nano-clone/schematic-page-1.png",
        "assets/images/nano-clone/schematic-page-2.png"
      ],
      pcbTop: "assets/images/nano-clone/pcb-top.png",
      pcbBottom: "assets/images/nano-clone/pcb-bottom.png",
      render3DFront: "assets/images/nano-clone/3d-front.jpg",
      render3DBack: "assets/images/nano-clone/3d-back.jpg"
    },
    repo: "https://github.com/marwantm/arduino-nano-custom-board"
  },
  {
    id: "stm32wb-bluetooth",
    title: "STM32WB Bluetooth Development Board",
    badge: "Tutorial‑Based Build",
    badgeClass: "badge‑tutorial",
    specs: {
      "MCU": "STM32WB55CEU (Cortex‑M4 + BLE co‑processor)",
      "Layers": "4‑layer",
      "Design Status": "Verified (DRC/ERC clean)",
      "Manufacturing": "Planned – not yet undertaken",
      "Tool": "KiCad 9"
    },
    images: {
      schematic: "assets/images/stm32wb-bluetooth/schematic.png",
      pcbTop: "assets/images/stm32wb-bluetooth/pcb-top.png",
      pcbBottom: "assets/images/stm32wb-bluetooth/pcb-bottom.png",
      render3DFront: "assets/images/stm32wb-bluetooth/3d-front.png",
      render3DBack: "assets/images/stm32wb-bluetooth/3d-back.png"
    },
    repo: "https://github.com/marwantm/STM32-Bluetooth"
  },
  {
    id: "ti-mspm0",
    title: "TI MSPM0 Development Board",
    badge: "Tutorial‑Based Build",
    badgeClass: "badge‑tutorial",
    specs: {
      "MCU": "MSPM0G3507SPTR (Arm Cortex‑M0+)",
      "Layers": "2‑layer",
      "Design Status": "Verified (DRC/ERC clean)",
      "Manufacturing": "Planned – not yet undertaken",
      "Tool": "KiCad 9"
    },
    images: {
      schematic: "assets/images/ti-mspm0/schematic.png",
      pcbTop: "assets/images/ti-mspm0/pcb-top.png",
      pcbBottom: "assets/images/ti-mspm0/pcb-bottom.png",
      render3DFront: "assets/images/ti-mspm0/3d-front.png",
      render3DBack: "assets/images/ti-mspm0/3d-back.png"
    },
    repo: "https://github.com/marwantm/TI-MSPM0"
  },
  {
    id: "esp32-sensor",
    title: "ESP32 Sensor Board",
    badge: "Tutorial‑Based Build",
    badgeClass: "badge‑tutorial",
    specs: {
      "MCU": "ESP32‑C3‑02",
      "Layers": "2‑layer",
      "Design Status": "Verified (DRC/ERC clean)",
      "Manufacturing": "Planned – not yet undertaken",
      "Tool": "KiCad 9"
    },
    images: {
      schematic: [
        "assets/images/esp32-sensor/schematic-page-1.png",
        "assets/images/esp32-sensor/schematic-page-2.png",
        "assets/images/esp32-sensor/schematic-page-3.png",
        "assets/images/esp32-sensor/schematic-page-4.png"
      ],
      pcbTop: "assets/images/esp32-sensor/pcb-top.png",
      pcbBottom: "assets/images/esp32-sensor/pcb-bottom.png",
      render3DFront: "assets/images/esp32-sensor/3d-front.png",
      render3DBack: "assets/images/esp32-sensor/3d-back.png"
    },
    repo: "https://github.com/marwantm/esp32-sensor-board"
  }
];

export default PROJECTS;
