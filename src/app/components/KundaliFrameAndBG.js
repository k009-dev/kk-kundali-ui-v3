import Image from "next/image";

export default function KundaliFrameAndBG() {
  return (
    <Image
      src="/kundali-frame.png"
      alt="Kundali Frame"
      fill
      style={{ objectFit: 'fill' }}
    />
  );
}