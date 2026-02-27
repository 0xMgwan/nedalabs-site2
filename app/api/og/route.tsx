import { ImageResponse } from '@vercel/og';
import { colors } from '@/data/config/colors';
import { metadata } from '@/data/config/metadata';
import { readFile } from 'fs/promises';
import sizeOf from 'image-size';
import path from 'path';
import mime from 'mime-types';

const MAX_LOGO_HEIGHT = 150;
const MAX_LOGO_WIDTH = 350;

const getLogoSize = (dimensions: { width: number; height: number }) => {
  // Calculate image size, with the height being maximum MAX_LOGO_HEIGHT or width being maximum MAX_LOGO_WIDTH
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height;

  let logoWidth = imageWidth;
  let logoHeight = imageHeight;

  if (imageWidth > MAX_LOGO_WIDTH) {
    logoWidth = MAX_LOGO_WIDTH;
    logoHeight = (imageHeight * MAX_LOGO_WIDTH) / imageWidth;
  }

  if (logoHeight > MAX_LOGO_HEIGHT) {
    logoHeight = MAX_LOGO_HEIGHT;
    logoWidth = (imageWidth * MAX_LOGO_HEIGHT) / imageHeight;
  }

  return {
    logoWidth,
    logoHeight,
  };
};

export async function GET() {
  const imagePath = path.join(process.cwd(), '/public/assets/logos/NEDA.jpg');
  const file = await readFile(imagePath);
  const mimeType = mime.lookup(imagePath);
  const dimensions = sizeOf(file) as { width: number; height: number };

  const { logoWidth, logoHeight } = getLogoSize(dimensions);
  const logoImage = `data:${mimeType};base64,${file.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          backgroundColor: 'transparent',
        }}
      >
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          style={{
            opacity: 1,
            width: '1000px',
            height: '1000px',
            position: 'absolute',
            top: '-500px',
          }}
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill={`url(#gradient)`}
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient
              id={`gradient`}
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor={colors.primary.light} stopOpacity="0.5"></stop>
              <stop
                offset="1"
                stopColor={colors.primary.lighter}
                stopOpacity="0"
              ></stop>
            </radialGradient>
          </defs>
        </svg>

        <div
          style={{
            padding: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoImage}
            alt="NEDA LABS"
            style={{
              padding: 15,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              width: logoWidth,
              height: logoHeight,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
          />

          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
              marginBottom: 0,
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {metadata.title}
          </h1>
          <p
            style={{
              marginTop: 12,
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              textAlign: 'center',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            {metadata.description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
