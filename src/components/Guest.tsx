import { format } from "date-fns";
import { Redo, Sunrise, Sunset, Undo } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Iprops {
  id: string;
  name: string;
  arrive: Date | null;
  exit: Date | null;
  updater: string;
}
export default function Guest(props: Iprops) {
  function formatDate(data: Date) {
    return format(data, "HH:mm:ss");
  }

  return (
    <li className="border p-1 rounded flex justify-between shadow hover:bg-primary-foreground col-span-1">
      <div className="flex flex-col gap-1">
        <span className="font-medium">{props.name}</span>
        <div className="flex gap-1 items-end opacity-80">
          <Sunset size={18} />
          <span className="text-xs">
            {props?.arrive ? formatDate(props.arrive) : "Não está na festa"}
          </span>
        </div>

        <div className="flex gap-1 items-end opacity-80">
          <Sunrise size={18} />
          <span className="text-xs">
            {props.arrive && !props.exit && "Ainda não saiu!"}
            {!props.arrive && !props.exit && "Ainda não entrou!"}
            {props.arrive && props.exit && formatDate(props.exit)}
          </span>
        </div>
        <Badge>Op.{props.updater}</Badge>
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <Button variant="outline" className="px-2">
          <Undo />
        </Button>
        <Button variant="outline" className="px-2">
          <Redo />
        </Button>
      </div>
    </li>
  );
}
