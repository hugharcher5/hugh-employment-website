import { ImageResponse } from "next/og";

export const alt = "Hugh Archer: finance student building AI tools for investors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f6f5f1", color: "#121417" }}>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#5c626c" }}>FINANCE · AI · DUBLIN</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontFamily: "serif" }}>Hugh Archer</div>
          <div style={{ fontSize: 40, marginTop: 12, color: "#33383f" }}>Finance student building AI tools for investors.</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#0f5c4a" }}>UCD Commerce · IBM Retirement Fund · Blackkite Ventures</div>
      </div>
    ),
    size,
  );
}
