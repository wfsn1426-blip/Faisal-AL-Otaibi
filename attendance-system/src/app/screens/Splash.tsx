import { useEffect } from "react";

type Props = {
  onFinish: () => void;
};

export default function Splash({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary animate-fade">
      <h1 className="text-white text-3xl font-bold tracking-wide">
        Attendance System
      </h1>
    </div>
  );
}
