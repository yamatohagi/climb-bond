import * as Popover from '@radix-ui/react-popover';
import { css } from 'styled-system/css';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger
      className={css({ fontSize: '2xl', fontWeight: { base: 'bold', sm: 'lighter' } })}
    >
      Show info
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent">
        Some content
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
