type InputProps = {
  label: string;
  id: string;
  value: string;
  type?: "text" | "number" | "email" | "password" | "date";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        value={props.value}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
};
