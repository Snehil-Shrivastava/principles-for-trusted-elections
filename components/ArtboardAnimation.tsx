import BuildingSVG from "./BuildingSVG";
import GridSVG from "./GridSVG";

const ArtboardAnimation = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <div className="relative bg-brand-blue">
      <GridSVG />
      <BuildingSVG
        className="absolute inset-x-0 top-1/2 -translate-y-1/2"
        onComplete={onComplete}
      />
    </div>
  );
};

export default ArtboardAnimation;
