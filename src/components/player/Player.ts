import { StyledReactPlayer } from './styles';

// ----------------------------------------------------------------------

// https://github.com/CookPete/react-player

export default function Player({ ...other }) {
  // @ts-expect-error TS(2749): 'StyledReactPlayer' refers to a value, but is bein... Remove this comment to see the full error message
  return <StyledReactPlayer {...other} />;
}
