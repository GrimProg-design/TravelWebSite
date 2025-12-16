import { useEffect, useRef } from "react";

declare global {
  interface Window {
    WorldWind: any;
  }
}

export default function RotatingGlobe() {
  const globeRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const checkAndInit = () => {
      if (!window.WorldWind) {
        setTimeout(checkAndInit, 100);
        return;
      }

      const WorldWind = window.WorldWind;
      WorldWind.configuration.baseUrl = "/worldwind/";
      const wwd = new WorldWind.WorldWindow(globeRef.current);

      wwd.addLayer(new WorldWind.BMNGLayer());
      wwd.addLayer(new WorldWind.CompassLayer());
      wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

      wwd.navigator.range = 14_000_000;

      let longitude = 0;

      function rotate() {
        longitude += 0.3;
        if (longitude > 180) longitude -= 360;

        wwd.navigator.lookAtLocation.latitude = 0;
        wwd.navigator.lookAtLocation.longitude = longitude;

        wwd.redraw();
        requestAnimationFrame(rotate);
      }

      rotate();
    };

    checkAndInit();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <canvas
        ref={globeRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
