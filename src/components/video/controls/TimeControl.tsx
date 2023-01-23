import { Icon, Icons } from "@/components/Icon";
import { VideoPlayerIconButton } from "../parts/VideoPlayerIconButton";
import { useVideoPlayerState } from "../VideoContext";

function durationExceedsHour(secs: number): boolean {
  return secs > 60 * 60;
}

function formatSeconds(secs: number, showHours = false): string {
  if (Number.isNaN(secs)) {
    if (showHours) return "0:00:00";
    return "0:00";
  }

  let time = secs;
  const seconds = Math.floor(time % 60);

  time /= 60;
  const minutes = Math.floor(time % 60);

  time /= 60;
  const hours = Math.floor(time);

  const paddedSecs = seconds.toString().padStart(2, "0");
  const paddedMins = minutes.toString().padStart(2, "0");

  if (!showHours) return [minutes, paddedSecs].join(":");
  return [hours, paddedMins, paddedSecs].join(":");
}

interface Props {
  className?: string;
}

export function TimeControl(props: Props) {
  const { videoState } = useVideoPlayerState();

  const skipForward = () => {
    videoState.setTime(videoState.time + 10);
  };

  const skipBackward = () => {
    videoState.setTime(videoState.time - 10);
  };

  return (
    <div className={props.className}>
      <p className="flex select-none items-center text-white">
        <VideoPlayerIconButton
          icon={Icons.SKIP_BACKWARD}
          onClick={skipBackward}
        />
        <VideoPlayerIconButton
          icon={Icons.SKIP_FORWARD}
          onClick={skipForward}
        />
      </p>
    </div>
  );
}
