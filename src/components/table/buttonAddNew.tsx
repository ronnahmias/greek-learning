import { Button } from "@components/material/import.material.tailwind";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

interface ButtonAddNewProps {
  addButtonText: string;
  addButtonOnClick?: () => void;
}

export default function ButtonAddNew({
  addButtonText,
  addButtonOnClick,
}: ButtonAddNewProps) {
  return (
    <Button
      className="flex items-center gap-3"
      size="sm"
      onClick={addButtonOnClick}
    >
      <PlusCircleIcon strokeWidth={2} className="h-4 w-4" />
      {addButtonText}
    </Button>
  );
}
