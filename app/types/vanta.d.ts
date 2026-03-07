declare module "vanta/dist/vanta.net.min" {
  interface VantaNetOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Partial<VantaNetOptions>) => void;
  }

  export default function NET(options: VantaNetOptions): VantaEffect;
}
