'use client';
import React from 'react';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

const iconStyle = tva({
  base: 'text-white pointer-events-none',
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    },
  },
});

type IIconProps = React.ComponentProps<typeof PrimitiveIcon> &
  VariantProps<typeof iconStyle> & { className?: string };

function Icon({ size = 'md', className, ...props }: IIconProps) {
    return (
      <UIIcon
        {...props}
        className={iconStyle({ size, class: className })}
      />
    );
}
export { Icon };
