import Image from "next/image";

export default function WaveDivider() {
  return (
    <div className="w-full overflow-hidden leading-none">
      <Image
        src="/images/wave-divider.png"
        alt=""
        width={1536}
        height={384}
        className="w-full h-auto block"
        quality={90}
      />
    </div>
  );
}
