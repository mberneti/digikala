import { useRef } from "react";

export interface IOnScrollState {
  isReachedTop: boolean;
  isReachedEnd: boolean;
}

interface IProps {
  onScroll: ({ isReachedTop, isReachedEnd }: IOnScrollState) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
  scrollOffset: number;
}

export default function useScroll({
  onScroll,
  scrollRef,
  scrollOffset,
}: IProps) {
  const state = useRef<IOnScrollState>({
    isReachedTop: true,
    isReachedEnd: false,
  });

  const handleWheelChange = () => {
    if (scrollRef && scrollRef.current) {
      const {
        current: { scrollTop, offsetHeight, scrollHeight },
      } = scrollRef;
      const isReachedTop = scrollTop < scrollOffset;
      const isReachedEnd =
        scrollTop + offsetHeight + scrollOffset > scrollHeight;
      state.current = {
        isReachedEnd,
        isReachedTop,
      };
      if (isReachedTop !== isReachedEnd) {
        onScroll({ isReachedTop, isReachedEnd });
      }
    }
  };

  return { handleWheelChange };
}
