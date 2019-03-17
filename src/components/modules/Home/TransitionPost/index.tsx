import React, { useState, useRef, useEffect } from 'react';
import { TransitionPostContainer, TransitionOverlay } from './styled';

const TransitionPost: React.FC<Props> = ({ children, direction }) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mounted) return;

    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);

            // Stop observing element
            lazyImageObserver.unobserve(postRef.current);
          };
        });
      });

      // Start observing element
      lazyImageObserver.observe(postRef.current);
    } else {
      // No animation
      setVisible(true);
    }

    setMounted(true);
  });

  return (
    <TransitionPostContainer ref={postRef}>
      <TransitionOverlay visible={visible} direction={direction} />
      {children(visible)}
    </TransitionPostContainer>
  );
};

TransitionPost.defaultProps = {
  direction: 'left',
};

export type Props = {
  children: (visible: boolean) => React.ReactNode;
  direction?: 'left' | 'right';
};

export default TransitionPost;
