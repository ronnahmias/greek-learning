"use client";
import { SortableTable } from "@components/table/table";
import { useRouter } from "next/navigation";

export default function LauderLessonsPage() {
  const router = useRouter();
  return (
    <section className="lg:w-4/5 m-auto">
      <SortableTable
        addButtonText="הוספת שיעור"
        addButtonOnClick={() => {
          router.push("/lauder-lessons/new");
        }}
        title="שיעורי לאודר"
        subtitle=""
      />
    </section>
  );
}
