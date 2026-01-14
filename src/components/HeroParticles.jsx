import Particles from "react-tsparticles";

export default function HeroParticles() {
  return (
    <Particles
      options={{
        fullScreen: false,
        particles: {
          number: { value: 30 },
          size: { value: 1 },
          opacity: { value: 0.08 },
          move: {
            enable: true,
            speed: 0.2,
          },
          color: { value: "#93c5fd" },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
    />
  );
}
