import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export function AppleIcon({ size = 20, color = '#32332c' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.1 16.78 3.07 9.85 5.67 6.4c1.23-1.55 2.85-2.33 4.34-2.33 1.25 0 2.22.46 2.97.46.73 0 2.04-.54 3.47-.4 1.5.15 2.8.74 3.65 1.95-3.1 1.83-2.6 6.14.47 7.42-1.02 2.62-2.4 5.33-3.52 7.18zM12.03 4.07c-.15-2.27 1.63-4.14 3.65-4.07.24 2.26-1.93 4.22-3.65 4.07z"
        fill={color}
      />
    </Svg>
  );
}
