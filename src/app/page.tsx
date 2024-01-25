"use client";
import Day from "@/Components/Day";

const week = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];

export default function Home() {
  return (
    <>
      <main>
        <h1 id="title">Lista de Tarefas Semanal</h1>
        <div className="days">
          {week.map((day) => (
            <Day key={day} day={day} />
          ))}
        </div>
      </main>
    </>
  );
}
