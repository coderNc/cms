type Uint8Func = (file: File) => Promise<Uint8Array>;
export const blobToUint8Array: Uint8Func = (file: File) => {
  const fr = new FileReader();
  fr.readAsArrayBuffer(file);
  return new Promise((resole) => {
    fr.onload = (_res) => {
      // console.log(res);
      const buffer = fr.result;
      if (buffer && typeof buffer === 'object') {
        const uint8 = new Uint8Array(buffer);
        console.log(uint8.byteLength);
        resole(uint8);
      }
    };
  });
};
