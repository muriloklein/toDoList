"use client";
import { useEffect, useState } from "react";
import Appointment from "../Appointment";

interface AppointmentType {
  id: number;
  name: string;
  done: boolean;
}

interface Props {
  day: string;
}

const Day: React.FC<Props> = ({ day }) => {
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAppointments = localStorage.getItem(`appointments${day}`);
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      }
    }
  }, [day]);

  const addAppointment = () => {
    const name = prompt("Informe o compromisso: ");
    if (name == "" || name == null) {
      window.alert("Error, Digite alguma coisa!");
    } else {
      const newAppointment = {
        id: Math.floor(100000 * (Math.random() + 1)),
        name,
        done: false,
      };
      setAppointments((state) => {
        const newState = [...state, newAppointment];
        localStorage.setItem(`appointments${day}`, JSON.stringify(newState));
        return newState;
      });
    }
  };

  const toggleDone = (appointmentId: number) => {
    setAppointments((state) =>
      state.map((appointment) => {
        if (appointment.id !== appointmentId) {
          return appointment;
        } else {
          const withoutAppointment = state.filter(
            (a) => a.id !== appointmentId
          );
          let newState = [
            ...withoutAppointment,
            { ...appointment, done: !appointment.done },
          ];
          localStorage.setItem(`appointments${day}`, JSON.stringify(newState));
          return { ...appointment, done: !appointment.done };
        }
      })
    );
  };

  const removeAppointment = (appointmentId: number) => {
    setAppointments((state) => {
      const newState = state.filter((a) => a.id !== appointmentId);
      localStorage.setItem(`appointments${day}`, JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="day">
      <h2>{day}</h2>
      <hr />
      <ul>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            toggleDone={toggleDone}
            removeAppointment={removeAppointment}
          />
        ))}
      </ul>
      <button onClick={addAppointment} className="buttons">
        Adicionar
      </button>
    </div>
  );
};

export default Day;
