import React from "react";
import OpenCvInput from "../molecules/OpenCvInput";
import { ViewerCanvas } from "./ViewerCanvas";

type values = {
  fullname?: string;
  position?: string;
  phone?: string;
  email?: string;
};

type sections = Array<{
  title: string;
  sectionItems: Array<{ title: string; description: string }>;
}>;

type props = {
  values: values;
  sections: Array<any>;
};

const basicResume = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  values: values,
  sections: sections
) => {
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.moveTo(160, 560);
  ctx.lineTo(canvas.width - 160, 560);
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = "Black";
  ctx.font = "10rem Times New Roman";
  ctx.textAlign = "left";
  ctx.fillText(values.fullname || "", 160, 320, canvas.width - 320);
  ctx.font = "8rem Times New Roman";
  ctx.fillText(values.position || "", 160, 480, canvas.width);
  const beginPrintingLinesIndex = 600;
  let printingLineHeight = 0;
  sections?.map((section, index) => {
    ctx.font = "6rem Times New Roman";
    const spaceBeforeSectionTitle = 60;
    const titleSectionHeight =
      ctx.measureText(section.title).actualBoundingBoxAscent +
      ctx.measureText(section.title).actualBoundingBoxDescent;
    printingLineHeight =
      printingLineHeight + spaceBeforeSectionTitle + titleSectionHeight;
    ctx.fillText(
      section.title || "",
      160,
      beginPrintingLinesIndex + printingLineHeight,
      canvas.width
    );
    section.sectionItems.map((sectionItem) => {
      const spaceBeforeSectionItemsTitle = 60;
      ctx.font = "4rem Times New Roman";
      const sectionItemTitleHeightIndex =
        ctx.measureText(sectionItem.title).actualBoundingBoxAscent +
        ctx.measureText(sectionItem.title).actualBoundingBoxDescent;
      printingLineHeight =
        printingLineHeight +
        spaceBeforeSectionItemsTitle +
        sectionItemTitleHeightIndex;
      ctx.fillText(
        sectionItem.title || "",
        160,
        beginPrintingLinesIndex + printingLineHeight,
        canvas.width
      );
      const descLines = getLines(
        ctx,
        sectionItem.description,
        canvas.width - 320
      );
      descLines.map((line) => {
        const spaceBeforeSectionItemsDescLine = 40;
        const lineHeight =
          ctx.measureText(line).actualBoundingBoxAscent +
          ctx.measureText(line).actualBoundingBoxDescent;
        printingLineHeight =
          printingLineHeight + spaceBeforeSectionItemsDescLine + lineHeight;
        ctx.fillText(
          line,
          160,
          beginPrintingLinesIndex + printingLineHeight,
          canvas.width - 320
        );
      });
    });
  });

  // Text align right
  ctx.textAlign = "right";
  ctx.font = "4rem Times New Roman";
  ctx.fillText(values.phone || "", canvas.width - 160, 380, canvas.width);
  ctx.fillText(values.email || "", canvas.width - 160, 480, canvas.width);
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

export default function Viewer({ values, sections }: props) {
  function render(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
    basicResume(canvas, ctx, values, sections);
    // console.log(canvas);
    // ctx.beginPath();
    // ctx.fillStyle = "#006666";
    // ctx.rect(0, 0, canvas.width, canvas.height / 4.5);
    // ctx.fill();
    // ctx.closePath();
    // ctx.beginPath();
    // ctx.strokeStyle = "#006666";
    // ctx.lineWidth = 16;
    // ctx.roundRect(
    //   50,
    //   canvas.height / 4.5 + 50,
    //   canvas.width / 2.5,
    //   canvas.height - (canvas.height / 4.5 + 100),
    //   32
    // );
    // ctx.stroke();
    // ctx.closePath();
    // ctx.font = "12rem Arial";
    // ctx.fillStyle = "#FFF";
    // ctx.textAlign = "center";
    // console.log(
    //   getLines(ctx, values?.fullname || "Lucas Serral", canvas.width - 200)
    // );
    // getLines(
    //   ctx,
    //   values?.fullname || "Lucas Serral",
    //   canvas.width - 200
    // ).forEach((line, index) => {
    //   ctx.fillText(
    //     line,
    //     canvas.width / 2,
    //     canvas.height / 8 + 200 * index,
    //     canvas.width - 200
    //   );
    // });
  }

  return (
    <div id="Viewer__container" className="Viewer__container">
      <ViewerCanvas size={[210, 297]} callbackRender={render} />
    </div>
  );
}
