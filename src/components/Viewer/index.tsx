import React from "react";
import OpenCvInput from "../molecules/OpenCvInput";
import { ViewerCanvas } from "./ViewerCanvas";

type props = {
  values: {
    fullname?: string;
  };
};

function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
) {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

export default function Viewer({ values }: props) {
  function render(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    console.log(canvas);
    ctx.beginPath();
    ctx.fillStyle = "#006666";
    ctx.rect(0, 0, canvas.width, canvas.height / 4.5);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "#006666";
    ctx.lineWidth = 16;
    ctx.roundRect(
      50,
      canvas.height / 4.5 + 50,
      canvas.width / 2.5,
      canvas.height - (canvas.height / 4.5 + 100),
      32
    );
    ctx.stroke();
    ctx.closePath();
    ctx.font = "12rem Arial";
    ctx.fillStyle = "#FFF";
    ctx.textAlign = "center";
    console.log(
      getLines(ctx, values?.fullname || "Lucas Serral", canvas.width - 200)
    );

    getLines(
      ctx,
      values?.fullname || "Lucas Serral",
      canvas.width - 200
    ).forEach((line, index) => {
      ctx.fillText(
        line,
        canvas.width / 2,
        canvas.height / 8 + 200 * index,
        canvas.width - 200
      );
    });
  }

  return (
    <div id="Viewer__container" className="Viewer__container">
      <ViewerCanvas size={[210, 297]} callbackRender={render} />
    </div>
  );
}
