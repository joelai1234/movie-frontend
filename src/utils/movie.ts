import { VideoData } from "../model/movie";

export const formatMovies = (data: VideoData[]) => {
  return data.map((item) => {
    return {
      id: String(item.id),
      name: item.name,
      imageUrl: item.coverPictureUrl,
      description: item.videoDetail.description,
      updatedAt: item.updatedAt,
    };
  });
};

function hexToArrayBuffer(hex: string): ArrayBuffer {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes.buffer;
}

export async function decryptData(keyHex: string, ivHex: string, encryptedDataHex: string): Promise<string> {
  const key = await crypto.subtle.importKey(
      'raw',
      hexToArrayBuffer(keyHex),
      { name: 'AES-CBC' },
      false,
      ['decrypt']
  );

  const iv = hexToArrayBuffer(ivHex);
  const encryptedData = hexToArrayBuffer(encryptedDataHex);

  const decryptedData = await crypto.subtle.decrypt(
      { name: 'AES-CBC', iv: iv },
      key,
      encryptedData
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedData);
}