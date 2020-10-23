import Axios from "axios";
import { useEffect, useState } from "react";
import { parseMP3 } from "./mp3";

/**
 * trim first `trimDuration` seconds of MP3
 * @param source source MP3
 * @param trimDuration duration to trim (in seconds)
 * @param inclusive
 *   if `true`, the actual duration removed will be slightly shorter than `trimDuration`
 *   if `false`, the actual duration removed will be slightly longer than `trimDuration`
 * @returns trimmed MP3
 */
function trimMP3(
  source: ArrayBuffer,
  trimDuration: number,
  inclusive = false
): ArrayBuffer | undefined {
  const frames = parseMP3(source);

  let index = 0;
  let totalDuration = 0;
  while (totalDuration < trimDuration) {
    const frame = frames[index];
    if (!frame) {
      // EOF; `source` is shorter than `trimDuration`
      return;
    }

    const { frameHeader } = frame;
    if (frameHeader) {
      totalDuration += 1152 / frameHeader.samplingRate;
    }

    index++;
  }

  if (inclusive && index > 0) {
    index--;
  }

  const beginFrame = frames[index];

  return source.slice(beginFrame.offset);
}

//

interface TrimOptions {
  sourceURL: string;
  trimDuration: number;
  inclusive: boolean;
}

export function useTrimMP3() {
  const [options, setOptions] = useState<TrimOptions>();
  const [trimmedMP3URL, setTrimmedMP3URL] = useState<string>("");

  useEffect(() => {
    if (!options) {
      return;
    }

    let blobURL: string | undefined;

    //console.log("trim", options);

    Axios.get(options.sourceURL, {
      responseType: "arraybuffer",
    })
      .then((response) => {
        if (!options) {
          return;
        }

        //console.log("trim res", options);

        const trimmed = trimMP3(
          response.data as ArrayBuffer,
          options.trimDuration,
          options.inclusive
        );

        if (!trimmed) {
          // will be catched
          throw new Error("trimMP3() failed");
        }

        blobURL = URL.createObjectURL(
          new Blob([trimmed], {
            type: "audio/mp3",
          })
        );

        setTrimmedMP3URL(blobURL);
      })
      .catch((error) => {
        console.error("trim failed", error);
      });

    return () => {
      if (blobURL) {
        URL.revokeObjectURL(blobURL);
      }
    };
  }, [options]);

  return [trimmedMP3URL, setOptions] as const;
}
