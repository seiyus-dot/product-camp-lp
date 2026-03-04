export default function DividerPreview() {
  const DarkBlock = ({ label }: { label: string }) => (
    <div className="bg-[#0f172a] h-24 flex items-center justify-center">
      <span className="text-white/50 text-sm">{label}</span>
    </div>
  );
  const WhiteBlock = ({ label }: { label: string }) => (
    <div className="bg-white h-24 flex items-center justify-center">
      <span className="text-slate-400 text-sm">{label}</span>
    </div>
  );

  return (
    <div className="bg-slate-100 py-10 space-y-16">

      {/* ① SVG Wave */}
      <div>
        <p className="text-center font-bold text-slate-700 mb-4 text-lg">① SVGウェーブ（なめらか波形）</p>
        <DarkBlock label="ダークセクション" />
        <div className="relative w-full overflow-hidden leading-none bg-white">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
              fill="#0f172a"
            />
          </svg>
        </div>
        <WhiteBlock label="ホワイトセクション" />
      </div>

      {/* ② 斜めカット */}
      <div>
        <p className="text-center font-bold text-slate-700 mb-4 text-lg">② 斜めカット（シャープ）</p>
        <DarkBlock label="ダークセクション" />
        <div className="relative h-20 bg-white overflow-hidden">
          <div
            className="absolute inset-0 bg-[#0f172a]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 100%)" }}
          />
        </div>
        <WhiteBlock label="ホワイトセクション" />
      </div>

      {/* ③ グラデーションフェード */}
      <div>
        <p className="text-center font-bold text-slate-700 mb-4 text-lg">③ グラデーションフェード（シンプル）</p>
        <DarkBlock label="ダークセクション" />
        <div className="h-20 bg-gradient-to-b from-[#0f172a] to-white" />
        <WhiteBlock label="ホワイトセクション" />
      </div>

      {/* ④ アーク（丸みカーブ） */}
      <div>
        <p className="text-center font-bold text-slate-700 mb-4 text-lg">④ アーク（丸みカーブ）</p>
        <DarkBlock label="ダークセクション" />
        <div className="relative w-full overflow-hidden leading-none bg-white">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-20"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L1440,0 Q720,160 0,0 Z" fill="#0f172a" />
          </svg>
        </div>
        <WhiteBlock label="ホワイトセクション" />
      </div>

      {/* ⑤ ダブルウェーブ（レイヤー） */}
      <div>
        <p className="text-center font-bold text-slate-700 mb-4 text-lg">⑤ ダブルウェーブ（レイヤー感）</p>
        <DarkBlock label="ダークセクション" />
        <div className="relative w-full overflow-hidden leading-none bg-white h-20">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C360,10 1080,80 1440,30 L1440,0 L0,0 Z"
              fill="#0f172a"
              opacity="0.5"
            />
            <path
              d="M0,60 C300,20 900,80 1440,40 L1440,0 L0,0 Z"
              fill="#0f172a"
            />
          </svg>
        </div>
        <WhiteBlock label="ホワイトセクション" />
      </div>

    </div>
  );
}
