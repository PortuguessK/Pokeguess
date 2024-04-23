import "./reverse.css"
export function ReverseSvg() {
  return (
    <svg viewBox="0 0 24 24"
    className="ReverseSvg">
      <path
        d="M 15.586 22.293 L 17 23.707 L 23.707 17 L 17 10.293 L 15.586 11.707 L 19.879 16 L 2.293 16 L 2.293 18 L 19.879 18 L 15.586 22.293 Z"
        className="PathReverse" id="PathReverse1"
      />
      <path
        d="M 13.586 1.707 L 15 0.293 L 21.707 7 L 15 13.707 L 13.586 12.293 L 17.879 8 L 0.293 8 L 0.293 6 L 17.879 6 L 13.586 1.707 Z"
        className="PathReverse" id="PathReverse2"
        transform="matrix(-1, 0, 0, -1, 0.000004, 0.000001)"
      />
    </svg>
  );
}
