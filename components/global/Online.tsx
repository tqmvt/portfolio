import { FC } from "react";

interface OnlineProps {
  active?: boolean;
}
export const Online: FC<OnlineProps> = ({ active }) => {
  return (
    <div className="fixed bottom-3 left-3">
      {active && (
        <span className="relative flex h-2 w-2 cursor-pointer">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fun-pink opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-fun-pink-light"></span>
        </span>
      )}
      {!active && (
        <span className="relative flex h-2 w-2">
          <span
            className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"
            title="Inactive"
          ></span>
        </span>
      )}
    </div>
  );
};
