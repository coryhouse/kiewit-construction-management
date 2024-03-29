type InputProps = {
  /** Input label
   *
   * list of stuff
   * - one
   * - two
   *
   * More info [here](https://google.com)
   */
  label: string;

  /** Input id */
  id: string;

  /** Input value */
  value: string;
  type?: "text" | "number" | "email" | "password" | "date";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function Input({
  label,
  id,
  value,
  type = "text",
  error,
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input type={type} onChange={onChange} id={id} value={value} />
      <div>{error}</div>
    </div>
  );
}

// Alternative method for declaring default props
// Input.defaultProps = {
//   type: "text",
// };
