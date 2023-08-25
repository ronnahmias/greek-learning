import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@/components/material/import.material.tailwind";

interface LauderLessonFormProps {}

export default function LauderLessonForm({}: LauderLessonFormProps) {
  const today = new Date().toISOString().split("T")[0];
  return (
    <form className="mt-6 flex flex-col gap-4 xl:4/5 lg:w-3/5 md:w-3/4 sm:w-4/5 w-4/5  m-auto">
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-4 font-medium"
        >
          בחירת קבוצה
        </Typography>
        <Select label="בחרי קבוצה">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>

      <div className="my-6">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-4 font-medium"
        >
          פרטי השיעור
        </Typography>

        <Input type="date" label="תאריך השיעור" max={today} />
        <div className="my-4 flex items-center gap-4">
          <Input
            label="שעת תחילת השיעור"
            type="time"
            containerProps={{ className: "min-w-[72px]" }}
          />
          <Input
            label="שעת סיום השיעור"
            type="time"
            containerProps={{ className: "min-w-[72px]" }}
          />
        </div>
      </div>
      <Button size="lg">הוספת שיעור</Button>
    </form>
  );
}
