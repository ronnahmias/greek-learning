"use client";

import {
  Button,
  Input,
  Option,
  Select,
  Typography,
  Spinner,
} from "@/components/material/import.material.tailwind";
import { fetcher } from "@lib/swr/fetcher";
import useSWR from "swr";
import { ILauderGroup } from "@lib/interfaces/lauderGroups";

interface LauderLessonFormProps {}

export default function LauderLessonForm({}: LauderLessonFormProps) {
  const today = new Date().toISOString().split("T")[0];
  const {
    data: lauderGroups,
    error: erLauderGroups,
    isLoading: loadLauderGroups,
  } = useSWR("/api/lauder/groups", fetcher);
  console.log("is loading lauder groups", loadLauderGroups);
  console.log("error lauder groups", erLauderGroups);

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
        {loadLauderGroups && <Spinner className="m-auto" />}
        {erLauderGroups && (
          <Typography variant="small" color="red">
            {erLauderGroups}
          </Typography>
        )}
        {lauderGroups && lauderGroups.length > 0 && (
          <Select label="בחרי קבוצה">
            {lauderGroups?.map((group: ILauderGroup) => (
              <Option key={group.id} value={group.name}>
                {group.name}
              </Option>
            ))}
          </Select>
        )}
      </div>

      <div className="my-6">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-4 font-medium"
        >
          פרטי השיעור
        </Typography>

        <Input type="date" name="date" label="תאריך השיעור" max={today} />
        <div className="my-4 flex items-center gap-4">
          <Input
            label="שעת תחילת השיעור"
            type="time"
            name="startTime"
            containerProps={{ className: "min-w-[72px]" }}
          />
          <Input
            label="שעת סיום השיעור"
            type="time"
            name="endTime"
            containerProps={{ className: "min-w-[72px]" }}
          />
        </div>
      </div>
      <Button size="lg">הוספת שיעור</Button>
    </form>
  );
}
