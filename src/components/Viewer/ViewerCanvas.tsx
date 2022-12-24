import React from "react";

type configTypes = {
  size: [number, number];
};

const ViewerCanvas = ({ size }: configTypes) => {
  const [config, setConfig] = React.useState({
    size: [size[0] * 10, size[1] * 10],
  });

  const adjustSize = (element: Element) => {
    const canvasWidth = element.clientWidth;
    const canvasHeight = element.clientHeight;
    const canvasContainerWidth = element.parentElement!.clientWidth;
    const canvasContainerHeight = element.parentElement!.clientHeight;

    const intersectionWidthRatio = canvasContainerWidth / canvasWidth;
    const intersectionHeightRatio = canvasContainerHeight / canvasHeight;

    const maxSizePercentage = 0.9;

    if (intersectionHeightRatio <= intersectionWidthRatio) {
      setConfig((prev) => ({
        ...prev,
        size: [
          prev.size[0] * intersectionHeightRatio * maxSizePercentage,
          prev.size[1] * intersectionHeightRatio * maxSizePercentage,
        ],
      }));
    } else {
      setConfig((prev) => ({
        ...prev,
        size: [
          prev.size[0] * intersectionWidthRatio * maxSizePercentage,
          prev.size[1] * intersectionWidthRatio * maxSizePercentage,
        ],
      }));
    }
  };

  React.useEffect(() => {
    const canvas = document.getElementById("Viewer__canvas")!;

    adjustSize(canvas);
  }, []);

  return (
    <canvas
      id="Viewer__canvas"
      className="Viewer__canvas"
      width={config.size[0]}
      height={config.size[1]}
    ></canvas>
  );
};

export { ViewerCanvas };
