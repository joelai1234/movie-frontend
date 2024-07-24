import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

interface Subtitle {
  createdAt: string;
  updatedAt: string;
  id: number;
  videoId: number;
  languageCode: string;
  url: string;
  fileName: string;
  sourceType: string;
  videoSubtitleEncryption: {
    createdAt: string;
    updatedAt: string;
    id: number;
    videoSubtitleId: number;
    algorithm: string;
    key: string;
    iv: string;
  };
}

const decryptSubtitle = (encryptedData: string, key: string, iv: string): string => {
  const keyBytes = CryptoJS.enc.Hex.parse(key);
  const ivBytes = CryptoJS.enc.Hex.parse(iv);
  const decrypted = CryptoJS.AES.decrypt(encryptedData, keyBytes, {
    iv: ivBytes,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

const SubtitleComponent: React.FC = () => {
  const [subtitle, setSubtitle] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndDecryptSubtitle = async () => {
      const subtitleData: Subtitle = {
        createdAt: '2024-07-08T16:58:41.644Z',
        updatedAt: '2024-07-08T16:58:41.644Z',
        id: 1,
        videoId: 10,
        languageCode: 'en',
        url: 'https://d3q62pnjbn74l6.cloudfront.net/encrypted_subtitles/encrypted_Aquaman_en.srt',
        fileName: 'Aquaman_en.srt',
        sourceType: 'SYSTEM',
        videoSubtitleEncryption: {
          createdAt: '2024-07-17T01:19:36.379Z',
          updatedAt: '2024-07-17T01:19:36.379Z',
          id: 1,
          videoSubtitleId: 1,
          algorithm: 'aes-256-cbc',
          key: '959116a49eb44f9f5a222418cc131a561f2144de7b1000635a46169030764b4e',
          iv: 'aa52d06af2ad22b05f49110f476fd4e8',
        },
      };

      try {
        const response = await axios.get(subtitleData.url, {
          responseType: 'text',
        });

        const encryptedSubtitle = response.data;
        const decryptedSubtitle = decryptSubtitle(
          encryptedSubtitle,
          subtitleData.videoSubtitleEncryption.key,
          subtitleData.videoSubtitleEncryption.iv
        );

        setSubtitle(decryptedSubtitle);
      } catch (error) {
        console.error('Error fetching or decrypting subtitle:', error);
      }
    };

    fetchAndDecryptSubtitle();
  }, []);

  return (
    <div>
      <h1>Decrypted Subtitle</h1>
      {subtitle ? <pre>{subtitle}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default SubtitleComponent;
