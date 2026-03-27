import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: '#3E3B2E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5F2EA',
          fontSize: 21,
          fontStyle: 'italic',
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
