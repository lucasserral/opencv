import React from "react";

type configTypes = {
  size: [number, number];
  callbackRender: Function;
};

const ViewerCanvas = ({ size, callbackRender }: configTypes) => {
  const [config, setConfig] = React.useState({
    size: [size[0] * 10, size[1] * 10],
  });

  const adjustSize = (element: HTMLElement) => {
    const canvasWidth = element.clientWidth;
    const canvasHeight = element.clientHeight;
    const canvasContainerWidth = element.parentElement!.clientWidth;
    const canvasContainerHeight = element.parentElement!.clientHeight;

    const intersectionWidthRatio = canvasContainerWidth / canvasWidth;
    const intersectionHeightRatio = canvasContainerHeight / canvasHeight;

    const maxSizePercentage = 0.9;

    if (intersectionHeightRatio <= intersectionWidthRatio) {
      element.style.scale = `${intersectionHeightRatio * maxSizePercentage}`;
      // setConfig((prev) => ({
      //   ...prev,
      //   size: [
      //     prev.size[0] * intersectionHeightRatio * maxSizePercentage,
      //     prev.size[1] * intersectionHeightRatio * maxSizePercentage,
      //   ],
      // }));
    } else {
      element.style.scale = `${intersectionWidthRatio * maxSizePercentage}`;
    }
  };

  React.useEffect(() => {
    const canvas: HTMLCanvasElement = Array.from(
      document.getElementsByTagName("canvas")
    ).find((element) => element.id == "Viewer__canvas")!;
    adjustSize(canvas);
  }, []);

  React.useEffect(() => {
    const canvas: HTMLCanvasElement = Array.from(
      document.getElementsByTagName("canvas")
    ).find((element) => element.id == "Viewer__canvas")!;
    const ctx = canvas.getContext("2d");
    callbackRender(canvas, ctx);
  });
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
