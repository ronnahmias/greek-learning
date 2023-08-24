"use client";
import { SortableTable } from "@components/table/table";

export default function LessonsPage() {
  return (
    <section className="lg:w-4/5 m-auto">
      <SortableTable
        addButtonText="הוספת שיעור"
        addButtonOnClick={() => {
          console.log("add button clicked");
        }}
        title="השיעורים שלי"
        subtitle="כל השיעורים הפרטיים"
      />
    </section>
  );
}
