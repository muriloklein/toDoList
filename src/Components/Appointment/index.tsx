interface AppointmentType {
  id: number;
  name: string;
  done: boolean;
}

interface Props {
  appointment: AppointmentType;
  toggleDone: (id: number) => void;
  removeAppointment: (id: number) => void;
}

const Appointment: React.FC<Props> = ({
  appointment,
  toggleDone,
  removeAppointment,
}) => {
  return (
    <li className={appointment.done ? "done" : ""}>
      <div className="divLabel">
        <input
          type="checkbox"
          className="checkbox"
          name=""
          id={`appointment-${appointment.id}`}
          onChange={() => {
            toggleDone(appointment.id);
          }}
          checked={appointment.done}
        />
        <label htmlFor={`appointment-${appointment.id}`} className="label">
          {appointment.name}
        </label>
      </div>
      <button
        className="removeButton"
        onClick={() => {
          removeAppointment(appointment.id);
        }}
      >
        Remover
      </button>
    </li>
  );
};

export default Appointment;
