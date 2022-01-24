import { Box } from '@mui/system';

import logoVector from '../../assets/vectors/logo.png';

const Logo = ({ size, ...sx }) => {
  return (
    <Box
      component='div'
      sx={{
        width: 4.1 * size,
        height: size,
        backgroundImage: `url(${logoVector})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...sx
      }}
    />
  );
};

export default Logo;
