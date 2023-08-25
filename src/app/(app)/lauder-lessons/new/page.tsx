// domain.co.il//lauder-lessons/new

import LauderLessonForm from "@components/lauderLesson/lauderLessonForm";

export default function AddNewLauderLessonPage() {
  return (
    <section className="lg:w-4/5 m-auto">
      <h1 className="text-center mt-5 text-lg font-bold">הוספת שיעור חדש</h1>
      <LauderLessonForm />
    </section>
  );
}
